import CategoryFilter from "./Filters/CategoryFilter";
import ProvinceFilter from "./Filters/ProvinceFilter";
import PriceFilter from "./Filters/PriceFilter";

export default function Filters() {
  return (
    <div className="flex flex-col items-start w-64">
      <div className="flex flex-col gap-3 items-start">
        <h1 className="text-2xl font-semibold">Filtros</h1>
        <ProvinceFilter />
        <CategoryFilter />
        <PriceFilter />
      </div>
    </div>
  );
}
