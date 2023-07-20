import MLButton from "../buttons/MLButton";

export default function FormML() {
  return (
<<<<<<< HEAD
    <>
      <div className="flex flex-col w-2/3 gap-2">
        <h1 className="font-semibold text-lg ">Pagos</h1>
        <p className="text-xs font-light">Para Vender/Comprar una artesania, deberá ingresar su CVU/Alias de Mercado Pago!</p>
        <div className="flex items-center gap-5 w-full">
          <input
            placeholder="CVU/Alias"
            className="text-black px-3 w-60 h-11 rounded-xl bg-[var(--primary)] focus:outline-none"
            type="text"
          />
          <MLButton />
        </div>
=======
    <div className="flex flex-col w-full gap-2">
      <h1 className="font-semibold text-lg ">Pagos</h1>
        <p className="text-xs font-light">
          Para Vender/Comprar una artesania, deberá ingresar su CVU/Alias de Mercado Pago!
        </p>
      <div className="flex items-center gap-5 w-full">
      <input
        placeholder="CVU/Alias"
        className="text-black px-3 w-60 h-11 rounded-xl bg-[var(--primary)] focus:outline-none"
        type="text"
      />
        <MLButton />
>>>>>>> 1ac8b715391c30b6bc8caf7f41ad43b5ed1a3835
      </div>
    </>
  );
}
