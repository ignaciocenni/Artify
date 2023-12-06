'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PriceFilter() {
  const searchParams = useSearchParams()
  const [min, setMin] = useState(searchParams.get('min') || '')
  const [max, setMax] = useState(searchParams.get('max') || '')
  const pathname = usePathname()
  const { replace } = useRouter()

  const handlerInput = (event) => {
    event.target.name === 'min' ? setMin(event.target.value) : setMax(event.target.value)
  }

  const handleApply = () => {
    const params = new URLSearchParams(searchParams)
    if (min === '' && max === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor ingrese un precio valido',
        confirmButtonText: 'ok'
      })
      reset()
      return
    }
    if (min > max) {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor ingrese un rango valido',
        confirmButtonText: 'ok'
      })
      reset()
      return
    }
    params.set('min', min)
    params.set('max', max)

    replace(`${pathname}?${params.toString()}`)
  }

  const reset = () => {
    setMax('')
    setMin('')
    const params = new URLSearchParams(searchParams)
    params.delete('max')
    params.delete('min')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between relative items-center gap-4 w-full">
        <input
          className="p-2 w-24 rounded-xl bg-[var(--primary)]"
          name="min"
          type="number"
          pattern="[0-9]*"
          placeholder="Min."
          value={min}
          onChange={handlerInput}
          min="0"
        />
        <h1 className="font-thin"> a </h1>
        <input
          className="p-2 w-24 rounded-xl bg-[var(--primary)]"
          name="max"
          type="number"
          pattern="[0-9]*"
          placeholder="Max."
          value={max}
          onChange={handlerInput}
          min="1"
        />
      </div>
      <div className="flex w-full justify-between">
        <button
          className=" mt-4 overflow-hidden hover:bg-[var(--background-sec)] hover:text-black text-white bg-[var(--detail)]  rounded-lg flex content-center items-center shadow-md text-xs font-bold px-6 h-11"
          onClick={handleApply}
        >
          Aplicar
        </button>
        <button
          className="hover:text-[var(--background-sec)]  shadow-md mt-4 overflow-hidden rounded-lg flex content-center items-center text-xs font-bold px-6 h-11"
          onClick={reset}
        >
          Limpiar filtro
        </button>
      </div>
    </div>
  )
}
