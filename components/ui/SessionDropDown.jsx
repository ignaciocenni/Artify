'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import ButtonSession from '../NavBar/ButtonSession'
import LoginButton from '../NavBar/LoginButton'
import LogoutButton from '../NavBar/LogoutButton'
import ImageLogin from '../NavBar/ImageLogin'

const SessionDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const node = useRef()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        return
      }
      setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div ref={node} className="flex gap-5">
        <ImageLogin />
        <div className="flex">
          <button
            onClick={toggleDropdown}
            className="focus:outline-none px-3 relative hover:bg-[var(--primary)] hover:shadow-lg rounded-full "
          >
            <Image src="/images/arrow-down.svg" width={20} height={20} alt="menu" />
          </button>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-5 top-14 right-0 w-[20%] bg-[var(--background)] border rounded shadow z-40 ">
          <ul>
            <ButtonSession />
            <LoginButton />
            <LogoutButton />
          </ul>
        </div>
      )}
    </>
  )
}

export default SessionDropDown
