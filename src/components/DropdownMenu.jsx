import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Link to='/subjects'>
      <div className="relative">
        <button className="flex items-center text-white focus:outline-none" onClick={toggleDropdown}>
          <span>Subjects</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Class VI VII VIII IX X</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Class XI & XII (ALL STREAM)</a></li>

            </ul>
          </div>
        )}
      </div>
    </Link>
  );
};



export default DropdownMenu;