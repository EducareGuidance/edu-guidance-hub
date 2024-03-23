import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import DropdownMenu1 from './DropdownMenu1';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 z-50">
      <div className="max-w-7xl mx-auto px-0 py-7">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center ">
              <a href="/" className="text-white text-xl"><span className='font-times text-black '>GUIDANCE</span><span className='perpetua italic tracking-wide text-yellow-500'>educare</span></a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <ul className='flex text-lg m-2 px-4 py-2'>
            <li><a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Home</button></a></li>
            <li><a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Courses</button></a></li>
            <li><a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Admission</button></a></li>
            <li><a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110"><DropdownMenu/></button></a></li>
            <li><a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">About Us</button></a></li>
            </ul>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              {/* Hamburger menu icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Courses</a>
            <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Admission</a>
            <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"><DropdownMenu1/></a>
            <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;