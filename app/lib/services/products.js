import prisma from '../../api/db/client'

export const getActiveProducts = async ({ Provincias, Categorias, min, max }) => {
  let productsConfig = {
    status: 'ACTIVE'
  }
  if (Provincias) {
    productsConfig = {
      ...productsConfig,
      provinceId: Number(Provincias)
    }
  }
  if (Categorias) {
    productsConfig = {
      ...productsConfig,
      categoryId: Number(Categorias)
    }
  }

  if (min && max) {
    productsConfig = {
      ...productsConfig,
      price: {
        gte: Number(min),
        lte: Number(max)
      }
    }
  }

  return await prisma.product.findMany({
    where: productsConfig,
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
  return await prisma.province.findMany()
}

export const getCategories = async () => {
  return await prisma.category.findMany()
}
