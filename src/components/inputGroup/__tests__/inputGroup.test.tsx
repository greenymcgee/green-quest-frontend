/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { render, screen } from '@testing-library/react'

import { InputGroup } from '..'

describe('<InputGroup />', () => {
  it('should pass inputProps to the input', () => {
    render(
      <InputGroup id="test" inputProps={{ type: 'checkbox' }} label="Test" />,
    )
    expect(screen.getByTestId('input-test').getAttribute('type')).toEqual(
      'checkbox',
    )
  })

  it('should render a label', () => {
    render(<InputGroup id="test" label="Test" />)
    expect(screen.getByText('Test')).toBeVisible()
  })

  it('should render a required label', () => {
    render(
      <InputGroup id="test" inputProps={{ required: true }} label="Test" />,
    )
    expect(screen.getByTestId('label-required-star')).toBeVisible()
  })

  it('should render a required input', () => {
    render(
      <InputGroup id="test" inputProps={{ required: true }} label="Test" />,
    )
    expect(screen.getByTestId('input-test')).toBeRequired()
  })
})

/* eslint-enable @typescript-eslint/ban-ts-comment */
