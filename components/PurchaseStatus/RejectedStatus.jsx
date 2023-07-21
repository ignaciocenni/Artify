export default function RejectedStatus() {
  return (
    <div className="flex items-center justify-center h-[92vh]">
      <div className="bg-gray-100 p-8 rounded-lg shadow-xl text-center">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mr-4">
            ¡Pago Rechazado!
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 text-red-500 animate-bounce"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
        </div>
        <p className="text-lg text-gray-800">
          El pago ha sido rechazado. Por favor, verifica los datos de tu tarjeta
          o intenta con otro método de pago.
        </p>
      </div>
    </div>
  );
}