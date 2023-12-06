import Filters from '../components/Filters'
import Cards from '../components/Cards'
import { getActiveProducts } from './lib/services/products'

export default async function Home({ searchParams }) {
  const products = await getActiveProducts(searchParams)
  return (
    <>
      <div className="flex py-2 px-5 justify-start mt-[15vh]">
        <Filters />
        <Cards products={products} />
      </div>
    </>
  )
}
