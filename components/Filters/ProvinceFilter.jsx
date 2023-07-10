'use client'
import { useState, useEffect } from "react";
import { countrie } from "@/store/slice";

import { useDispatch } from "react-redux";

export default function ProvinceFilter() {

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
    return (
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
    )

}