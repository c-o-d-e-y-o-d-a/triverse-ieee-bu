import React from 'react'
import { motion } from "framer-motion"

const EventCard = ({imageSrc}) => {
  return (
    <div className='card-superset'>
    <div className="imageCard bg-red-400">
      <img src={imageSrc}/>
    </div>
    
    </div>
  )
}

export default EventCard
