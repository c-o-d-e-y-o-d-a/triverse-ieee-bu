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
    <div className='text-center ps-16 mb-12 mt-10  font-head pt-4 bg-gradient-to-bl from-cyan-800 to-fuchsia-800'>
      <h1 className='text-6xl mb-12'>Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {evenList.map((event, index) => (
          <EventCard key={index} imageSrc={event.ImageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Events;
