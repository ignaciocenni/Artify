import { useState } from "react";
import DropDownRating from "./DropDownRating";

export default function ReviewsForm({ id }) {
  const [form, setForm] = useState({
    comment: "",
    rating: 0,
    productId: id,
  });

  const handlerOnClick = (event) => {
    event.preventDefault();
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
          type="submit"
          className="submit bg-black text-white font-bold rounded-md p-4 md:p-10 text-lg md:text-16 transform transition-all hover:bg-black-dark"
        >
          Comentar
        </button>
      </div>
    </form>
  );
}
