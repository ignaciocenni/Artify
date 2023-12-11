'use server'
import { revalidatePath } from 'next/cache'
import prisma from '../../api/db/client'

export const changeProductStatus = async (id, newStatus) => {
  await prisma.product.update({
    where: {
      id
    },
    data: {
      status: newStatus
    }
  })
  revalidatePath('/')
  revalidatePath('/dashboard')
}
