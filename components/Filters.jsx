"use client";
import { countrie, price, category } from "@/store/slice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// const Cities = ["Buenos Aires", "Cordoba", "Mexico", "Chile", "Salta"];
const Categorys = ["Hogar", "Accesorios", "Madera", "Reciclado", "Natural"];

export default function Filters({ products }) {
  const dispatch = useDispatch();
  const [provinceNames, setProvinceNames] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filters, setFilters] = useState({
    city: "",
    max: "",
    min: "",
    category: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/provinces")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error en el GET Provinces");
      })
      .then((json) => {
        const names = json.map((province) => province.name);
        setProvinceNames(names);
      });
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setFilters({ ...filters, city: city });
    dispatch(countrie(city));
  };

  const handlerImput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFilters({ ...filters, [property]: value });
  };
  const handleBuscar = () => {
    const min = filters.min;
    const max = filters.max;
    dispatch(price([min, max]));
  };

  const handleCategorySelect = (category) => {
    if (filters.category.includes(category)) {
      setFilters({
        ...filters,
        category: filters.category.filter((cat) => cat !== category),
      });
    } else {
      setFilters({
        ...filters,
        category: [...filters.category, category],
      });
    }
  };

  const clickHandler = () => {
    dispatch(category(filters));
  };

  return (
    <div className="flex flex-col items-start w-[25%] py-2 px-5 w">
      <div className="gap-1 items-start">
        <h1 className="text-2xl font-semibold">Filtros</h1>
        <div>
          <button
            className=" py-2 relative flex justify-center items-center bg-white  focus:outline-none  text-gray-600 rounded focus:ring ring-gray-200 group"
            onClick={handleDropdownToggle}
          >
            <p className="px-4">{filters.city || "Provincias"} </p>
            <span className=" p-2">
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
              className={`absolute ${isDropdownOpen ? "block" : "hidden"
                } top-full min-w-full w-max bg-white shadow-md mt-1 rounded z-10`}
            >
              <ul className="text-left border rounded">
                {provinceNames.length > 0 &&
                  provinceNames.map((city) => (
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
        </div>
        <div className="flex flex-row justify-between relative items-center">
          <input
            className="p-2 w-28 h-9 mt-6 rounded-md"
            name="min"
            type="number"
            pattern="[0-9]*"
            placeholder="Min."
            value={filters.min}
            onChange={handlerImput}
            style={{ borderRadius: "4px" }}
          />
          <h1 className="mt-6 font-thin"> a </h1>
          <input
            className="p-2 w-28 h-9 mt-6 rounded-md "
            name="max"
            type="number"
            pattern="[0-9]*"
            placeholder="Max."
            value={filters.max}
            onChange={handlerImput}
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="flex justify-center items-center content-center">
          <button
            className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
            onClick={handleBuscar}
          >
            Aplicar
          </button>
        </div>
      </div>

      <hr />

      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Categories</h1>
        {Categorys.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`font-semibold flex items-center rounded-3xl ${filters.category.includes(cat)
                ? "bg-[var(--background-sec)] text-[var(--detail)] mx-1 mt-2 px-5 py-1"
                : "bg-[var(--detail)] text-white mx-1 mt-2 px-5 py-1"
              } cursor-pointer inline-block`}
          >
            {cat} {filters.category.includes(cat) && "x"}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center content-center">
        <button
          className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-xl text-xs font-bold px-6 h-11"
          onClick={clickHandler}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}
