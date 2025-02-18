/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-[url(https://images.unsplash.com/photo-1566243052021-d39ace07c392?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 flex justify-between flex-col w-full absolute top-0'>
        <img className='w-16 ml-8' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <div className='bg-white px-5 py-4' >
          <h2 className='text-3xl font-bold text-black'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black py-3 text-white rounded mt-2'>Continue</Link>
        </div>
      </div>

    </div>
  )
}

export default Start
