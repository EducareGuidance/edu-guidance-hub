import React from 'react'
import { subjects } from '../utils/subjects'

function Subjects() {
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-8 md:justify-start md:gap-8 lg:gap-12 cursor-pointer mt-8 lg:ml-8'>

                {subjects.map((subject) => (
                    <div key={subject.name} className='w-64 shadow-lg bg-gray-100 hover:bg-gray-300 overflow-hidden rounded-md hover:shadow-lg transition duration-300'>



                        <img className='h-40 w-full object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out  rounded-t-lg' src={subject.image} alt="card" />

                        <div className='p-4'>
                            <h2 className='font-semibold text-lg mb-2'>{subject.name}</h2>
                            <p className='text-gray-600 mb-2'>{ }</p>
                            <div>
                                <span className={`text-lg mr-1`}>{ }</span>
                                <span className='text-sm text-gray-500'>{subject.description }</span>
                            </div>
                            <button className='bg-blue-700 hover:bg-blue-900 text-white my-2 px-3 py-2 rounded-md shadow-md'>Click Here</button>
                        </div>
                    </div>
                ))}





            </div>





        </div>
    )
}

export default Subjects
