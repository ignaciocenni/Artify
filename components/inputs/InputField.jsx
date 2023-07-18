const InputField = ({ id, type, placeholder, onChange, name, value, errors }) => {
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
      {errors && <p>{errors}</p>}
    </div>
  );
};

export default InputField