import React from 'react';

const Navbar = () => {
  return (
    <div className='text-center bg-transparent items-center justify-center'>
      <ul className='flex gap-4 p-4  items-center text-center'>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Home</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Events</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Gallery</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Details</li>
        <li className='hover:text-yellow-500 transition duration-300 cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
