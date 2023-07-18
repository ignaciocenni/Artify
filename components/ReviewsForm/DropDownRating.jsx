import { useState } from "react";
import Star from "../../public/images/star.svg";
import StarBorder from "../../public/images/star_border.svg";
import Image from "next/image";

export default function DropDownRating({setForm}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStars, setSelectedStars] = useState(0); 


  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleStarSelect = (numStars) => {
    setSelectedStars(numStars);
    setIsDropdownOpen(false);
    setForm((prevForm) => ({
      ...prevForm,
      rating: +numStars,  
    }));
  };

  const renderStars = (count) => {
    const totalStars = 5;
    const filledStars = Math.min(count, totalStars);

    return (
      <div className="flex">
        {Array.from({ length: filledStars }, (_, index) => (
          <Image key={index} src={Star} alt="star" />
        ))}
        {Array.from({ length: totalStars - filledStars }, (_, index) => (
          <Image key={index + filledStars} src={StarBorder} alt="star border" />
        ))}
      </div>
    );
  };

  const renderSelectedStars = () => {
    return renderStars(selectedStars);
  };

  return (
    <div className="gap-1 items-start">
      <div>
        <button
          className="bg-[var(--primary)] py-1 relative flex justify-center items-center focus:outline-none text-gray-600 rounded-xl focus:ring ring-gray-200"
          onClick={handleDropdownToggle}
        >
          {renderSelectedStars()}
          <span className="p-2">
            <svg
              className={`w-5 h-5 ${isDropdownOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="https://file.rendit.io/n/0aXnru4DI8UuSC0ZygNs.svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
          <div
            className={`absolute ${
              isDropdownOpen ? "block" : "hidden"
            } top-full min-w-full w-max bg-white shadow-md mt-1 rounded z-10`}
          >
            <ul className="text-left border rounded">
              {Array.from({ length: 5 }, (_, index) => (
                <li
                  key={index}
                  className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer"
                  onClick={() => handleStarSelect(index + 1)}
                >
                  {renderStars(index + 1)}
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
