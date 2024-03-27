import React from 'react'
import Footer from '../Components/Footer'

const Timeline = () => {
  return (


    <>
    <div className='text-center  w-full h-screen lg:h-full grid grid-rows-1  align-middle justify-center mb-40'>

        <div className='timelineBox md:my-8 md:mb-4 md:bg-slate-900  md:pt-4 pt-8 pb-8  w-90'>
          <h1 className='text-5xl mb-12 text-white mt-4'>TimeLine</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-yellow-400">


  <li className='mb-6' >
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 p-2 rounded-xl ">
      <time className="font-mono italic">Opening Ceremony</time>
      <div className="text-lg font-black">1st April || 5:00 to 6:00 P.M.</div>
      Venue : B/W C & D
    </div>
    <hr className='bg-yellow-400'/>
  </li>



  <li className=''>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-end mb-10 rounded-xl ">
      <time className="font-mono italic">Beyond the Feed</time>
      <div className="text-lg font-black">4rth April || 5:45 to 6:45 P.M</div>
 Venue: 002 ALH    </div>
    <hr className='bg-yellow-400' />
  </li>
  <li className='mb-6  '>
    <hr className='bg-yellow-400'/>


    <div className="timeline-middle  ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-start md:text-end mb-10 p-2 rounded-xl ">
      <time className="font-mono italic">Tech Muse</time>
      <div className="text-lg font-black ">4th April || 6:30 onwards</div>
Venue: 102 BLH    </div>
    <hr className='bg-yellow-400'/>
  </li>
  <li className='mb-6'>
    <hr className='bg-yellow-400'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-end mb-10 rounded-xl   ">
      <time className="font-mono italic">Bet for Tech</time>
      <div className="text-lg font-black">5th April || 6:30 onwards</div>
Venue:  301 ALH</div>
    <hr className='bg-yellow-400'/>
  </li>
  <li className='mb-6  '>
    <hr className='bg-yellow-400'/>


    <div className="timeline-middle  ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-start md:text-end mb-10 p-2 rounded-xl ">
      <time className="font-mono italic">Unlocking tommorow</time>
      <div className="text-lg font-black ">6th April || 10AM onwards</div>
      Venue: 101 ALH
  </div>
    <hr className='bg-yellow-400'/>
  </li>
  
  <li className='mb-6'>
    <hr className='bg-yellow-400'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-end mb-10 rounded-xl   ">
      <time className="font-mono italic">Code Roast</time>
      <div className="text-lg font-black">6th April  || 6PM onwards</div>
Venue:  103BLA</div>
    <hr className='bg-yellow-400'/>
  </li>


  <li className='mb-6'>
    <hr className='bg-yellow-400'/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-start md:text-end mb-10 rounded-xl  p-2 ">
      <time className="font-mono italic">Movie Night</time>
      <div className="text-lg font-black">7th april 9 pm onwards</div>
      Venue: 101,102 NLH
    </div>
  </li>

  
</ul>
        </div>
    </div>

    </>
  )
}

export default Timeline
