'use client'
import React, { SyntheticEvent, useCallback, useRef } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
  convertFiltersToParams,
  filtersPresent as filtersPresentMethod,
  getParamsWithoutFilters,
} from '../../utils'
import { DesktopGameFilters } from '../desktopGameFilters'
import { MobileGameFilters } from '../mobileGameFilters'

const platforms: PlatformWithoutResources[] = [
  {
    abbreviation: 'PS1',
    alternativeName: '',
    createdAt: '',
    generation: 1,
    id: 1,
    igdbId: 1,
    name: 'Playstation',
    slug: 'playstation',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: 'PS2',
    alternativeName: '',
    createdAt: '',
    generation: 2,
    id: 3,
    igdbId: 3,
    name: 'Playstation 2',
    slug: 'playstation-2',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: 'PS3',
    alternativeName: '',
    createdAt: '',
    generation: 3,
    id: 5,
    igdbId: 5,
    name: 'Playstation 3',
    slug: 'playstation-3',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: 'PS4',
    alternativeName: '',
    createdAt: '',
    generation: 4,
    id: 6,
    igdbId: 6,
    name: 'Playstation 4',
    slug: 'playstation-4',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: 'PS5',
    alternativeName: '',
    createdAt: '',
    generation: 5,
    id: 7,
    igdbId: 7,
    name: 'Playstation 5',
    slug: 'playstation-5',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: '',
    alternativeName: '',
    createdAt: '',
    generation: 1,
    id: 4,
    igdbId: 4,
    name: 'Xbox',
    slug: 'xbox',
    summary: '',
    updatedAt: '',
  },
  {
    abbreviation: 'SNES',
    alternativeName: '',
    createdAt: '',
    generation: 1,
    id: 2,
    igdbId: 2,
    name: 'Super Nintendo Entertainment System',
    slug: 'super-nintendo-entertainment-system',
    summary: '',
    updatedAt: '',
  },
]

const companies: Company[] = [
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 1,
    igdbId: 1,
    name: 'Activision',
    slug: 'activision',
    startDate: '',
    updatedAt: '',
  },
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 2,
    igdbId: 2,
    name: 'Nintendo EAD',
    slug: 'nintendo-ead',
    startDate: '',
    updatedAt: '',
  },
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 3,
    igdbId: 3,
    name: 'Fromsoftware',
    slug: 'fromsoftware',
    startDate: '',
    updatedAt: '',
  },
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 4,
    igdbId: 4,
    name: 'Squaresoft',
    slug: 'squaresoft',
    startDate: '',
    updatedAt: '',
  },
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 5,
    igdbId: 5,
    name: 'Capcom',
    slug: 'capcom',
    startDate: '',
    updatedAt: '',
  },
  {
    countryCode: 1,
    createdAt: '',
    description: '',
    id: 6,
    igdbId: 6,
    name: 'Square Enix',
    slug: 'Square Enix',
    startDate: '',
    updatedAt: '',
  },
]

const genres: GenreWithoutResources[] = [
  { createdAt: '', id: 1, igdbId: 1, name: 'RPG', slug: 'rpg', updatedAt: '' },
  {
    createdAt: '',
    id: 2,
    igdbId: 2,
    name: 'Puzzle',
    slug: 'puzzle',
    updatedAt: '',
  },
  {
    createdAt: '',
    id: 3,
    igdbId: 3,
    name: 'Action',
    slug: 'action',
    updatedAt: '',
  },
  {
    createdAt: '',
    id: 4,
    igdbId: 4,
    name: 'Shooter',
    slug: 'shooter',
    updatedAt: '',
  },
  { createdAt: '', id: 5, igdbId: 5, name: 'MMO', slug: 'mmo', updatedAt: '' },
]

export function GameFilters() {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)
  const filtersPresent = filtersPresentMethod(searchParams)
  const pushToSearchResults = useCallback(
    (query: string) => push(`${pathname}?${query}`),
    [pathname, push],
  )

  const handleSubmit = useCallback(
    (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault()
      const query = convertFiltersToParams(
        event,
        new URLSearchParams(searchParams),
      )
      pushToSearchResults(query)
    },
    [pushToSearchResults, searchParams],
  )

  const handleClearClicked = useCallback(() => {
    const params = getParamsWithoutFilters(new URLSearchParams(searchParams))
    pushToSearchResults(params)
    formRef.current?.reset()
  }, [pushToSearchResults, searchParams])

  return (
    <>
      <MobileGameFilters
        companies={companies}
        filtersPresent={filtersPresent}
        genres={genres}
        onClearClicked={handleClearClicked}
        onSubmit={handleSubmit}
        platforms={platforms}
        ref={formRef}
      />
      <DesktopGameFilters
        companies={companies}
        filtersPresent={filtersPresent}
        genres={genres}
        onClearClicked={handleClearClicked}
        onSubmit={handleSubmit}
        platforms={platforms}
        ref={formRef}
      />
    </>
  )
}
