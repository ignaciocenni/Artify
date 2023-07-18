import { useState } from "react";
import DropDownRating from "./DropDownRating";
import axios from "axios";




export default function ReviewsForm({ id }) {
  const [form, setForm] = useState({
    comment: "",
    rating: 0,
    productId: id,
  });
  const postReviews = async (id,form ) => {
    const url = `/api/products/${id}/reviews`;
  
    try {
      const response = await axios.post(url, form);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handlerOnClick = () => {
    postReviews(id,form )
    setForm({
      ...form,
      comment: "",
      rating: 0
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
    <form className="form max-w-600 bg-gray-800 text-white p-8 md:p-20 rounded-xl flex flex-col gap-4 md:gap-10">
      <div>
        <DropDownRating setForm={setForm} />
      </div>
      <div>
        <label className="relative flex flex-col">
          <input
            type="text"
            className="input w-full px-4 py-2 md:p-5 outline-none border border-gray-400 rounded-md text-black resize-none"
            required
            placeholder="Agrega aquí tu comentario..."
            onChange={handlerChange}
          />
        </label>
      </div>

      <div className="mt-auto">
        <button
          onClick={handlerOnClick}
          type="button"
          className="hover:bg-[var(--background-sec)] hover:text-black w-full text-white bg-[var(--detail)] py-5 justify-center rounded-lg flex content-center items-center gap-5 shadow-xl">

          <h1 className="text-xs font-extrabold">Comentar</h1>
        </button>
      </div>
    </form>
  );
}
