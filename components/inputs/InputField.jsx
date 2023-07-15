const InputField = ({ id, type, placeholder, onChange, name, value, error }) => {
  return (
    <div className="mb-4">
      <input
        className="appearance-none border border-black bg-[var(--primary)] rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputField