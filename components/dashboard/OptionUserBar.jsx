'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useEffect } from 'react'

const UserOptions = {
  ALL: 'ALL',
  ADMIN: 'ADMIN',
  USER: 'USER'
}

const OptionPublicationBar = () => {
  const searchParams = useSearchParams()
  const path = usePathname()
  const { replace } = useRouter()
  const filter = searchParams.get('filter') ?? UserOptions.ALL
  const handleOptionClick = (activeFilter) => {
    const params = new URLSearchParams(searchParams)
    params.set('filter', activeFilter)
    replace(`${path}?${params.toString()}`)
  }

  return (
    <div className="flex justify-center items-center gap-2 py-1 ">
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  
          border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium `,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === UserOptions.ALL }
        )}
        onClick={() => handleOptionClick(UserOptions.ALL)}
      >
        Todos
      </button>
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  
          border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium `,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === UserOptions.USER }
        )}
        onClick={() => handleOptionClick(UserOptions.USER)}
      >
        Usuarios
      </button>
      <button
        className={clsx(
          `px-3 py-2 rounded-lg  
          border border-zinc-500 border-opacity-25 justify-center items-center gap-2.5 flex text-xl font-medium `,
          { 'bg-[var(--extra)] text-white shadow-xl': filter === UserOptions.ADMIN }
        )}
        onClick={() => handleOptionClick(UserOptions.ADMIN)}
      >
        Administradores
      </button>
    </div>
  )
}

export default OptionPublicationBar
