const InputField = ({ id, type, placeholder, onChange, name, value, errors }) => {
  return (
    <div className="mb-4">
      <input
        className={`appearance-none border border-black bg-blue-100 rounded-xl w-full py-3 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors ? 'border-solid border-2 border-red-500': 'border-solid border-2  border-[var(--extra)]'}`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      {errors && <p className=" text-red-400">{errors}</p>}
    </div>
  );
};

export default InputField