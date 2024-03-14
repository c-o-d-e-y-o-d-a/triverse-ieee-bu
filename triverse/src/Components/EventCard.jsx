import React from 'react'
import { motion } from "framer-motion"

const EventCard = ({imageSrc}) => {
  return (
     <div className="card">
      <img src="" className='card-img' alt=""  />
      <div className='card-body'>
        <h1 className="card-title">Nyc</h1>
        <p className="card-sub-title">new yro city</p>
        <p className="card-info">Lpren ispum dolor ist amet</p>
        <button className='card-btn'>Register</button>

      </div>
     </div>
  )
}

export default EventCard
