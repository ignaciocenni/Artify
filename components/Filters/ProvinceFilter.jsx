'use client'
import { useState, useRef, useEffect } from "react";
import { countrie } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";

export default function ProvinceFilter() {
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.valores.provinces);
  const provinceNames = provinces.map((province) => province.name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filters, setFilters] = useState({
    city: "Provincias",
    category: [],
  });
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCitySelect = (city) => {
    setFilters({ ...filters, city: city });
    dispatch(countrie(city));
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        className=" bg-[var(--primary)] py-1 relative flex justify-center items-center focus:outline-none  text-gray-600 rounded-xl focus:ring ring-gray-200 group"
        onClick={handleDropdownToggle}
      >
        <p className="px-4">{filters.city === "Todas" ? "Provincias" : filters.city} </p>
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
          className={`absolute ${
            isDropdownOpen ? "block" : "hidden"
          } top-full min-w-full w-max bg-white shadow-md mt-1 rounded z-10`}
        >
          <ul className="text-left border rounded">
            <li
              className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer"
              onClick={() => handleCitySelect("Todas")}
            >
              Todas
            </li>
            {provinceNames.map((city) => (
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
  );
}
