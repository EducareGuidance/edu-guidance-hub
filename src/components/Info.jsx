import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


function Info() {

    const [showFullInfo, setShowFullInfo] = useState(false)

    const toogleShowFullInfo = () => {
        setShowFullInfo(!showFullInfo);
    }

    return (
        <div className='m-44 mt-20 rounded-lg shadow-2xl'>
            <div className='m-2'>
                <h2 className='font-bold text-2xl m-2 p-2 text-center'>Welcome to the Best Coaching Institute for JEE and NEET</h2>

                <h3 className='font-perpetua text-3xl text-center p-2 text-black mb-4'><span className='text-blue-700 font-times font-bold'>GUIDANCE</span> <span className='italic'>educare</span></h3>

                <p className={`w-3/4 m-auto `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut malesuada neque. Praesent varius dui sed risus tincidunt volutpat. In leo elit, porta ac finibus vitae, tempor in felis. Vestibulum volutpat mauris lectus, a ullamcorper nisl hendrerit at. Vestibulum rhoncus iaculis metus in tristique. Suspendisse potenti. Aenean ut tempus lorem.
                    <br />

                    Nam ac eleifend tellus, interdum imperdiet arcu. Maecenas maximus consequat turpis, non rhoncus leo feugiat nec. Phasellus quis imperdiet massa. Ut ante ante, lobortis id dapibus eget, imperdiet a purus. Maecenas ante orci, commodo ut ligula et, hendrerit ultricies mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nibh augue, feugiat vitae sollicitudin in, congue finibus magna. Sed luctus facilisis aliquam.
                </p>

                <p className={`w-3/4 m-auto ${showFullInfo ? 'block' : 'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut malesuada neque. Praesent varius dui sed risus tincidunt volutpat. In leo elit, porta ac finibus vitae, tempor in felis. Vestibulum volutpat mauris lectus, a ullamcorper nisl hendrerit at. Vestibulum rhoncus iaculis metus in tristique. Suspendisse potenti. Aenean ut tempus lorem.
                    <br />

                    Nam ac eleifend tellus, interdum imperdiet arcu. Maecenas maximus consequat turpis, non rhoncus leo feugiat nec. Phasellus quis imperdiet massa. Ut ante ante, lobortis id dapibus eget, imperdiet a purus. Maecenas ante orci, commodo ut ligula et, hendrerit ultricies mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nibh augue, feugiat vitae sollicitudin in, congue finibus magna. Sed luctus facilisis aliquam.
                    <br />

                    Sed tempus ligula sapien, sed auctor urna finibus pulvinar. Aenean congue aliquet risus ultrices dictum. In hac habitasse platea dictumst. Duis porttitor dui libero, vitae placerat risus sodales vel. Integer ut urna nec ex scelerisque pulvinar. Proin lacinia pulvinar auctor. Pellentesque nec blandit lorem. Vivamus aliquet nec felis quis aliquam. Morbi id porta sem. Praesent posuere, velit sed commodo vestibulum, lacus erat maximus lorem, sed mollis massa ante quis erat. Nunc et ligula ex. Sed sit amet commodo tortor. Nam at tempus quam, sed interdum lectus. Cras fermentum et nulla nec dignissim. Morbi bibendum odio ac libero porta, a hendrerit felis elementum. Mauris neque dolor, laoreet at sollicitudin id, pellentesque quis ligula.</p>


                <div className="flex justify-center items-center ">
                <button  className=" bg-white hover:text-black text-black font-bold py-2 px-4 rounded focus:outline-none transition-transform duration-300 hover:scale-110"
                 onClick={() => toogleShowFullInfo()}
                >
                {/* {showFullInfo ? 'Read Less' : 'Read More'} */}
                {showFullInfo ? <FontAwesomeIcon className='animate-bounce h-6 w-6 px-2' icon={faArrowUp}/> : <FontAwesomeIcon className='animate-bounce h-6 w-6 px-2' icon={faArrowDown}/>}
                </button>
               
                </div>
            </div>

           

        </div>
    )
}

export default Info
