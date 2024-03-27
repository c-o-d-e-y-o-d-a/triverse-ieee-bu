import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  let class1 = "flex  gap-6 items-center justify-center text-center text-2xl flex-col  duration-500";
  let class2 = "flex  gap-8 items-center justify-center text-center text-4xl flex-col hidden duration-500 ";

  return (
    <>
      <div className='text-center  p-4 md:px-12 bg-black background-blur-xl text-purple-800 font-bold hidden md:block duration-500'>
        <ul className='flex flex-wrap gap-8 items-center justify-center text-center  md:text-xl'>
          <li key="home" className='hover:text-yellow-500 transition duration-300 cursor-pointer'> <Link to='/'>Home</Link></li>
         
          <li key="team" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/team'>Team</Link></li>
          {/* <li key="sponsor" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/sponsor'>Sponsors</Link></li> */}
          
          <li key="contact" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/contact'>Contact</Link></li> 
        </ul>
      </div>

      <div className='duration-500 text-center text-sm p-4 md:px-12 bg-black background-blur-xl text-purple-800 font-bold block md:hidden'>
        <button  onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross className='text-2xl text-yellow-500 mb-6' /> : <FaBars  className='text-2xl text-yellow-500'/>}
        </button>
        <ul className={Mobile? class1:class2} >
          <button  onClick={() => setMobile(!Mobile)} key="home" className='hover:text-yellow-500 transition duration-300 cursor-pointer mt-2'><Link to='/'>Home</Link></button>
          {/* <button  onClick={() => setMobile(!Mobile)} key="about" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/about'>About</Link></button> */}
          {/* <button  onClick={() => setMobile(!Mobile)} key="timeline" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/timeline'>TimeLine</Link></button> */}
          {/* <button  onClick={() => setMobile(!Mobile)} key="events" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/events'>Events</Link></button> */}
          {/* <button  onClick={() => setMobile(!Mobile)} key="gallery" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/gallery'>Gallery</Link></button> */}
          <button  onClick={() => setMobile(!Mobile)} key="team" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/team'>Team</Link></button>
          {/* <button  onClick={() => setMobile(!Mobile)} key="team" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/sponsor'>Sponsors</Link></button> */}
          <button  onClick={() => setMobile(!Mobile)} key="contact" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/contact'>Contact</Link></button> 
        </ul>
      </div>
    </>
  );
};

export default Navbar;
