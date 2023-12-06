import prisma from '../../api/db/client'

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
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      userId: true,
      user: true,
      category: true,
      province: true,
      stock: true,
      status: true,
      user: {
        select: {
          name: true,
          lastName: true,
          email: true,
          image: true
        }
      },
      category: {
        select: {
          name: true
        }
      }
    }
  })
}
