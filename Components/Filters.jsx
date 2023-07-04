import { useState } from "react";

const Cities = ["Buenos Aires", "Cordoba", "Mexico", "Chile", "Salta"];

export default function Filters() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filters, setFilters] = useState({
    city: "",
    max: "",
    min: "",
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setFilters({ ...filters, city });
    setIsDropdownOpen(false);
  };
  const handlerImput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFilters({ ...filters, [property]: value });
  };
  const clickHandler = () => {
    console.log(filters);
  };

  return (
    <div className="w-80 h-72 pt-5 pl-5">
      <div>Filters</div>
      <button
        className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group"
        onClick={handleDropdownToggle}
      >
        <p className="px-4">{filters.city || "Ciudad"} </p>
        <span className="border-l p-2 hover:bg-gray-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="https://file.rendit.io/n/0aXnru4DI8UuSC0ZygNs.svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
        <div
          className={`absolute ${
            isDropdownOpen ? "block" : "hidden"
          } top-full min-w-full w-max bg-white shadow-md mt-1 rounded z-10`}
        >
          <ul className="text-left border rounded">
            {Cities.map((city) => (
              <li
                key={city}
                className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </button>
      <div className="flex flex-row justify-between relative  items-center">
        <input
          className="w-28 h-9"
          name="min"
          placeholder="Min"
          value={filters.min}
          onChange={handlerImput}
        />
        <h1> A </h1>
        <input
          className="w-28 h-9"
          name="max"
          placeholder="Max"
          value={filters.max}
          onChange={handlerImput}
        />
      </div>

      <div className="overflow-hidden bg-[#0a0a0a] flex flex-col justify-center relative w-20 h-11 items-center rounded-lg z-0">
        <button
          className="text-xs font-['Inter'] font-bold text-white relative w-1/2"
          onClick={clickHandler}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}
