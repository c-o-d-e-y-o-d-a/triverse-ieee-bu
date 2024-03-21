import React from 'react'
import { motion } from "framer-motion"

const EventCard = ({imageSrc}) => {
  return (
     <div className="card">
      <img src={"/casino.png"} className='card-img' alt=""  />
      <div className='card-body text-white'>
        
        <p className="card-sub-title uppercase text-4xl">tech casino</p>
        <p className="card-info">Lpren ispum dolor ist amet</p>
        <button className='card-btn'>Register</button>

      </div>
     </div>
  )
}

export default EventCard
