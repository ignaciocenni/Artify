import MLButton from "../buttons/MLButton";

const FormML = () => {
  return (
    <div className="flex flex-col w-2/3">
      <h1 className="font-semibold text-lg ">Pagos</h1>
      <div className="flex items-center gap-5 w-full">
        <p className="text-xs font-light w-48">
          Para Vender/Comprar una artesania, deberá vincular su cuenta de
          Mercado Pago!
        </p>
        <MLButton />
      </div>
    </div>
  );
};

export default FormML;
