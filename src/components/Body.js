import React from 'react'

function Body() {
  return (
    <div className='h-[600px] bg-[url(./img/shoe2.jpg)] relative z-10 bg-cover bg-center lg:bg-cover lg:bg-no-repeat'>
      <div className='absolute bottom-0 left-0 pl-4 pb-1 text-black lg:pl-12 lg:pb-4'>
        <h1 className='text-2xl'>Puma Style White 36-V</h1>
        <p className='text-lg'>Shop now!</p>
      </div>
    </div>
  )
}

export default Body