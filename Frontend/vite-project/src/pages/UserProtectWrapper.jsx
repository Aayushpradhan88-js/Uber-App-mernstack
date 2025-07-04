/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectWrapper = ({
  children
}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  //   axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(response => {
  //     if (response.status === 200) {
  //       setUser(response.data.captain)
  //       setIsLoading(false)
  //     }
  //   })
  //     .catch(err => {
  //       localStorage.removeItem('token')
  //       navigate('/captain-login')
  //     })
  // })


  return (
    <>
      {children}
    </>

  )
}

export default UserProtectWrapper
