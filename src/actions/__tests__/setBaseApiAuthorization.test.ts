import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

import { baseApi } from '@/modules'

import { setBaseApiAuthorization } from '../setBaseApiAuthorization'

describe('setBaseApiAuthorization', () => {
  it('should do nothing when the token is blank', async () => {
    await setBaseApiAuthorization()
    expect(baseApi.defaults.headers['Authorization']).toBeUndefined()
  })

  it('should do nothing when the value is blank', async () => {
    const { get } = await cookies()
    vi.mocked(get).mockReturnValue({ value: '' } as RequestCookie)
    await setBaseApiAuthorization()
    expect(baseApi.defaults.headers['Authorization']).toBeUndefined()
  })

  it('should set the baseApi auth when the token is present', async () => {
    const token = 'token'
    const { get } = await cookies()
    vi.mocked(get).mockReturnValue({ value: token } as RequestCookie)
    await setBaseApiAuthorization()
    expect(baseApi.defaults.headers['Authorization']).toEqual(`Bearer ${token}`)
  })
})
