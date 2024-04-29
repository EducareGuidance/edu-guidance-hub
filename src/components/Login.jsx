import React from 'react'
import { useForm } from 'react-hook-form'

function Login () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <div>
      <h1 className='text-3xl text-center font-bold my-3'>Login</h1>
      <form onSubmit={handleSubmit()}>
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
            {...register('password', { required: true })}
            className='w-full focus:outline-none focus:border-blue-500 px-4 py-2 border border-gray-300 rounded-md text-lg'
            type='password'
            placeholder='password'
            label='Enter password'
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>Password is required</p>
          )}
        </div>
        <div className='px-2 mb-4 flex justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
