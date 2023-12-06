import PriceFilter from './Filters/PriceFilter'
import FilterDropDown from './ui/FilterDropDown'
import { getCategories, getProvinces } from '../app/lib/services/products'

export default async function Filters() {
  const provinces = await getProvinces()
  const categories = await getCategories()
  return (
    <div className="flex flex-col px-5 gap-2 items-start  w-64  ">
      <h1 className="text-2xl font-semibold">Filtros</h1>
      <FilterDropDown options={provinces} name="Provincias" />
      <FilterDropDown options={categories} name="Categorias" />
      <PriceFilter />
    </div>
  )
}
