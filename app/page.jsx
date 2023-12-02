import Filters from '../components/Filters'
import Cards from '../components/Cards'

export default async function Home() {
  return (
    <>
      <div className="flex py-2 px-5 justify-start">
        <Filters />
        <Cards />
      </div>
    </>
  )
}
