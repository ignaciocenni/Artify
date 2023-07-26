import { useState } from "react";
import StarRating from "./starsComponent/StarRating";
import axios from "axios";

function AddReviews({ id, buyerId, setLatestReview }) {
  const [form, setForm] = useState({
    comment: "",
    rating: 0,
    productId: id,
    userId: buyerId,
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [filledStars, setFilledStars] = useState(0); // Estado de las estrellas llenas seleccionadas
  const [toggle, setToggle] = useState(true);
  const postReviews = async (id, form) => {
    const url = `/api/products/${id}/reviews`;
    try {
      const response = await axios.post(url, form);
      setLatestReview(form);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handlerOnClick = () => {
    setIsButtonDisabled(true);
    postReviews(id, form)
    .then(() => {
      setForm({
        ...form,
        comment: "",
        rating: 0,
      });
      setToggle(false);
      })
      .catch((error) => {
        console.log("Error al enviar la reseña:", error);
        setIsButtonDisabled(false);
      });
  };

  const handlerChange = (event) => {
    let value = event.target.value;
    setForm({
      ...form,
      comment: value,
    });
  };

  return (
    <>
    {toggle ?<div>
      <h1 className="font-semibold">Haz una reseña</h1>
      <StarRating setForm={setForm} filledStars={filledStars} setFilledStars={setFilledStars} />
      <div className="flex gap-5">
        <input
          onChange={handlerChange}
          className="px-2 text-black w-[600px] h-11 rounded-xl bg-[#F3E8FF]"
          type="text"
          placeholder="Escribe tu reseña"
          value={form.comment}
        />
        <button
          onClick={handlerOnClick}
          className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white text-xs rounded-lg"
          disabled={isButtonDisabled}
        >
          <h1 className="text-xs font-extrabold px-5">Comentar</h1>
        </button>
      </div>
      </div>
      :
      <div></div>
      }
      
    </>
  );
}

export default AddReviews;
