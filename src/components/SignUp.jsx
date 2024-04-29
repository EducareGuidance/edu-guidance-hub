import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function SignUp () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div>
      <h1 className='text-3xl text-center font-bold my-3'>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='px-2 mb-4'>
          <input
            {...register('firstName', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='text'
            placeholder='First name'
            label='Enter First name'
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm mt-1'>First name is required</p>
          )}
        </div>
        <div className='px-2 mb-4'>
          <input
            {...register('lastName', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='text'
            placeholder='Last name'
            label='Enter Last name'
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm mt-1'>Last name is required</p>
          )}
        </div>
        <div className='px-2 mb-4'>
          <input
            {...register('username', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='text'
            placeholder='username'
            label='Enter username'
          />
          {errors.username && (
            <p className='text-red-500 text-sm mt-1'>Username is required</p>
          )}
        </div>
        <div className='px-2 mb-4'>
          <input
            {...register('email', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='text'
            placeholder='email'
            label='Enter email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>Email is required</p>
          )}
        </div>
        <div className='px-2 mb-4'>
          <input
            {...register('password', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='text'
            placeholder='password'
            label='Enter password'
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>Password is required</p>
          )}
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400'
          >
            SignUp
          </button>
        </div>
        <div>
          <p className='text-center mt-4'>
            Already have an account?
            <Link to='/login' className='text-blue-500'>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
