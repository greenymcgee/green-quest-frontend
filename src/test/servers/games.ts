import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

import { DARK_SOULS, GET_GAMES_RESPONSE_DATA, SUPER_METROID } from '../fixtures'
import { getApiUrl } from '../helpers'

const handlers = [
  http.get(getApiUrl('games'), () =>
    HttpResponse.json(GET_GAMES_RESPONSE_DATA),
  ),
  http.get(getApiUrl('game', [SUPER_METROID.slug]), () =>
    HttpResponse.json({ game: SUPER_METROID }),
  ),
  http.get(getApiUrl('game', [DARK_SOULS.slug]), () =>
    HttpResponse.json({ game: DARK_SOULS }),
  ),
  http.patch(getApiUrl('game', [SUPER_METROID.slug]), () =>
    HttpResponse.json({ game: SUPER_METROID }),
  ),
]

export const gamesServer = setupServer(...handlers)

export function mockGameRequestFailure() {
  const message = `No games found matching ${SUPER_METROID.slug}`
  const response = () =>
    new HttpResponse(JSON.stringify({ message }), { status: 404 })
  gamesServer.use(http.get(getApiUrl('game', [SUPER_METROID.slug]), response))
  return { message, response }
}

export function mockGameUpdateRequestFailure() {
  const message = 'Bad request'
  const response = () =>
    new HttpResponse(JSON.stringify({ message }), { status: 422 })
  gamesServer.use(http.patch(getApiUrl('game', [SUPER_METROID.slug]), response))
  return { message, response }
}
