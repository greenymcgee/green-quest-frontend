'use client'
import React, { FormEvent, SyntheticEvent, useCallback, useState } from 'react'

import { Button, InputGroup, LinkTo, Spinner } from '@/components'
import { ROUTES } from '@/constants'

import { usePostResetPassword } from '../hooks'

export function ForgotPasswordForm() {
  const { trigger, isMutating } = usePostResetPassword()
  const [email, setEmail] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  const handleEmailChange = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) =>
      setEmail(event.currentTarget.value),
    [],
  )

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      await trigger(formData)
        .then(() => setSucceeded(true))
        .catch((error) => error)
    },
    [trigger],
  )

  if (isMutating) return <Spinner className="mx-auto" />

  if (succeeded) {
    return (
      <p
        className="px-6 text-primary-900"
        data-testid="reset-password-email-sent-message"
      >
        An email has been sent to <strong>{email}</strong> with a link to reset
        your password.
      </p>
    )
  }

  return (
    <form data-testid="forgot-password-form" onSubmit={handleSubmit}>
      <InputGroup
        className="mb-6"
        id="email"
        inputProps={{
          name: 'email',
          onChange: handleEmailChange,
          type: 'email',
          value: email,
        }}
        label="Email"
        required
      />
      <LinkTo className="mb-6 block text-b-s" href={ROUTES.login}>
        Back to login
      </LinkTo>
      <Button className="ml-auto block" type="submit">
        Submit
      </Button>
    </form>
  )
}