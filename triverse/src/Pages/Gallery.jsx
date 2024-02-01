import React from 'react'
import CarouselVert from '../Components/CarouselVert'
import CarouselNormal from '../Components/CarouselNormal'
const Gallery = () => {
  return (
    <div className='w-screen h-screen  p-20 text-center'>
      <h1 className='text-6xl mb-16'>Our Events</h1>
      
     <div className=' '>
       <CarouselNormal/>      
     </div>
      
    </div>
  )
}

export default Gallery
