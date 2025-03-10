import mockRouter from 'next-router-mock'

import { ROUTES } from '@/constants'
import { SUPER_METROID } from '@/test/fixtures'
import { gamesServer, mockGameUpdateRequestFailure } from '@/test/servers'

import { updateGame } from '..'

beforeAll(() => gamesServer.listen())
afterAll(() => gamesServer.close())
afterEach(() => gamesServer.resetHandlers())

function getFormData() {
  const formData = new FormData()
  formData.set('game[banner_image]', { size: 7 } as File)
  formData.set('game[featured_video_id]', '123abc')
  formData.set('game[published_at]', '2025-02-27T06:54')
  formData.set('game[rating]', '5')
  formData.set('game[review]', '<p>an updated review</p>')
  return formData
}

describe('updateGame', () => {
  describe('success', () => {
    it('should redirect to the game show page', async () => {
      await updateGame({ slug: SUPER_METROID.slug }, getFormData())
      expect(mockRouter.pathname).toEqual(ROUTES.adminGame(SUPER_METROID.slug))
    })
  })

  describe('failure', () => {
    it('should return state with a message', async () => {
      const { message } = mockGameUpdateRequestFailure()
      const response = await updateGame(
        { slug: SUPER_METROID.slug },
        getFormData(),
      )
      expect(response.message).toEqual(message)
    })
  })
})
