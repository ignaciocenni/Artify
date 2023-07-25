const InputField = ({ id, type, placeholder, onChange, name, value, errors }) => {
  return (
    <div className="mb-4">
      <input
        className="flex gap-3 font-bold text-3xl shadow appearance-none  rounded-xl w-full py-2 px-3 focus:outline-none focus:shadow-outline"
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

export default InputField;
