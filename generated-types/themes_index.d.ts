/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The GET /api/themes payload
 */
interface ThemesIndexJson {
  themes: Theme[]
}
/**
 * A Theme.
 */
interface Theme {
  createdAt: string
  id: number
  igdbId: number
  name: string
  slug: string
  updatedAt: string
}
