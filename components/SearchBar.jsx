'use client'
import Image from 'next/image'
import lupa from '../public/images/search-white.svg'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')
  const { replace } = useRouter()
  const path = usePathname()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('query', query)
    replace(`${path}?${params.toString()}`)
  }

  useEffect(() => {
    if (query === '') {
      const params = new URLSearchParams(searchParams)
      params.delete('query')
      replace(`${path}?${params.toString()}`)
    }
  }, [query, path, searchParams, replace])

  return (
    <form onSubmit={handleSubmit} className={clsx('flex w-96 items-center justify-center', { hidden: path !== '/' })}>
      <input
        placeholder="Buscar.."
        onChange={handleChange}
        value={query}
        className="text-black px-3 w-60 h-11 focus:w-80 rounded-l-xl bg-[var(--primary)] focus:outline-none transition-all"
        type="text"
      />
      <button type="submit" className="bg-[var(--detail)] h-11 px-3 flex items-center rounded-r-xl">
        <Image src={lupa} width={20} height={20} alt="buscar" />
      </button>
    </form>
  )
}
