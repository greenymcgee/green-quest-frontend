import React, { PropsWithChildren } from 'react'

import { Heading, LinkTo, Logo } from '@/components'
import { ROUTES } from '@/constants'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-stars bg-top-center min-h-full bg-neutral-900">
      <div className="container flex h-screen flex-col justify-center">
        <div className="mx-auto w-full max-w-xl rounded-md bg-white p-4 text-neutral-900">
          <header className="text-center">
            <LinkTo aria-label="Home" href={ROUTES.home} theme="neutral">
              <Logo className="mb-4 inline-block text-[10rem]" />
            </LinkTo>
            <Heading className="mb-8 font-serif">The Verdant Veil</Heading>
          </header>
          {children}
        </div>
      </div>
    </main>
  )
}
