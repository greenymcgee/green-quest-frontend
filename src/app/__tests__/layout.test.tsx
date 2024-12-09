import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from '../layout'

vi.mock('next/font/google', () => ({
  Libre_Baskerville: vi.fn(() => ({})),
  Noto_Sans_JP: vi.fn(() => ({})),
}))

describe('<Layout />', () => {
  it('should render', () => {
    render(<Layout>Children</Layout>)
    expect(screen.getByText('Children')).toBeVisible()
  })
})
