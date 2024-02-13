import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  let class1 = "flex  gap-8 items-center justify-center text-center text-3xl flex-col  ";
  let class2 = "flex  gap-8 items-center justify-center text-center text-4xl flex-col hidden ";

  return (
    <>
      <div className='text-center  p-4 md:px-12 bg-black background-blur-xl text-purple-800 font-bold hidden md:block duration-500'>
        <ul className='flex flex-wrap gap-8 items-center justify-center text-center  md:text-xl'>
          <li key="home" className='hover:text-yellow-500 transition duration-300 cursor-pointer'> <Link to='/'>Home</Link></li>
          <li key="about" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/about'>About</Link></li>
          <li key="timeline" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/timeline'>TimeLine</Link></li>
          <li key="events" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/events'>Events</Link></li>
          <li key="gallery" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/gallery'>Gallery</Link></li>
          <li key="team" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/team'>Team</Link></li>
          <li key="contact" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/contact'>Contact</Link></li> 
        </ul>
      </div>

      <div className='text-center text-sm p-4 md:px-12 bg-black background-blur-xl text-purple-800 font-bold block md:hidden'>
        <button onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
        <ul className={Mobile? class1:class2} >
          <li key="home" className='hover:text-yellow-500 transition duration-300 cursor-pointer mt-2'><Link to='/'>Home</Link></li>
          <li key="about" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/about'>About</Link></li>
          <li key="timeline" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/timeline'>TimeLine</Link></li>
          <li key="events" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/events'>Events</Link></li>
          <li key="gallery" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/gallery'>Gallery</Link></li>
          <li key="team" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/team'>Team</Link></li>
          <li key="contact" className='hover:text-yellow-500 transition duration-300 cursor-pointer'><Link to='/contact'>Contact</Link></li> 
        </ul>
      </div>
    </>
  );
};

export default Navbar;
