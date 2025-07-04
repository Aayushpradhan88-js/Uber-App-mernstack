/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useEffect, useContext } from 'react';
import gsap from 'gsap';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import CaptainDetails from '../components/CaptainDetail';
import RidePopUp from '../components/ConfirmRidePopup';
import ConfirmRidePopup from '../components/ConfirmRidePopup'; 

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  
  const { captain } = useContext(CaptainDataContext)

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ride, setRide] = useState(null);

  async function confirmRide(){
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId: ride._id,
      captainId: captain._id,
    },{
      Headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setRidePopupPanel(false),
    setConfirmRidePopupPanel(true)
  }

  useGSAP(function (){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopUp
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          confirmRide={confirmRide}
        />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome
