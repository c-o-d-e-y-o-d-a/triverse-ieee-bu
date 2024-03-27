import React, { useRef } from "react";
import EventCard from '../Components/EventCard';


const evenList = [
  { ImageSrc: "/posters/p1.png",
  title:"Triverse Event",
  description:"Welcome to Triverse: Where Technology Knows No Bounds! Step into an enthralling journey of innovation at our renowned tech event. Immerse yourself in the fusion of cutting-edge technologies, explore virtual realms, and chart the course towards tomorrow's advancements. With a prize pool of 40K+",
  regLink:""

},
{ ImageSrc: "/posters/p2.png",
  title:"Techmuse",
  description:"Discover the perfect harmony of tech and music at 'tech muse'! Play musical chairs with a coding twist, debug melodies, and solve coding challenges. Join us for an hour of fun games, exciting puzzles, and great prizes. Don't miss this unique fusion of technology and melody!",
  regLink:"https://forms.gle/mADdA8xNSJUHez1W8"

},
  { ImageSrc: "/posters/p3.png",
  title:"Bet For Tech",
  description:"Guess wether other teams are bluffing about their tech skills and make real money doing so",
  regLink:"https://forms.gle/LeGydRvJ5Uh53nhM9"

},
{
    "ImageSrc": "/posters/p5.png",
    "title": "Unlocking Tommorow",
    "description": "Unlocking Tomorrow: A Tech Info Session for Future Innovators invites students to embark on a thrilling exploration of the technical world. Through engaging discussions, attendees will uncover the secrets of technology, empowering them to become the trailblazers of tomorrow's innovations. Join us as we unlock the potential of young minds and ignite the spark of creativity in the ever-evolving world of tech.",
    "regLink": "https://forms.gle/sUeWNzwr5f6zXqR47"
},


 { ImageSrc: "/posters/p4.png",
  title:"Code Roast",
  description:"Coderoast is a high-octane coding competition.With 8 elite teams competing, participants solve puzzles, debug code, and optimize algorithms to claim top honors. Prizes include Amazon vouchers for the top 2 teams and a special reward for the ultimate champion. ",
  regLink:"https://forms.gle/pgyce4u9wcXJVq8b6"

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
