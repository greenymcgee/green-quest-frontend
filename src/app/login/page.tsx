'use client'

import { Spinner } from '@/components'
import { baseApi } from '@/modules/baseApi'

export default function LoginPage() {
  return (
    <main className="container flex h-screen flex-col justify-center">
      <div className="rounded-md bg-neutral-100 p-4 text-neutral-900">
        <h1 className="mb-8 text-center font-serif text-h-xl">Green Quest</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            await baseApi.post('/login', formData)
          }}
        >
          <Spinner theme="success" />
          <fieldset className="text-neutral-700">
            <label className="mb-1 block font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="mb-4 w-full rounded border-neutral-500 px-3 py-2 text-neutral-800"
              id="email"
              name="user[email]"
              type="email"
            />
            <label className="mb-1 block font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded border-neutral-500 px-3 py-2 text-neutral-800"
              id="password"
              name="user[password]"
              type="password"
            />
            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>
    </main>
  )
}
