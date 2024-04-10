import React, { useState } from 'react';
import './Notice.css';
import { cloudinaryDisplayImage } from '../../utils/constants';

function Notice() {
    const [clickedLink, setClickedLink] = useState('notice');

    const handleLinkClick = (link) => {
        setClickedLink(link);
    };

    return (
        <div className='xl:flex xl:items-start mt-16 xl:mt-28'>
            <div className='m-2 p-2 w-2/3 mx-auto mb-16 xl:w-4/12 xl:ml-64'>
                <img src={cloudinaryDisplayImage} alt='display' className='w-full rounded-lg object-cover shadow-lg' />
            </div>

            <div className='shadow-2xl rounded-lg w-2/3 xl:w-4/12 mx-auto'>
                <div className='m-2 p-2 lg:mt-12'>

                    <ul className='flex justify-center'>
                        <li onClick={() => handleLinkClick('notice')} className={`my-2 py-2 px-4 font-semibold text-lg cursor-pointer ${clickedLink === 'notice' ? 'bg-white text-yellow-500' : 'bg-blue-700 text-white hover:bg-blue-900'} rounded-l-md w-3/4 text-center shadow-lg `}>Notice</li>
                        <li onClick={() => handleLinkClick('exam')} className={`my-2 py-2 px-4 font-semibold text-lg cursor-pointer ${clickedLink === 'exam' ? 'bg-white text-yellow-500' : 'bg-blue-700 text-white hover:bg-blue-900'} w-3/4 text-center shadow-lg`}>Exams</li>
                        <li onClick={() => handleLinkClick('events')} className={`my-2 py-2 px-4 font-semibold text-lg cursor-pointer ${clickedLink === 'events' ? 'bg-white text-yellow-500' : 'bg-blue-700 text-white hover:bg-blue-900'} rounded-r-md w-3/4 text-center shadow-lg`}>Events</li>
                    </ul>
                    <div className="marquee h-80">
                        <span>Notice 1</span>
                        <span>Notice 2</span>
                        <span>Notice 3</span>
                        <span>Notice 4</span>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Notice;
