'use server'
import { revalidatePath } from 'next/cache'

import { ROUTES } from '@/constants'

export async function revalidateGamePreview(slug: string) {
  revalidatePath(ROUTES.gamePreview(slug))
}
