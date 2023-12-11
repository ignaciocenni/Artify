import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options.ts'

export const getSession = async () => {
  const session = await getServerSession(options)
  return session?.user
}
