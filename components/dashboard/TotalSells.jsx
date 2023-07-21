const TotalSells = ({ total }) => {
  return (
    <div className="flex flex-col bg-zinc-50 inl justify-center rounded-3xl h-full px-28 py-14 shadow-md shadow-zinc-400">
      <h1 className="font-bold">Venta total de productos</h1>
      <h1 className="text-xs">Ganancia neta por ventas</h1>
      <h1 className="mt-5 flex items-end text-[var(--secundary)] text-6xl font-light p-2 ">
        {total}
        <h1 className="ml-1 text-[var(--grey)] text-xs italic">
          ingresos totales
        </h1>
      </h1>
    </div>
  );
};

export default TotalSells;
