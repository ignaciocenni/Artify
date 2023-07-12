import { useState, useEffect } from "react";
import { category } from "../../store/slice";

//crear el action
import { useDispatch } from "react-redux";

export default function CategoryFilter() {

    const [CategoryNames, setCategoryNames] = useState([])
    const [stateCategory, setStateCategory] = useState({
        stateCategory: "Categoria",
    });
    const dispatch = useDispatch();

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleCategorySelect = (cat) => {
        setStateCategory({ stateCategory: cat });
        dispatch(category(cat));
    };

    useEffect(() => {
        fetch("http://localhost:3000/api/category")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error en el GET categorys");
            })
            .then((json) => {
                const names = json.map((province) => province.name);
                setCategoryNames(names);
            });
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="gap-1 items-start">
            <div>
                <button
                    className="bg-[var(--primary)] py-1 relative flex justify-center items-center focus:outline-none  text-gray-600 rounded-xl focus:ring ring-gray-200"
                    onClick={handleDropdownToggle}
                >
                    <p className="px-4">{stateCategory.stateCategory} </p>
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
                            <li value="allCategories"
                                className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer"
                                onClick={() => handleCategorySelect('allCategories')}>
                                All Categories
                                </li>

                            {CategoryNames.length > 0 &&
                                CategoryNames.map((cat) => (
                                    <li
                                        key={cat}
                                        className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer"
                                        onClick={() => handleCategorySelect(cat)}
                                    >
                                        {cat}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </button>
            </div>
        </div>

    )
}
