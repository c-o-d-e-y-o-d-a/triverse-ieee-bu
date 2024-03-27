import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 opacity-85">
      <div className="container mx-auto flex flex-col gap-2 items-center justify-between">
        {/* Logos section */}
        <div className="flex justify-center md:justify-start mb-4 gap-4 ">
          {/* Logos as buttons */}
          <button className="mr-4">
            <a href="https://www.instagram.com/ieee_bu/"><img src="/insta.svg" alt="insta logo" className="w-9 h-9" /></a>
          </button>
          <button className="mr-4">
            <a href="https://www.linkedin.com/in/ieee-bu-7193b0192/"><img src="/linkedin.svg" alt="linkedin logo" className="w-9 h-9" /></a>
          </button>
          <button>
            <a href="https://github.com/c-o-d-e-y-o-d-a/triverse-ieee-bu"><img src="/github.svg" alt="" className="w-9 h-9" /></a>
          </button>
        </div>
        {/* Options section */}
        <ul className="flex flex-wrap justify-center md:justify-start mb-6 gap-4 text-xl ">
          {/* Footer options */}
          <li className="mr-6 mb-2 md:mb-0">
            <a href="#" className="hover:text-gray-300"><Link to='/'>Home</Link></a>
          </li>
          <li className="mr-6 mb-2 md:mb-0">
            <a href="#" className="hover:text-gray-300"><Link to='/team'>Team</Link></a>
          </li>
          
          <li className="mr-6 mb-2 md:mb-0">
            <a href="#" className="hover:text-gray-300"><Link to='/contact'>Contact</Link></a>
          </li>
        </ul>
      </div>
      {/* Copyright text */}
      <div className="text-center">
        Triverse Copyright © 2024 IEEE - All rights reserved || Created By: <a href="https://portfolio-site-eight-beta.vercel.app/" target='_blank' className="text-blue-500">Nischal Gautam</a>
      </div>
    </footer>
  );
};

export default Footer;
