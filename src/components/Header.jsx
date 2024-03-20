import React from 'react'
import { cloudinaryLogo } from '../utils/constants'


function Header() {
    return (
        <div className='flex justify-between m-4 p-4 border border-black'>
            <div>
                <img className='h-16 ml-2 ' src={cloudinaryLogo} alt="logo" />
            </div>

            <div>
                <ul className='flex text-lg m-2 p-2'>

                    <li className='mr-2 pr-2 cursor-pointer'>Home</li>

                    <li className='mr-2 pr-2 cursor-pointer'>Courses</li>

                    <li className='mr-2 pr-2 cursor-pointer'>Admissions</li>

                    <li className='-mr-2 cursor-pointer'>About Us</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
