/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The POST /api/games response payload
 */
interface GamesCreateJson {
  game: Game
}
/**
 * A Game.
 */
interface Game {
  ageRatings: AgeRating[]
  artworks: Artwork[]
  cover: Cover
  createdAt: string
  developers: Company[]
  /**
   * Any errors that might be present after fulfilling a game create request.
   */
  errors?: unknown[]
  franchises: Franchise[]
  gameEngines: GameEngine[]
  gameModes: GameMode[]
  genres: GenreWithoutResources[]
  platforms: PlatformWithoutResources[]
  playerPerspectives: Theme[]
  porters: Company[]
  publishers: Company[]
  /**
   * The unique identifier for a game.
   */
  id: number
  igdbId: number
  name: string
  published: boolean
  /**
   * Richtext: the review of the game.
   */
  review: string
  /**
   * Float: the rating for the game from 1 - 5.
   */
  rating: number
  releaseDates: ReleaseDate[]
  screenshots: Screenshot[]
  slug: string
  supporters: Company[]
  themes: Theme1[]
  websites: Website[]
  videos: GameVideo[]
  updatedAt: string
}
/**
 * An AgeRating.
 */
interface AgeRating {
  createdAt: string
  id: number
  igdbId: number
  /**
   * The url for the image of a age rating.
   */
  ratingCoverUrl: string
  /**
   * A free text motivating a rating.
   */
  synopsis: string
  updatedAt: string
}
/**
 * An Artwork.
 */
interface Artwork {
  animated: boolean
  createdAt: string
  height: number | null
  id: number
  igdbId: number
  updatedAt: string
  url: string
  width: number | null
}
/**
 * A Cover.
 */
interface Cover {
  animated: boolean
  createdAt: string
  height: number | null
  id: number
  igdbId: number
  updatedAt: string
  url: string
  width: number | null
}
/**
 * A Company.
 */
interface Company {
  /**
   * ISO 3166-1 country code.
   */
  countryCode: number | null
  createdAt: string
  description: string
  id: number
  igdbId: number
  name: string
  slug: string
  /**
   * The date the company was founded.
   */
  startDate: string | null
  updatedAt: string
}
/**
 * A Franchise.
 */
interface Franchise {
  createdAt: string
  id: number
  igdbId: number
  /**
   * Whether or not the franchise is the main franchise of the game.
   */
  main: boolean
  name: string
  slug: string
  updatedAt: string
}
/**
 * A GameEngine.
 */
interface GameEngine {
  createdAt: string
  description: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
/**
 * A GameMode.
 */
interface GameMode {
  createdAt: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
/**
 * A version of a Genre that doesn't include relational resources.
 */
interface GenreWithoutResources {
  createdAt: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
/**
 * A version of a Platform that doesn't include relational resources.
 */
interface PlatformWithoutResources {
  /**
   * An abbreviated name for the platform.
   */
  abbreviation: string
  /**
   * An alternative name for the platform.
   */
  alternativeName: string
  createdAt: string
  generation: number | null
  id: number
  igdbId: number
  name: string
  slug: string
  /**
   * The summary of the first Version of this platform.
   */
  summary: string
  updatedAt: string
}
/**
 * A PlayerPerspective.
 */
interface Theme {
  createdAt: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
/**
 * A ReleaseDate.
 */
interface ReleaseDate {
  createdAt: string
  /**
   * The date of the release.
   */
  date: string | null
  /**
   * A human readable representation of the date.
   */
  humanReadable: string
  id: number
  igdbId: number
  /**
   * The month as an integer starting at 1 (January).
   */
  month: number | null
  platformName: string
  updatedAt: string
  /**
   * The year in full (2018).
   */
  year: number | null
}
/**
 * A Screenshot.
 */
interface Screenshot {
  animated: boolean
  createdAt: string
  height: number | null
  id: number
  igdbId: number
  updatedAt: string
  url: string
  width: number | null
}
/**
 * A Theme.
 */
interface Theme1 {
  createdAt: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
/**
 * A Website.
 */
interface Website {
  createdAt: string
  id: number
  igdbId: number
  trusted: boolean
  url: string
  updatedAt: string
}
/**
 * A GameVideo.
 */
interface GameVideo {
  createdAt: string
  id: number
  igdbId: number
  name: string
  updatedAt: string
  videoId: string
}
