/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({
  children
}) => {

  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

  if (!user.email) {
    navigate('/login')
  }


  return (
    <div>
      UserProtectWrapper
    </div>
  )
}

export default UserProtectWrapper
