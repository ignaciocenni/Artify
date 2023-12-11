import prisma from '../../api/db/client'
import { productModel, userModel } from '../models'

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

export const getAllUsers = async ({ activeFilter }) => {
  return activeFilter === 'ALL'
    ? prisma.user.findMany({
        select: userModel
      })
    : prisma.user.findMany({
        where: {
          rol: activeFilter
        },
        select: userModel
      })
}
