export default function ApprovedStatus ({redirectTimer}) {
  return (
    <div className="flex items-center justify-center h-[92vh]">
    <div className="bg-gray-100 p-8 rounded-lg shadow-xl text-center">
      <div className="mb-6">
        <h1 className="text-4xl mb-5 font-bold text-black">¡Pago Exitoso!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-green-500 animate-bounce mx-auto"
        >
          <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <p className="text-lg text-gray-800">
        ¡El pago se ha realizado exitosamente! Disfruta de tu nuevo producto.
      </p>
      <p className="text-xl text-gray-800 mt-4">
        Usted será redireccionado al inicio en:
        <span className="text-red-500 font-bold ml-2">{redirectTimer}</span> segundos
      </p>
    </div>
  </div>
  )
}