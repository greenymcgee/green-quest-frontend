import React, { PropsWithChildren } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import { ROUTES } from '@/constants'
import { useCurrentUser } from '@/context'
import { ADMIN_USER } from '@/test/fixtures'
import { renderWithProviders, toastMock } from '@/test/helpers'
import { loginServer, mockUnauthorizedLoginResponse } from '@/test/servers'

import { LoginForm } from '..'

beforeAll(() => {
  loginServer.listen()
})

afterEach(() => {
  vi.clearAllMocks()
  loginServer.resetHandlers()
})

afterAll(() => {
  loginServer.close()
})

function submitForm() {
  fireEvent.change(screen.getByTestId('email-input'), {
    target: { value: ADMIN_USER.email },
  })
  fireEvent.change(screen.getByTestId('password-input'), {
    target: { value: 'Testpass123!' },
  })
  fireEvent.click(screen.getByText('Login'))
}

describe('<LoginForm />', () => {
  describe('loading', () => {
    it('should render a loader', () => {
      render(<LoginForm />)
      submitForm()
      expect(screen.getByRole('alert')).toBeVisible()
    })
  })

  describe('success', () => {
    it('should redirect the user to the home page', async () => {
      mockRouter.push(ROUTES.login)
      render(<LoginForm />)
      submitForm()
      await waitFor(() => expect(mockRouter.pathname).toEqual(ROUTES.home))
    })

    it('should toast a message', async () => {
      render(<LoginForm />)
      submitForm()
      await waitFor(() => {
        expect(toastMock.success).toHaveBeenCalledWith(
          `Welcome back ${ADMIN_USER.username}`,
        )
      })
    })

    it('should set the current user', async () => {
      function Wrapper({ children }: PropsWithChildren) {
        const { user } = useCurrentUser()
        return (
          <>
            <span>{user.firstName}</span>
            {children}
          </>
        )
      }
      renderWithProviders(<LoginForm />, { wrapper: Wrapper })
      submitForm()
      await waitFor(() => {
        expect(screen.getByText(ADMIN_USER.firstName)).toBeVisible()
      })
    })
  })

  describe('failure', () => {
    it('should toast an error', async () => {
      const message = mockUnauthorizedLoginResponse()
      render(<LoginForm />)
      submitForm()
      await waitFor(() => expect(toastMock.error).toHaveBeenCalledWith(message))
    })
  })
})
