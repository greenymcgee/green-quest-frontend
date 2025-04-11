'use client'
import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

import { useToggle } from '@/hooks'

import { Accordion } from '../accordion'
import { Input } from '../input'

type InputProps = Omit<
  HTMLAttributes<HTMLInputElement>,
  'type' | 'tabIndex' | 'name' | 'value' | 'id' | 'defaultChecked'
> & { defaultChecked: boolean; id: string }

interface Filter {
  id: number
  name: string
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  filters: Array<Filter>
  getInputProps(filter: Filter): InputProps
  id: string
  label: string
}

export function Filters({
  className,
  id,
  filters,
  getInputProps,
  label,
  ...options
}: Props) {
  const [expanded, toggleExpanded] = useToggle(true)

  return (
    <div className={clsx('rounded-lg bg-white p-2', className)} {...options}>
      <Accordion
        buttonProps={{ className: 'flex w-full justify-between py-1' }}
        className="px-1"
        expanded={expanded}
        id={id}
        label={label}
        toggleExpanded={toggleExpanded}
      >
        <ul className="max-h-[13rem] overflow-y-auto" tabIndex={-1}>
          {filters.map((filter) => {
            const {
              className: inputClassName,
              id: inputId,
              ...inputOptions
            } = getInputProps(filter)

            return (
              <li
                className="flex items-center justify-between py-2"
                key={filter.id}
              >
                <label
                  className="text-body-sm grow cursor-pointer transition-opacity hover:opacity-70"
                  htmlFor={inputId}
                >
                  {filter.name}
                </label>
                <Input
                  className={clsx('mr-1', inputClassName)}
                  data-testid={inputId}
                  id={inputId}
                  name={id}
                  tabIndex={expanded ? 0 : -1}
                  type="checkbox"
                  value={filter.id}
                  {...inputOptions}
                />
              </li>
            )
          })}
        </ul>
      </Accordion>
    </div>
  )
}
