import React, { useRef } from "react";
import EventCard from '../Components/EventCard';


const evenList = [
  { ImageSrc: "/events/betfortech.jpg",
  title:"Bet For Tech",
  description:"Guess wether other teams are bluffing about their tech skills and make real money doing so",
  regLink:"https://forms.gle/LeGydRvJ5Uh53nhM9"

},
 { ImageSrc: "/events/coderoast.jpg",
  title:"Code Roast",
  description:"oisjdofjodjdjfoidjsof oidj foi ijds fjoids fosd joijo oidhfo dsioj f sdf oij i ofjdof",
  regLink:"https://forms.gle/pgyce4u9wcXJVq8b6"

},
{ ImageSrc: "/events/technuse.jpg",
  title:"Techmuse",
  description:"Discover the perfect harmony of tech and music at 'tech muse'! Play musical chairs with a coding twist, debug melodies, and solve coding challenges. Join us for an hour of fun games, exciting puzzles, and great prizes. Don't miss this unique fusion of technology and melody!",
  regLink:"https://forms.gle/mADdA8xNSJUHez1W8"

},
{ ImageSrc: "/events/general.jpg",
  title:"",
  description:"oisjdofjodjofjdof",
  regLink:""

},
];



const Events = () => {
  return (
    <>
    <div className='text-center  font-head pt-4    ' id='event'>
      <h1 className='md:text-6xl text-5xl mt-2 mb-28 md:mb-12 text-white p-6'>Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center align-items-center">
        {evenList.map((event, index) => (
          <EventCard key={index} imageSrc={event.ImageSrc} title={event.title} desc={event.description} regLink={event.regLink}/>
        ))}
      </div>
      
    </div>
    
   
    </>
  );
};

export default Events;
