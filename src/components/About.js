import React from 'react'

function About(props) {
  return (
    <div className='px-4'>
      <div className='flex gap-4'>
        <div className='pb-4 basis-1/2'>
          <img src={props.img1} className='w-full h-56 lg:h-72 xl:h-80'/>
          <div className='py-5 px-4 md:px-0'>
            <h1 className='py-3 font-bold text-xl'>About us</h1>
            <p>We are the most solid choice with five retail locations scattered throughout the country, we offer a diverse selection of shoes, ranging from stylish casual sneakers to high-performance athletic footwear</p>
          </div>
        </div>
        <div className='pb-4 basis-1/2'>
          <img src={props.img2} className='w-full h-56 lg:h-72 xl:h-80 object-cover object-bottom'/>
          <div className='py-5 px-4 md:px-0'>
            <h1 className='py-3 font-bold text-xl'>Our history</h1>
            <p>Founded in the early 2000s, the we began as a small, family-owned business with a passion for footwear. Over the years, it expanded, opening several locations across the country, each one staffed by a team of passionate and knowledgeable associates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About