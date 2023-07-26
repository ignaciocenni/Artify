const SubmitButton = ({ disabled, label }) => {
  const disabledStyle = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : "bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black";
  return (
    <div className="mb-3 w-">
      <button
         className={`text-lg text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full ${disabledStyle}`}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
