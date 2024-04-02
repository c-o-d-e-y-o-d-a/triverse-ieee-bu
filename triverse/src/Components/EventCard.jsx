import React from 'react'
import { motion } from "framer-motion"

const EventCard = ({imageSrc ,title,desc,regLink}) => {
  return (
    <div className="card">
      <img src={imageSrc} className='card-img' alt=""  />
      <div className='card-body text-white'>
        <p className="card-sub-title text-2xl">{title}</p>
        <p className="card-info">{desc}</p>
        <button className='card-btn'><a href={regLink}>Register</a></button>
      </div>
    </div>
  )
}

export default EventCard
