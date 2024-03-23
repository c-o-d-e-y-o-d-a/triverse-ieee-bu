import React from 'react'
import { motion } from "framer-motion"

const EventCard = ({imageSrc ,title,desc}) => {
  return (
     <div className="card">
      <img src={imageSrc} className='card-img' alt=""  />
      <div className='card-body text-white'>
        
        <p className="card-sub-title uppercase text-4xl">{title}</p>
        <p className="card-info">{desc}</p>
        <button className='card-btn'>Register</button>

      </div>
     </div>
  )
}

export default EventCard
