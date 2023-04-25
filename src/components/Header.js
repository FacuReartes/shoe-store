import React from 'react'
import { useState } from 'react'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="flex relative justify-between p-5 text-lg items-center select-none bg-white">
      <div>Search</div>
      <div className='text-2xl lg:-translate-y-1/2 lg:-translate-x-1/2 lg:absolute lg:top-1/2 lg:left-1/2'>Sneakers</div>
      <div className='lg:hidden'><a className='hover:cursor-pointer' onClick={handleMenu}>Menu</a></div>
      <ul className={`z-50 lg:flex lg:gap-5 xl:gap-8 lg:bg-none lg:static lg:opacity-100 lg:border-none absolute bg-white w-full lg:w-auto left-0 transition-all duration-500 ${menuOpen ? 'top-[72px] opacity-100' : 'top-[-300px] opacity-0'} border-y-2 border-black z-0`}>
        <li className='px-4 py-2 pt-4 lg:px-0 lg:py-0 lg:pt-0'><a className='hover:cursor-pointer hover:border-b-2 border-gray-500 duration-75 transition-all'>Ofertas</a></li>
        <li className='px-4 py-2 lg:px-0 lg:py-0'><a className='hover:cursor-pointer hover:border-b-2 border-gray-500 duration-75 transition-all'>Productos</a></li>
        <li className='px-4 py-2 lg:px-0 lg:py-0'><a className='hover:cursor-pointer hover:border-b-2 border-gray-500 duration-75 transition-all'>Nosotros</a></li>
        <li className='px-4 py-2 pb-4 lg:px-0 lg:py-0 lg:pb-0'><a className='hover:cursor-pointer hover:border-b-2 border-gray-500 duration-75 transition-all'>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Header