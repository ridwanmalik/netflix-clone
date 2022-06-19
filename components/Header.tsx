import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BiBell, BiSearch } from "react-icons/bi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  console.log(`Log | file: Header.tsx | line 7 | false`, isScrolled)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header className={ `${isScrolled ? 'bg-eerie-black' : ''}` }>
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <img
              src="https://rb.gy/ulxxee"
              alt="Netflix Logo"
              width={ 100 }
              height={ 100 }
              className="cursor-pointer object-contain"
            />
          </Link>
          <ul className="nav hidden space-x-4 md:flex">
            <li className="nav-item">Home</li>
            <li className="nav-item">TV Shows</li>
            <li className="nav-item">Movies</li>
            <li className="nav-item">New & Popular</li>
            <li className="nav-item">My List</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="h-6 w-6 hidden sm:inline-flex" />
          <p className="hidden lg:inline-flex font-normal">Kids</p>
          <BiBell className="h-6 w-6 hidden sm:inline-flex" />
          <Link href="/account">
            <img
              src="https://rb.gy/g1pwyx"
              alt="Profile Picture"
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
