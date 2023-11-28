import React, { forwardRef } from 'react'

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='bg-black text-white px-4'>
      <div className='sm:flex sm:justify-around'>
        <div className='py-4'>
          <h1 className='text-xl font-bold pb-2'>Contact</h1>
          <ul className='text-sm'>
            <li><a className='flex items-center hover:cursor-pointer text-gray-300 hover:text-white'><box-icon name='envelope' color='white'/>shoestoreofficial@store.com.ar</a></li>
            <li><a className='flex items-center hover:cursor-pointer text-gray-300 hover:text-white'><box-icon name='phone' color='white'/>999 9999-9999</a></li>
            <li><a className='flex items-center hover:cursor-pointer text-gray-300 hover:text-white'><box-icon name='watch' type='solid' color='white'/>Monday to Friday 8AM to 9PM</a></li>
          </ul>
        </div>
        <div className='py-4'>
          <h1 className='text-xl font-bold pb-2'>Help</h1>
          <ul className='text-sm'>
            <li><a className='hover:cursor-pointer text-gray-300 hover:text-white'>Shops location</a></li>
            <li><a className='hover:cursor-pointer text-gray-300 hover:text-white'>Order Status</a></li>
            <li><a className='hover:cursor-pointer text-gray-300 hover:text-white'>Terms & Service</a></li>
            <li><a className='hover:cursor-pointer text-gray-300 hover:text-white'>Refunds</a></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center py-2'>
        <p className='text-xs'>Made by Facundo Reartes</p>
      </div>
    </div>
  )
});

export default Footer