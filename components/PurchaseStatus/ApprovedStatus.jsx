export default function ApprovedStatus () {
    return (
      <div class="flex items-center justify-center h-[92vh]">
      <div class="bg-gray-100 p-8 rounded-lg shadow-xl text-center">
        <div class="flex items-center mb-6">
          <h1 class="text-4xl font-bold text-black mr-4">¡Pago Exitoso!</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-green-500 animate-bounce">
            <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <p class="text-lg text-gray-800">
          ¡El pago se ha realizado exitosamente! Disfruta de tu nuevo producto.
        </p>
      </div>
    </div>
    )
}