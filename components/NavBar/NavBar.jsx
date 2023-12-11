import NewPublication from '../ui/NewPublication'
import Image from 'next/image'
import Link from 'next/link'
import CartButton from './CartButton'
import SearchBar from '../SearchBar'
import SessionDropDown from '../ui/SessionDropDown'

const NavBar = () => {
  return (
    <nav className="flex fixed top-0 w-full left-0 justify-between items-center h-[10vh] px-10 shadow-md bg-[var(--background)] z-50">
      <Link href="/">
        <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
      </Link>
      <SearchBar />
      <NewPublication />
      <Link href="/cart">
        <CartButton />
      </Link>
      <SessionDropDown />
    </nav>
  )
}

export default NavBar
