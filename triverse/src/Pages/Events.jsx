import React from 'react'
import EventCard from '../Components/EventCard'

const evenList = [
    {ImageSrc :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
    {ImageSrc :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
    {ImageSrc :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
    {ImageSrc :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
]
const Events = () => {
  return (
    <div className='text-center p-12 '>
      <h1 className='text-6xl mb-12'>Our Events</h1>
      {evenList.map((event)=>(
        <EventCard imageSrc={event.ImageSrc}/>
      ))}

      


    </div>
  )
}

export default Events
