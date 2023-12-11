'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import OptionBar from './OptionBar'
import logoWhite from '../../public/images/logoWhite.svg'

const DashHeader = () => {
  const { data: session } = useSession()
  return (
    <div className="flex flex-col w-full h-44 px-2 py-6 bg-gradient-to-l from-pink-500 via-purple-400 to-purple-900  justify-start items-start gap-5 ">
      <div className="w-full px-2 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-white font-light text-xl">Bienvenido de nuevo!</h1>
          <h1 className="text-white font-semibold">Dashboard • {session ? session.user.role : null}</h1>
        </div>
        <Image src={logoWhite} width={180} height={180} alt="logo" />
      </div>
      <OptionBar session={session} />
    </div>
  )
}

export default DashHeader
