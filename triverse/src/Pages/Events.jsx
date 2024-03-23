import React, { useRef } from "react";
import EventCard from '../Components/EventCard';
import Footer from "../Components/Footer";


const evenList = [
  { ImageSrc: "/casino.png",
  title:"tech casino",
  description:"oisjdofjodjofjdof"

},
 { ImageSrc: "/coderoast.jpg",
  title:"code roast",
  description:"oisjdofjodjdjfoidjsof oidj foi ijds fjoids fosd joijo oidhfo dsioj f sdf oij i ofjdof"

},
{ ImageSrc: "/coderoast.png",
  title:"tech casino",
  description:"oisjdofjodjofjdof"

},
{ ImageSrc: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  title:"",
  description:"oisjdofjodjofjdof"

},
];



const Events = () => {
  return (
    <>
    <div className='text-center  mb-12 font-head pt-4    '>
      <h1 className='md:text-6xl text-5xl mt-2 mb-12 text-white p-6'>Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center align-items-center">
        {evenList.map((event, index) => (
          <EventCard key={index} imageSrc={event.ImageSrc} title={event.title} desc={event.description} />
        ))}
      </div>
      
    </div>
    
    <Footer/>
    </>
  );
};

export default Events;
