import React from 'react'

function Latest() {
  return (
    <div>
      <h1 className='text-2xl px-4 pt-6 pb-2'>Special Collections</h1>
      <div className='flex flex-col items-center w-full gap-3 md:flex-row md:px-4'>
        <div className='relative z-10 bg-[url(./img/shoe-new2.webp)] w-11/12 h-[400px] bg-cover bg-center lg:h-[600px]'>
          <div className='absolute bottom-0 px-5 py-3 flex justify-center flex-col gap-1'>
            <h1 className='text-lg text-black'>Sport Collection</h1>
            <button className='border-black border-2 py-2 text-white bg-black rounded-full hover:bg-white hover:text-black transition-all duration-300'>Buy Now</button>
          </div>
        </div>
        <div className='relative z-10 bg-[url(./img/shoe-new1.webp)] w-11/12 h-[400px] bg-cover bg-center lg:h-[600px]'>
          <div className='absolute bottom-0 px-5 py-3 flex justify-center flex-col gap-1'>
            <h1 className='text-lg text-white'>Urban Collection</h1>
            <button className='border-white border-2 py-2 text-black bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest