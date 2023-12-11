export const getProductsConfig = ({ Provincias, Categorias, min, max, query }) => {
  let productsConfig = {
    status: 'ACTIVE'
  }

  if (query) {
    productsConfig = {
      ...productsConfig,
      name: {
        contains: query,
        mode: 'insensitive'
      }
    }
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
  return productsConfig
}
