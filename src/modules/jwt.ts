import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'

import { DEVISE_SECRET_KEY, THE_VERDANT_VEIL_JWT } from '@/constants'

export async function verifyJwt(token: string) {
  const decodedJwt = await jwtVerify(
    token,
    new TextEncoder().encode(DEVISE_SECRET_KEY),
  )
  if (typeof decodedJwt.payload !== 'object') throw Error('Invalid JWT')

  return decodedJwt.payload
}

export async function authenticateUser(request: NextRequest) {
  const token = request.cookies.get(THE_VERDANT_VEIL_JWT)?.value
  if (!token) throw Error('Authenticate User: Missing JWT')

  return await verifyJwt(token)
}
