import prisma from '../../api/db/client'
import { productModel } from '../models'
import { getProductsConfig } from '../filtersHelper'

export const getActiveProducts = async (filters) => {
  const productsConfig = getProductsConfig(filters)
  return await prisma.product.findMany({
    where: productsConfig,
    select: productModel
  })
}

export const getAllProducts = async ({ activeFilter }) => {
  // caso de all da error, validar que sea un status valido antes de hacer la query
  return activeFilter === 'ALL'
    ? await prisma.product.findMany({
        select: productModel
      })
    : await prisma.product.findMany({
        where: {
          status: activeFilter
        },
        select: productModel
      })
}

export const getProvinces = async () => {
  return await prisma.province.findMany()
}

export const getCategories = async () => {
  return await prisma.category.findMany()
}
