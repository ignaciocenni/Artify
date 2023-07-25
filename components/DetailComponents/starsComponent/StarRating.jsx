import { useState } from "react";
import FullStar from "./FullStar";
import EmptyStar from "./EmptyStar";

const StarRating = ({ setForm }) => {
  const [rating, setRating] = useState(0);

  const handleStarHover = (hoveredRating) => {
    setRating(hoveredRating);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setForm((prevForm) => ({
      ...prevForm,
      rating: selectedRating,
    }));
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div
            key={index}
            onMouseEnter={() => handleStarHover(starValue)}
            onClick={() => handleStarClick(starValue)}
            onMouseLeave={() => handleStarHover(rating)}
          >
            {starValue <= rating ? <FullStar /> : <EmptyStar />}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
