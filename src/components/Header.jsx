import React from 'react'
import { LOGO_URl } from '../utils/constants'

function Header() {
    return (
        <div className='flex justify-between m-4 p-4 border border-black'>
            <div>
                <img className='h-20 -mt-3' src={LOGO_URl} alt="logo" />
            </div>

            <div>
                <ul className='flex text-xl m-2 p-2'>

                    <li className='mr-2 pr-2 cursor-pointer'>
                        Home
                    </li>



                    <li className='mr-2 pr-2 cursor-pointer'>Menu</li>

                    <li className='mr-2 pr-2 cursor-pointer'>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
