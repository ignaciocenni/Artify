import Card from './Card'
import LoadingPublication from './loadings/LoadingPublication'
import NotFounded from './NotFounded'
import { Suspense } from 'react'

export default async function Cards({ products }) {
  if (products.length === 0) {
    return <NotFounded />
  }

  return (
    <Suspense fallback={<LoadingPublication />}>
      <div className="flex flex-wrap px-2 gap-4  items-center justify-center w-2/3">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            user={`${product.user.name} ${product.user.lastName}`}
            price={product.price}
            title={product.name}
            userImage={product.user.image}
            userId={product.userId}
          />
        ))}
      </div>
    </Suspense>
  )
}
