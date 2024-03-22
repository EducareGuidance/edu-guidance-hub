import React from 'react';
import { cloudinaryLogo } from '../utils/constants';
import DropdownMenu from './DropdownMenu';

function Header() {
    return (
        <nav className="sticky top-0 w-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 z-50">
            <div className='flex justify-between gap-6 px-6 py-4 md:px-10 md:py-6 p-4 shadow-xl'>
                <div>
                    <img className='h-12 md:h-16 ml-2' src={cloudinaryLogo} alt="logo" />
                </div>

                <div>
                    <ul className='flex text-lg m-2 px-4 py-2'>
                        <li><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Home</button></li>

                        <li><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Courses</button></li>

                        <li><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">Admissions</button></li>
                        
                        <li><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded transition-transform duration-300 hover:scale-110"><DropdownMenu /></button></li>

                        <li><button className="text-lg bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded mr-2 transition-transform duration-300 hover:scale-110">About Us</button></li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
