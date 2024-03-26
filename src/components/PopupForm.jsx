import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import crossSvg from '../assets/cross.svg'

function PopupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    }, [])

    const onSubmit = (data) => { console.log(data) }
    return (
        <div className={`space-y-24 fixed inset-0 flex items-center justify-center ${isVisible ? '' : 'hidden'}`}>

            <div className='fixed inset-0 bg-black opacity-50'></div>
            <div className='bg-gray-100 w-full max-w-lg p-6 rounded-lg shadow-lg z-10'>
                <div className='text-center mb-4'>
                    <div className='flex justify-around'>
                        <h1 className='text-2xl font-semibold ml-12'>Help us get to know you better!</h1>
                        <img onClick={() => setIsVisible(false)} className='w-4 cursor-pointer' src={crossSvg} alt="cross" />
                    </div>

                    <h2 className='font-semibold text-xl mt-1'>Register here</h2>

                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='px-2 mb-4'>
                        <input {...register('firstName', { required: true })} className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg' type="text" placeholder='First name' label='Enter First name' />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">First name is required</p>}
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('lastName', { required: true })} className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg' type="text" placeholder='Last name' label='Enter Last name' />
                        {errors.lastName && <p className='text-red-500 text-sm mt-1'>Last name is required</p>}
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('username', { required: true })} className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg' type="text" placeholder='username' label='Enter username' />
                        {errors.username && <p className='text-red-500 text-sm mt-1'>Username is required</p>}
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('email', { required: true })} className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg' type="text" placeholder='email' label='Enter email' />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>Email is required</p>}
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('password', { required: true })} className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg' type="text" placeholder='password' label='Enter password' />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>Password is required</p>}
                    </div>
                    <div className='flex justify-center mb-1'>
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white m-2 px-3 py-2 rounded-md shadow-lg'>Submit</button>
                    </div>
                    <div className='text-center text-gray-400 underline cursor-pointer'>
                        <p>Already an existing user? Login here</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default PopupForm