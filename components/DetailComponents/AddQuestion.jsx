"use-client";

import { useState } from "react";

function AddQuestion({ onQuestion }) {
  const [question, setQuestion] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSubmit = () => {
    if (question.trim() !== "") {
      onQuestion(question);
      setQuestion("");
    }
  };

  return (
    <>
      <h1 className="font-semibold">Haz una pregunta</h1>
      <div className="flex gap-5">
        <input
          value={question}
          onChange={handleQuestionChange}
          className="px-2 text-black w-[600px] h-11 rounded-xl bg-[#F3E8FF]"
          type="text"
          placeholder="Escribe tu pregunta"
        />
        <button
          onClick={handleQuestionSubmit}
          className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-white text-xs rounded-lg">
          <h1 className="text-xs font-extrabold px-5">Enviar</h1>
        </button>
      </div>
    </>
  );
}

export default AddQuestion;
