import Card from './Card'
import LoadingPublication from './loadings/LoadingPublication'
import NotFounded from './NotFounded'
import { getActiveProducts } from '../app/lib/services'

export default async function Cards() {
  const products = await getActiveProducts()

  if (!products) {
    return <LoadingPublication />
  }

  if (products.length === 0) {
    return <NotFounded />
  }

  return (
    <>
      <div className="flex flex-wrap px-2 gap-4  items-center justify-center w-2/3 mt-[15vh]">
        {products.map((resp) => (
          <Card
            key={resp.id}
            id={resp.id}
            image={resp.image}
            user={`${resp.user.name} ${resp.user.lastName}`}
            price={resp.price}
            title={resp.name}
            userImage={resp.user.image}
            userId={resp.userId}
          />
        ))}
      </div>
    </>
  )
}
