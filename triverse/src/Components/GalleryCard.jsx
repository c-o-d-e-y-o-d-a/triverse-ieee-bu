import React from 'react'

const GalleryCard = ({imageSrc}) => {
  return (
    <div>
      <img src={imageSrc} alt="" className=' galleryCard'/>
    </div>
  )
}

export default GalleryCard
