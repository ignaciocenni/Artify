export const productModel = {
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

export const userModel = {
  id: true,
  name: true,
  lastName: true,
  email: true,
  image: true,
  aboutMe: true,
  rol: true,
  socials: true,
  sellerSales: true
}
