import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import { ROUTES } from '@/constants'

import { GameFilters } from '..'

beforeEach(() => {
  mockRouter.pathname = ROUTES.games
})

const FILTERED_PATHNAME = `${ROUTES.games}?${encodeURI('platforms[]=2')}`

describe('<GameFilters />', () => {
  it('should render mobile filters', () => {
    render(<GameFilters />)
    expect(screen.getByTestId('mobile-game-filters')).toBeVisible()
  })

  it('should render desktop filters', () => {
    render(<GameFilters />)
    expect(screen.getByTestId('desktop-game-filters')).toBeVisible()
  })

  describe('mobile', () => {
    it('should apply filters', () => {
      render(<GameFilters />)
      fireEvent.click(screen.getByTestId('mobile-filter-button'))
      fireEvent.click(screen.getByTestId('mobile-platforms-2'))
      fireEvent.click(screen.getByTestId('mobile-apply-filters-button'))
      expect(mockRouter.asPath).toBe(FILTERED_PATHNAME)
    })

    it('should clear filters', () => {
      mockRouter.push(FILTERED_PATHNAME)
      render(<GameFilters />)
      fireEvent.click(screen.getByTestId('mobile-clear-filters-button'))
      expect(mockRouter.asPath).toBe(ROUTES.games)
    })
  })

  describe('desktop', () => {
    it('should apply filters', () => {
      render(<GameFilters />)
      fireEvent.click(screen.getByTestId('desktop-platforms-2'))
      fireEvent.click(screen.getByTestId('desktop-apply-filters-button'))
      expect(mockRouter.asPath).toBe(FILTERED_PATHNAME)
    })

    it('should clear filters', () => {
      mockRouter.push(FILTERED_PATHNAME)
      render(<GameFilters />)
      fireEvent.click(screen.getByTestId('desktop-clear-filters-button'))
      expect(mockRouter.asPath).toBe(ROUTES.games)
    })
  })
})
