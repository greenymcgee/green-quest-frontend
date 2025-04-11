'use client'
import React, { useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

import { Filters } from '@/components'

interface Props {
  companies: Company[]
  genres: GenreWithoutResources[]
  inputIdPrefix: 'mobile' | 'desktop'
  platforms: PlatformWithoutResources[]
  validating: boolean
}

export function GameFiltersGroup({
  companies,
  genres,
  inputIdPrefix,
  platforms,
  validating,
}: Props) {
  const searchParams = useSearchParams()

  const getInputProps = useCallback(
    (type: 'companies' | 'genres' | 'platforms') => {
      return (filter: OneOf<PropsOf<typeof Filters>['filters']>) => ({
        defaultChecked: searchParams.has(`${type}[]`, String(filter.id)),
        id: `${inputIdPrefix}-${type}-${filter.id}`,
      })
    },
    [inputIdPrefix, searchParams],
  )

  return (
    <>
      <Filters
        className="mb-1"
        filters={platforms.map((platform) => ({
          id: platform.id,
          name: platform.abbreviation || platform.name,
        }))}
        getInputProps={getInputProps('platforms')}
        id="platforms"
        label="Platforms"
        validating={validating}
      />
      <Filters
        className="mb-1"
        filters={genres}
        getInputProps={getInputProps('genres')}
        id="genres"
        label="Genres"
        validating={validating}
      />
      <Filters
        filters={companies}
        getInputProps={getInputProps('companies')}
        id="companies"
        label="Companies"
        validating={validating}
      />
    </>
  )
}
