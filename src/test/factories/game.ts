import { Factory } from 'fishery'

const currentTime = new Date().toISOString()

export const gameFactory = Factory.define<Game>(({ sequence }) => ({
  ageRatings: [],
  artworks: [],
  cover: {
    animated: false,
    createdAt: currentTime,
    height: 24,
    id: sequence,
    igdbId: sequence * Math.random(),
    updatedAt: currentTime,
    url: '',
    width: 56,
  },
  createdAt: currentTime,
  developers: [],
  franchises: [],
  gameEngines: [],
  gameModes: [],
  genres: [],
  id: sequence,
  igdbId: sequence * Math.random(),
  name: 'Super Metroid',
  platforms: [],
  playerPerspectives: [],
  porters: [],
  publishers: [],
  rating: 5,
  releaseDates: [],
  review: '<p>So good</p>',
  screenshots: [],
  supporters: [],
  themes: [],
  updatedAt: currentTime,
  websites: [],
}))
