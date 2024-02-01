import React from 'react';


const Navbar = () => {
  return (
    <div className='text-center  p-4 md:px-12 bg-purple-900'>
      <ul className='flex flex-wrap gap-8 items-center justify-center text-center text-xl'>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Home</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>About</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>TimeLine</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Events</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Gallery</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Team</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

