import clsx from 'clsx'

import { TRANSITION_STYLES } from '@/constants'

interface ButtonThemes {
  outline: Record<StyleTheme, string>
  solid: Record<StyleTheme, string>
}

export const DEFAULT_BUTTON_CLASS_NAMES = clsx(
  'rounded-md font-semibold transition-colors',
  TRANSITION_STYLES.inputHover,
)

export const BUTTON_THEMES: ButtonThemes = {
  outline: {
    danger: clsx(
      'border-2 border-danger-900 text-danger-900',
      'hover:border-danger-700 hover:text-danger-700',
    ),
    neutral: clsx(
      'border-2 border-neutral-900 text-neutral-900',
      'hover:border-neutral-700 hover:text-neutral-700',
    ),
    primary: clsx(
      'border-2 border-primary-900 text-primary-900',
      'hover:border-primary-700 hover:text-primary-700',
    ),
    secondary: clsx(
      'border-2 border-secondary-900 text-secondary-900',
      'hover:border-secondary-700 hover:text-secondary-700',
    ),
    success: clsx(
      'border-2 border-success-900 text-neutral-900',
      'hover:border-success-700 hover:text-neutral-700',
    ),
  },
  solid: {
    danger: 'bg-danger-900 text-white hover:bg-danger-700',
    neutral: 'bg-neutral-900 text-white hover:bg-neutral-700',
    primary: 'bg-primary-900 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-900 text-white hover:bg-secondary-700',
    success: 'bg-success-900 text-neutral-900 hover:bg-success-700',
  },
} as const

export const BUTTON_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  lg: 'px-6 py-4',
  md: 'px-5 py-3',
  sm: 'px-3 py-2',
} as const
