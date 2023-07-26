import React from 'react'

function TotalUsers({total}) {
  return (
    <div className="flex flex-col inl justify-center rounded-3xl h-full px-28 py-14 shadow-md shadow-zinc-400 bg-white">
    <h1 className="font-bold">Usuarios totales</h1>
    <h1 className="text-xs">Usuarios totales registrados en Artify</h1>
    <h1 className="mt-5 flex items-end text-[var(--secundary)] text-6xl font-light p-2 ">
      {total}
      <h1 className="ml-1 text-[var(--grey)] text-xs italic">
        usuarios totales
      </h1>
    </h1>
  </div>
  )
}

export default TotalUsers