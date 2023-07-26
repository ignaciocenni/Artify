export default function DeleteUser() {
  return (
    <div>
        <div className=" mb-5">
          <h1 className="text-red-500 py-3 text-xl font-semibold">Eliminar cuenta</h1>
          <div className="px-3 border-2 border-red-500 rounded-lg grid grid-cols-3 grid-rows-4">
            <div className=" row-start-2 col-span-2" >
              <h2 className="font-semibold text-sm">Eliminar esta cuenta</h2>
            </div>
            <div className=' col-span-2 row-start-3 '>
              <h2 className="text-xs font-light text-zinc-500" >Si elimina esta cuenta no podrá recuperarla</h2>
            </div>
            <div className=" row-start-2 col-start-3 row-span-2 grid justify-center content-center ">
              <button className="shadow-sm shadow-red-500 rounded-lg py-2 px-4 font-bold text-gray-50 bg-red-500 ">
                Eliminar cuenta
              </button>
            </div>
          </div>

        </div>
    </div>
  )
}
