/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The GET /api/games payload
 */
interface GamesIndexJson {
  games: GameWithoutResources[]
}
/**
 * A version of a Game that doesn't include relational resources.
 */
interface GameWithoutResources {
  createdAt: string
  id: number
  igdbId: number
  name: string
  /**
   * Float: the rating for the game from 1 - 5.
   */
  rating: number
  /**
   * Richtext: the review of the game.
   */
  review: string
  updatedAt: string
}
