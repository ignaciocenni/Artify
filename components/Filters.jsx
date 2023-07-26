import CategoryFilter from "./Filters/CategoryFilter";
import ProvinceFilter from "./Filters/ProvinceFilter";
import PriceFilter from "./Filters/PriceFilter";

export default function Filters() {
  return (
    <div className="flex flex-col px-5 gap-2 items-start h-screen w-64 fixed left-0 mt-[10vh]">
      <h1 className="text-2xl font-semibold">Filtros</h1>
      <ProvinceFilter />
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
}
