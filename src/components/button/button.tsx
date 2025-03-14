/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  BUTTON_SIZES,
  BUTTON_THEMES,
  DEFAULT_BUTTON_CLASS_NAMES,
} from '@/constants'

import { Icon } from '../icon'
import { Spinner } from '../spinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: IconType
  loading?: boolean
  rightIcon?: IconType
  size?: keyof typeof BUTTON_SIZES
  text?: string
  theme?: StyleTheme
  variant?: ButtonVariant
}

export function Button({
  children,
  className,
  leftIcon,
  loading,
  rightIcon,
  size = 'md',
  text,
  theme = 'primary',
  variant = 'solid',
  type = 'button',
  ...options
}: ButtonProps) {
  return (
    <button
      aria-disabled={loading}
      aria-label={loading ? 'Loading' : undefined}
      className={twMerge(
        clsx(
          BUTTON_THEMES[variant][theme],
          BUTTON_SIZES[size],
          DEFAULT_BUTTON_CLASS_NAMES,
          { 'pointer-events-none cursor-not-allowed opacity-70': loading },
        ),
        className,
      )}
      type={type}
      {...options}
    >
      {loading ? <Spinner size="xs" theme={theme} /> : null}
      {leftIcon ? <Icon icon={leftIcon} /> : null}
      {text ?? children}
      {rightIcon ? <Icon icon={rightIcon} /> : null}
    </button>
  )
}

/* eslint-enable react/button-has-type */
