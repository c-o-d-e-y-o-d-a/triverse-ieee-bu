import React, { useRef } from "react";
import EventCard from '../Components/EventCard';


const evenList = [
  { ImageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" },
  { ImageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" },
  { ImageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" },
  { ImageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" },
];



const Events = () => {
  return (
    <div className='text-center md:ps-16 mb-12 font-head pt-4    '>
      <h1 className='md:text-6xl text-5xl mt-2 mb-12'>Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center align-items-center">
        {evenList.map((event, index) => (
          <EventCard key={index} imageSrc={event.ImageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Events;
