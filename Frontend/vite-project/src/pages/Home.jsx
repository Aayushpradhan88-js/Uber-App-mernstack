/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import { useGSAP, useRef } from '@gsap/react';
// import gsap from 'gsap';
// import 'remixicon/fonts/remixicon.css';

const Home = () => {

  const [pickup, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelopen, setPanelOpen] = useState(false); //initailly it is close so it is false when it opne then it is true
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = ((e) => {
    e.preventDefault()
  })

  useGSAP(function () {
    if (panelopen) {
      //openPanel
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1
      })
      //closePanel
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        height: 70 %
    })
    }
  })

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='w-full h-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className='text-2xl font-semibold'>
            Find a trip
          </h4>

          <form className='relative py-3'
            onSubmit={(e) => {
              submitHandler(e)
            }}
          >

            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

            {/* Pick-Up Location */}
            <input
              ref={panelRef}
              onClick={() => {
                setPanelOpen(true)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
              value={pickup}
              onChange={(e) => {
                setPickUp(e.target.value)
              }}
              type="text"
              placeholder='Add a pick-up location'
            />

            {/* Destination */}
            <input
              panelRef
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              type="text"
              placeholder='Enter your destination' />
          </form>

          <button
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
            Find Trip
          </button>
        </div>

        <div
           ref={panelRef}
          className='opacity-0 bg-red-500'>
        </div>
      </div>

     //panel
     <div className='fixed z-10'>
      <div>
        <img src="https://i.pinimg.com/736x/3d/08/89/3d0889bbfab4ed671c8227f83bc86a61.jpg" alt="" />
      </div>
      
      </div> 
    </div>
  )
}

export default Home
