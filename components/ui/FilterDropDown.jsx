'use client'
import ArrowDown from '../ui/ArrowDown'
import { useState, useRef, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function ProvinceFilter({ options, name }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(name)
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const dropdownRef = useRef(null)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleSelect = (option) => {
    setSelectedOption(option)
    const params = new URLSearchParams(searchParams)
    if (option === 'Todas') {
      params.delete(name)
    } else {
      params.set(name, option)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className="w-full" ref={dropdownRef}>
      <button
        className=" bg-[var(--primary)] py-1 relative flex justify-center items-center focus:outline-none  text-gray-600 rounded-xl focus:ring ring-gray-200 group"
        onClick={handleDropdownToggle}
      >
        <p className="px-4">{selectedOption === 'Todas' ? name : selectedOption} </p>
        <ArrowDown />
        <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} top-full min-w-full w-max bg-white shadow-md mt-1 rounded z-10`}>
          <ul className="text-left border rounded">
            <li className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer" onClick={() => handleSelect('Todas')}>
              Todas
            </li>
            {options.map((option) => (
              <li key={option} className="px-4 py-1 hover:bg-grey-100 border-b cursor-pointer" onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  )
}
