/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The GET /api/involved_companies payload
 */
interface InvolvedCompaniesIndexJson {
  involvedCompanies: InvolvedCompany[]
}
/**
 * An InvolvedCompany.
 */
interface InvolvedCompany {
  createdAt: string
  id: number
  igdbId: number
  isDeveloper: boolean
  isPorter: boolean
  isPublisher: boolean
  isSupporter: boolean
  updatedAt: string
}
