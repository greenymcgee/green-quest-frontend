/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The GET /api/platform_logos payload
 */
interface PlatformLogosIndexJson {
  platformLogos: PlatformLogo[]
}
/**
 * A PlatformLogo.
 */
interface PlatformLogo {
  animated: boolean
  createdAt: string
  height: number | null
  id: number
  igdbId: number
  updatedAt: string
  url: string
  width: number | null
}
