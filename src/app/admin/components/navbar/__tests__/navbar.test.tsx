import React, { act } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Navbar } from '..'

describe('<Navbar />', () => {
  it('should render a link to Green Quest', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Green Quest')).toBeVisible()
  })

  it('should render a hamburger menu', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Open Hamburger Menu')).toBeVisible()
  })

  it('should render desktop navigation', () => {
    render(<Navbar />)
    expect(screen.getByTestId('desktop-navigation')).toBeVisible()
  })

  it('should render a close button for the hamburger menu', async () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Open Hamburger Menu'))
    fireEvent.click(screen.getByText('Close'))
    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(''), 100))
    })
    expect(screen.getByTestId('hamburger-menu')).not.toBeVisible()
  })

  it('should render a logout button', async () => {
    render(<Navbar />)
    expect(screen.getByTestId('desktop-logout-button')).toBeVisible()
  })

  it('should render a logout button for the hamburger menu', async () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Open Hamburger Menu'))
    fireEvent.click(screen.getByText('Close'))
    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(''), 100))
    })
    expect(screen.getByTestId('mobile-logout-button')).not.toBeVisible()
  })
})
