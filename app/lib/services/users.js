import prisma from '../../api/db/client'
import { productModel } from '../models'

export const getUserInfo = async (id) => {
  return prisma.user.findFirst({
    where: { id }
  })
}

export const getUserProducts = async (id) => {
  return prisma.product.findMany({
    where: {
      userId: id,
      status: 'ACTIVE'
    },
    select: productModel
  })
}
