import React from 'react'

const Timeline = () => {
  return (


    <div className='text-center bg-black  w-full h-screen lg:h-full'>

        <h1 className='text-5xl mb-12 text-white mt-4'>TimeLine</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-yellow-400">


  <li className='mb-6' >
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 p-2 rounded-xl ">
      <time className="font-mono italic">Tech Machina</time>
      <div className="text-lg font-black">23rd March 9-11 AM</div>
      Get ready to dive into a world of tech
    </div>
    <hr/>
  </li>



  <li className=''>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-end mb-10 rounded-xl ">
      <time className="font-mono italic">Food Fantasy</time>
      <div className="text-lg font-black">23 rd March 12-2pm</div>
 dive into a world of culinary excellence    </div>
    <hr />
  </li>
  <li className='mb-6  '>
    <hr />
    <div className="timeline-middle  ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-start md:text-end mb-10 p-2 rounded-xl ">
      <time className="font-mono italic">Cyber Hunt</time>
      <div className="text-lg font-black ">23 rd March 12-2pm</div>
A cyber security event where uhouhouho   </div>
    <hr />
  </li>
  <li className='mb-6'>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-end mb-10 rounded-xl   ">
      <time className="font-mono italic">Social Eclipse</time>
      <div className="text-lg font-black">23rd March 9-11 AM</div>
Networking event : Get a chance to make amaz </div>
    <hr />
  </li>
  <li className='mb-6'>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className=" timeline-start md:text-end mb-10 rounded-xl  p-2 ">
      <time className="font-mono italic">DJ Carnival</time>
      <div className="text-lg font-black">23rd March 9-11 AM</div>
      Time for some fun , show your dance moves 
    </div>
  </li>
</ul>
    </div>
  )
}

export default Timeline
