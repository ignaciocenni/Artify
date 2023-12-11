'use client'
import clsx from 'clsx'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const PublicationOptions = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  INACTIVE: 'INACTIVE'
}

const OptionPublicationBar = () => {
  const searchParams = useSearchParams()
  const path = usePathname()
  const { replace } = useRouter()
  const filter = searchParams.get('filter') ?? PublicationOptions.ALL
  const handleOptionClick = (activeFilter) => {
    const params = new URLSearchParams(searchParams)
    params.set('filter', activeFilter)
    replace(`${path}?${params.toString()}`)
  }
  return (
    <div className="flex justify-center items-center gap-2 py-1 ">
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  border border-zinc-500 border-opacity-25
           justify-center items-center gap-2.5 flex text-xl font-medium`,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === PublicationOptions.ALL }
        )}
        onClick={() => handleOptionClick(PublicationOptions.ALL)}
      >
        Todas
      </button>
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  border border-zinc-500 border-opacity-25
           justify-center items-center gap-2.5 flex text-xl font-medium`,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === PublicationOptions.ACTIVE }
        )}
        onClick={() => handleOptionClick(PublicationOptions.ACTIVE)}
      >
        Activas
      </button>
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  border border-zinc-500 border-opacity-25
           justify-center items-center gap-2.5 flex text-xl font-medium`,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === PublicationOptions.PENDING }
        )}
        onClick={() => handleOptionClick(PublicationOptions.PENDING)}
      >
        Pendientes
      </button>
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  border border-zinc-500 border-opacity-25
           justify-center items-center gap-2.5 flex text-xl font-medium`,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === PublicationOptions.INACTIVE }
        )}
        onClick={() => handleOptionClick(PublicationOptions.INACTIVE)}
      >
        Inactivas
      </button>
    </div>
  )
}

export default OptionPublicationBar
