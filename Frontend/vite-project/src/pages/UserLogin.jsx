/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <img className='w-16 mb-10' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <form>
        <h3 className='text-xl font-medium mb-2'>What is Your Email</h3>
        <input
          required
          className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'
          type="email"
          placeholder='email@example.com'
        />

        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>

        <input
          required type="password"
          className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'
          placeholder='password'
        />

        <button className='bg-[#eeeeee] font-semibold mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'>Login</button>
      </form>

      {/* <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p> */}
    </div>
  )
}

export default UserLogin
