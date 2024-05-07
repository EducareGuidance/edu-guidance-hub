import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import app from '../../firebase/firebase'
import { getDatabase, ref, get } from 'firebase/database'
import { auth } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function LoginTemp () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [submitError, setSubmitError] = useState(null)

  const onSubmit = async data => {
    const { email, password } = data
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      if (user) {
        console.log('User logged in successfully')
        readUserData()
      }
    } catch (error) {
      console.error('Error during login', error.message)
      setSubmitError('Error during login, Please try again later')
    }
  }

  function readUserData () {
    const db = getDatabase(app)
    const userRef = ref(db, 'users/')
    get(userRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch(error => {
        console.error('Error reading data', error)
      })
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-300'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900'>
          <img
            className='w-8 h-8 mr-2'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
          />
          GUIDANCE EDUCARE
        </div>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign In
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address'
                    }
                  })}
                  type='email'
                  name='email'
                  id='email'
                  {...register('email')}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter email address'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    },
                    maxLength: {
                      value: 20,
                      message: 'Password must not exceed 20 characters'
                    }
                  })}
                  type='password'
                  name='password'
                  id='password'
                  {...register('password')}
                  placeholder='Enter password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-primary-600 border focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800'
              >
                Sign In{' '}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                New Here?{' '}
                <Link
                  to='/register'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginTemp
