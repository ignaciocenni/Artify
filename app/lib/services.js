import prisma from '../api/db/client'

export const getActiveProducts = async () => {
  return await prisma.product.findMany({
    where: {
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

export const getProvinces = async () => {
  const rawProvinces = await prisma.province.findMany()
  return rawProvinces.map((province) => province.name)
}

export const getCategories = async () => {
  const rawCategories = await prisma.category.findMany()
  return rawCategories.map((category) => category.name)
}
