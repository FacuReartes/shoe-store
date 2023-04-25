import React from 'react'
import img from '../img'
import Producto from './Producto'


function Trending() {

  const myProducts = [
    {id:0, description:'Puma Urban', price:'40.000', img:img.pumaUrban},
    {id:1, description:'Vans  Style', price:'23.000', img:img.vansStyle},
    {id:2, description:'Nike Sport', price:'61.000', img:img.nikeSport},
    {id:3, description:'Nike Goldens', price:'65.000', img:img.nikeGolden},
    {id:4, description:'Nike Goldens', price:'65.000', img:img.nikeGolden},
    {id:5, description:'Nike Goldens', price:'65.000', img:img.nikeGolden},
    {id:6, description:'Nike Goldens', price:'65.000', img:img.nikeGolden},
    {id:7, description:'Nike Goldens', price:'65.000', img:img.nikeGolden},
  ]

  const products = myProducts.map((i) => (
    <Producto id={i.id} description={i.description} price={i.price} img={i.img}/>
  ))

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    var screenWidth = window.innerWidth;
    var scrollAmount = screenWidth < 1220 ? screenWidth - screenWidth / 3 : screenWidth
    slider.scrollLeft = slider.scrollLeft - scrollAmount;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    var screenWidth = window.innerWidth;
    var scrollAmount = screenWidth < 1220 ? screenWidth - screenWidth / 3 : screenWidth
    slider.scrollLeft = slider.scrollLeft + scrollAmount;
  }

  return (
    <div className='px-4 py-6 relative'>
      <h1 className='text-2xl pb-2'>Our Trending Products</h1>
      <div className='hidden hover:opacity-100 hover:cursor-pointer absolute top-2/4 left-1 lg:flex items-center rounded-full bg-slate-700 opacity-90' onClick={slideLeft}><box-icon name='chevron-left' size='md' color='white'/></div>
      <div className='scrollbar-hide flex gap-4 overflow-x-scroll snap-x snap-mandatory scroll-smooth' id='slider'>
        {products}
      </div>
      <div className='hidden hover:opacity-100 hover:cursor-pointer absolute top-2/4 right-1 lg:flex items-center rounded-full bg-slate-700 opacity-90' onClick={slideRight}><box-icon name='chevron-right' size='md' color='white'/></div>
    </div>
  )
}

export default Trending