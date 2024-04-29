import React from 'react'
import { courseImage } from '../utils/constants'
function Courses() {
    return (

        <div>
            <div className='m-2 p-2 my-4 text-center mt-16'>
                <h1 className='mt-4 p-2 text-5xl font-bold'><span className='text-yellow-500'>Our</span> <span className='text-blue-700'>Courses</span></h1>
                <h3 className='mt-3 p-2 text-lg'>Learn from the <span className='text-xl font-bold'>Best</span> Mentors</h3>
            </div>

            <div className='m-4 p-2 py-8 mt-8 xl:w-2/6 w-3/4  mx-auto shadow-xl rounded-md cursor-pointer'>
                <div className='flex justify-around'>
                    <img className='w-24 h-24 my-auto' src={courseImage} alt="course image" />
                    <div className='px-8'>
                        <h2 className='text-xl text-blue-700 font-semibold underline'>Pre- Foundation Course</h2>
                        <p className='font-bold mt-2'>Duration: <span className='font-normal'>12months</span></p>
                        <p className='font-bold'>Eligibility: <span className='font-normal'>Class 9 & 10</span></p>
                        <p className='font-bold'>Batch starts on: <span className='font-normal'>April 2024</span></p>
                    </div>
                </div>


            </div>

            <div className='m-4 p-2 py-8 mt-8 xl:w-2/6 w-3/4  mx-auto shadow-xl rounded-md cursor-pointer'>
                <div className='flex justify-around'>
                    <img className='w-24 h-24 my-auto' src={courseImage} alt="course image" />
                    <div className='px-8'>
                        <h2 className='text-xl text-blue-700 font-semibold underline'>Pre- Foundation Course</h2>
                        <p className='font-bold mt-2'>Duration: <span className='font-normal'>12months</span></p>
                        <p className='font-bold'>Eligibility: <span className='font-normal'>Class 9 & 10</span></p>
                        <p className='font-bold'>Batch starts on: <span className='font-normal'>April 2024</span></p>
                    </div>
                </div>


            </div>
            <div className='m-4 p-2 py-8 mt-8 xl:w-2/6 w-3/4  mx-auto shadow-xl rounded-md'>
                <div className='flex justify-around'>
                    <img className='w-24 h-24 my-auto' src={courseImage} alt="course image" />
                    <div className='px-8'>
                        <h2 className='text-xl text-blue-700 font-semibold underline'>Pre- Foundation Course</h2>
                        <p className='font-bold mt-2'>Duration: <span className='font-normal'>12months</span></p>
                        <p className='font-bold'>Eligibility: <span className='font-normal'>Class 9 & 10</span></p>
                        <p className='font-bold'>Batch starts on: <span className='font-normal'>April 2024</span></p>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Courses
