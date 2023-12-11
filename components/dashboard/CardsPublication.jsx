import CardPublication from './CardPublication'
import { getSession } from '../../app/lib/serverSession'
import { getAllProducts } from '../../app/lib/services/products'
import { getUserProducts } from '../../app/lib/services/users'
import { Suspense } from 'react'

const CardsPublication = async ({ activeFilter }) => {
  const user = await getSession()
  let products = []
  products = user?.role === 'ADMIN' ? await getAllProducts({ activeFilter }) : await getUserProducts({ id: user?.id, filter: activeFilter })
  if (products.length === 0) {
    return <h1>No se encontraron publicaciones</h1>
  }
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {products.map((product) => (
          <CardPublication
            key={product.id}
            id={product.id}
            image={product.image}
            user={`${product.user.name} ${product.user.lastName}`}
            price={product.price}
            title={product.name}
            category={product.category}
            userImage={product.user.image}
            status={product.status}
          />
        ))}
      </Suspense>
    </>
  )
}

export default CardsPublication
