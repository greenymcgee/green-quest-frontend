'use client'
import React, { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import { Button, InputGroup, LinkTo, Spinner } from '@/components'
import { ROUTES } from '@/constants'

import { login } from '../actions'

export function LoginForm() {
  const [{ email, error, password, user }, action, loggingIn] = useActionState(
    login,
    {},
    ROUTES.login,
  )
  const { push } = useRouter()

  useEffect(() => {
    if (loggingIn || !error) return

    toast.error(error)
  }, [error, loggingIn, user])

  useEffect(() => {
    if (!user) return

    push(ROUTES.home)
    setTimeout(() => toast.success(`Welcome back ${user.username}`))
  }, [push, user])

  return (
    <form action={action} data-testid="login-form">
      {loggingIn || user ? (
        <Spinner className="mx-auto" />
      ) : (
        <>
          <InputGroup
            className="mb-6"
            id="email"
            inputProps={{
              autoComplete: 'email',
              defaultValue: email,
              name: 'email',
              type: 'email',
            }}
            label="Email"
            required
          />
          <InputGroup
            className="mb-2"
            id="password"
            inputProps={{
              autoComplete: 'current-password',
              defaultValue: password,
              name: 'password',
              type: 'password',
            }}
            label="Password"
            required
          />
          <LinkTo
            className="mb-6 block text-body-sm"
            href={ROUTES.forgotYourPassword}
          >
            Forgot your password?
          </LinkTo>
          <Button className="ml-auto block" type="submit">
            Login
          </Button>
        </>
      )}
    </form>
  )
}
