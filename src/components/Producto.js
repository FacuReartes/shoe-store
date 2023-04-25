import React from 'react'

function Producto(props) {
  return (
    <div className='2xl:h-[43rem] 2xl:w-[38rem] xl:h-[35rem] xl:w-[27rem] lg:h-[30rem] lg:w-96 md:h-96 md:w-80 sm:h-80 sm:w-64 mb-4 flex-shrink-0 p-4 h-72 w-56 bg-white shadow-lg snap-start'>
      <img src={props.img} className='md:h-5/6 object-cover object-center h-3/4 w-full'/>
      <div>
        <h1 className='pt-2'>{props.description}</h1>
        <p className='text-lg font-bold'>${props.price}</p>
      </div>
    </div>
  )
}

export default Producto