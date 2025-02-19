import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { ROUTES } from '@/constants'
import { SUPER_METROID } from '@/test/fixtures'
import { gamesServer, mockGameRequestFailure } from '@/test/servers'

import EditGamePage from '../page'

beforeAll(() => gamesServer.listen())
afterAll(() => gamesServer.close())
afterEach(() => gamesServer.resetHandlers())

const PROPS: PropsOf<typeof EditGamePage> = {
  params: Promise.resolve({ slug: SUPER_METROID.slug }),
}

describe('<EditGamePage />', () => {
  describe('success', () => {
    it('should render the edit game form', async () => {
      const jsx = await EditGamePage(PROPS)
      render(jsx)
      expect(screen.getByTestId('edit-game-form')).toBeVisible()
    })
  })

  describe('failure', () => {
    it('should render a message', async () => {
      const { message } = mockGameRequestFailure()
      const jsx = await EditGamePage(PROPS)
      render(jsx)
      expect(screen.getByText(message)).toBeVisible()
    })

    it('should render a link back to games', async () => {
      mockGameRequestFailure()
      const jsx = await EditGamePage(PROPS)
      render(jsx)
      expect(
        screen.getByTestId('back-to-games-link').getAttribute('href'),
      ).toEqual(ROUTES.adminGames)
    })
  })
})
