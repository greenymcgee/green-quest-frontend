import { HTMLAttributes } from 'react'
import clsx from 'clsx'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  theme?: StyleTheme
}

export function Spinner({ theme = 'primary', ...options }: SpinnerProps) {
  return (
    <div
      aria-label="Loading"
      className={clsx('spinner', theme)}
      role="alert"
      {...options}
    />
  )
}
