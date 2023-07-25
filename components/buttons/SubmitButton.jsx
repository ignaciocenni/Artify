const SubmitButton = ({ disabled, label }) => {
  return (
    <div className="mb-3 w-">
      <button
         className="bg-[var(--detail)] hover:bg-[var(--background-sec)] hover:text-black text-lg  text-white font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full "
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
