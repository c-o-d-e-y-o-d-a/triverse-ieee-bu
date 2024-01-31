import React from 'react'

const EventCard = ({imageSrc}) => {
  return (
    <div>
      <div className="card lg:w-64  shadow-xl bg-pu backdrop-blur-md border-yellow-200 border-1 ">
  <figure className=" ">
    <img src={imageSrc} alt="Shoes" className="rounded-xl h-52" />
  </figure>
  <div className="card-body items-center text-center">
    
    
    <div className="card-actions">
      <button className="btn py-0 px-4 text-yellow-400">Register Now</button>
      <button className="btn py-0 px-4 text-yellow-400">Know more</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default EventCard
