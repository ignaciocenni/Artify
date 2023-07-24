import { useState } from "react";
import DropDownRating from "./DropDownRating";
import axios from "axios";

function AddReviews({ id, setToggle,buyerId }) {
  const [form, setForm] = useState({
    comment: "",
    rating: 0,
    productId: id,
    userId:buyerId
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(true);

  const postReviews = async (id, form) => {
    const url = `http://localhost:3000/api/products/${id}/reviews`;
    console.log('esa acaaa '+form)
    console.log('esa acaaa '+id)
    try {
      const response = await axios.post(url, form);
      console.log("funciono");
      return response.data;
    } catch (error) {
      console.log("no funciono");
      throw error;
    }
  };

  const handlerOnClick = () => {
    setIsButtonDisabled(true); 
    postReviews(id, form)
      .then(() => {
        setIsDropDownVisible(false);
        setForm({
          ...form,
          comment: "",
          rating: 0,
        });
        setToggle(false)
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
      <h1 className="font-semibold">Haz una reseña</h1>
      {isDropDownVisible && <DropDownRating setForm={setForm} />}

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
    </>
  );
}

export default AddReviews;
