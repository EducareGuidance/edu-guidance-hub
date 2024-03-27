import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import crossSvg from '../assets/cross.svg'

function ContactForm() {
    const { register, handleSubmit } = useForm();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true)
        
        }, 5000)

        return () => {
            clearTimeout(timeout)
        }
    },[])

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={`space-y-24 fixed inset-0 flex justify-center items-center h-screen ${isVisible ? 'block' : 'hidden'}`}>
            <div className='fixed inset-0 bg-black opacity-50'></div>
            <div className='bg-gray-100 shadow-xl p-6 max-w-lg w-full rounded-md z-10'>
                <div className='text-center m-2'>
                    <div  className='flex justify-around'>
                        <h1 className='text-3xl font-semibold text-blue-800 mb-2 ml-20 px-14'>Get In Touch</h1>
                        <img onClick={() => setIsVisible(false)} className='w-4 cursor-pointer' src={crossSvg} alt="cross" />
                    </div>
                    <p className='mb-4 text-gray-600'>Fill up the details and we will call you back</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-2 mb-4'>
                        <input {...register('studentName', { required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="text" placeholder='Student Name' />
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('mobileNumber', { required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="tel" placeholder='Mobile Number' />
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('email', { required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="text" placeholder='Email' />
                    </div>
                    <div className='px-2 mb-4'>
                        <input {...register('city', { required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' type="text" placeholder='City' />
                    </div>
                    <div className='px-2 mb-4'>
                        <textarea {...register('subject')} className='w-full py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md' type="text" placeholder='Subject' defaultValue={'Kindly call me!'}
                            rows={4} />
                    </div>
                    <div className='px-2 mb-4 flex justify-center'>
                        <button className='bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white rounded-md shadow-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
