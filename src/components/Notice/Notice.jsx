import React, { useState } from 'react'
import './Notice.css'
import { cloudinaryDisplayImage } from '../../utils/constants';


function Notice() {

    const [clickedLink, setClickedLink] = useState('notice');

    const handleLinkClick = (link) => {
        setClickedLink(link === clickedLink ? clickedLink : link);
    }

    const notices = ['notice1', 'notice2', 'notice3', 'notice4'];


    return (
        <div className='xl:flex mt-16 xl:mt-28'>
            
            <div className='m-2 p-2 w-2/3 mx-auto mb-16 xl:w-1/3 xl:ml-64 xl:mt-12'>
                <img src={cloudinaryDisplayImage} alt='display' className='w-full' />
            </div>



            <div className='shadow-lg rounded-md w-2/3 xl:w-1/3 mx-auto h-44'>
                <div className='m-2 p-2 lg:mt-12 -mt-4'>
                    <h2 className='font-bold text-2xl m-2 p-2 text-center'>Important Links</h2>

                    <ul className='flex m-2 p-2 justify-center -mt-5'>
                        <li onClick={() => { handleLinkClick('notice') }} className={`m-2 p-2 mr-4 font-semibold text-lg cursor-pointer ${clickedLink === 'notice' ? 'bg-white' : 'bg-blue-500'} ${clickedLink === 'notice' ? 'text-green-400' : 'text-white'} rounded-md w-3/4 text-center`}>Notice</li>

                        <li onClick={() => { handleLinkClick('exam') }} className={`m-2 p-2 mr-4 font-semibold text-lg cursor-pointer ${clickedLink === 'exam' ? 'bg-white' : 'bg-blue-500'} ${clickedLink === 'exam' ? 'text-green-400' : 'text-white'} rounded-md w-3/4 text-center`}>Exams</li>

                        <li onClick={() => { handleLinkClick('events') }} className={`m-2 p-2 mr-4 font-semibold text-lg cursor-pointer ${clickedLink === 'events' ? 'bg-white' : 'bg-blue-500'} ${clickedLink === 'events' ? 'text-green-400' : 'text-white'} rounded-md w-3/4 text-center`}>Events</li>
                    </ul>
                </div>

                <div className='flex justify-center shadow-lg mt-16'>

                    <div className='notice-container'>
                        {notices.map((notice, index) => (
                            <div className='notice-item' key={index}>{notice}</div>
                        ))}

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Notice