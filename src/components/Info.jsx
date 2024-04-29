import React, { useState } from 'react'

function Info() {

    const [showFullInfo, setShowFullInfo] = useState(false)

    const toogleShowFullInfo = () => {
        setShowFullInfo(!showFullInfo);
    }

    return (
        <div className='m-2 p-4 mt-16'>
            <div className='m-2'>
                <h2 className='font-bold text-2xl m-2 p-2 text-center'>Welcome to the 
                <br />Best Coaching Institute for JEE and NEET</h2>

                <h3 className='font-bold text-4xl text-center p-2 mb-4'><span className='shadow-sm text-blue-700'>GUIDANCE <span className='text-yellow-500'>EDUCARE</span></span></h3>

                <p className={`w-3/4 m-auto `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut malesuada neque. Praesent varius dui sed risus tincidunt volutpat. In leo elit, porta ac finibus vitae, tempor in felis. Vestibulum volutpat mauris lectus, a ullamcorper nisl hendrerit at. Vestibulum rhoncus iaculis metus in tristique. Suspendisse potenti. Aenean ut tempus lorem.
                    <br />

                    Nam ac eleifend tellus, interdum imperdiet arcu. Maecenas maximus consequat turpis, non rhoncus leo feugiat nec. Phasellus quis imperdiet massa. Ut ante ante, lobortis id dapibus eget, imperdiet a purus. Maecenas ante orci, commodo ut ligula et, hendrerit ultricies mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nibh augue, feugiat vitae sollicitudin in, congue finibus magna. Sed luctus facilisis aliquam.
                </p>

                <p className={`w-3/4 m-auto ${showFullInfo ? 'block' : 'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut malesuada neque. Praesent varius dui sed risus tincidunt volutpat. In leo elit, porta ac finibus vitae, tempor in felis. Vestibulum volutpat mauris lectus, a ullamcorper nisl hendrerit at. Vestibulum rhoncus iaculis metus in tristique. Suspendisse potenti. Aenean ut tempus lorem.
                    <br />

                    Nam ac eleifend tellus, interdum imperdiet arcu. Maecenas maximus consequat turpis, non rhoncus leo feugiat nec. Phasellus quis imperdiet massa. Ut ante ante, lobortis id dapibus eget, imperdiet a purus. Maecenas ante orci, commodo ut ligula et, hendrerit ultricies mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nibh augue, feugiat vitae sollicitudin in, congue finibus magna. Sed luctus facilisis aliquam.
                    <br />

                    Sed tempus ligula sapien, sed auctor urna finibus pulvinar. Aenean congue aliquet risus ultrices dictum. In hac habitasse platea dictumst. Duis porttitor dui libero, vitae placerat risus sodales vel. Integer ut urna nec ex scelerisque pulvinar. Proin lacinia pulvinar auctor. Pellentesque nec blandit lorem. Vivamus aliquet nec felis quis aliquam. Morbi id porta sem. Praesent posuere, velit sed commodo vestibulum, lacus erat maximus lorem, sed mollis massa ante quis erat. Nunc et ligula ex. Sed sit amet commodo tortor. Nam at tempus quam, sed interdum lectus. Cras fermentum et nulla nec dignissim. Morbi bibendum odio ac libero porta, a hendrerit felis elementum. Mauris neque dolor, laoreet at sollicitudin id, pellentesque quis ligula.</p>

                <button onClick={() => toogleShowFullInfo()} className='mt-4 p-2 mx-16 xl:mx-44 bg-green-500 text-white rounded-md text-lg'>{showFullInfo ? 'Read Less' : 'Read More'}</button>
            </div>

        </div>
    )
}

export default Info