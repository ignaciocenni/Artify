'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'

const NewPublication = () => {
  const { data: session } = useSession()
  return (
    <Link
      className={clsx(
        `hover:bg-[var(--background-sec)] hover:text-black
       text-white bg-[var(--detail)]  rounded-lg flex content-center
        items-center shadow-sm text-xs font-bold px-2 h-11`,
        { hidden: !session }
      )}
      href="/post-product"
    >
      Crear Publicación
    </Link>
  )
}

export default NewPublication
