/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';

import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  // twoway binding 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const {user, setUser}= useContext(UserDataContext);
  const navigate = useNavigate()

  async function submitHandler(e) {
    e.preventDefault(); //To stop the output of the browser

    // const userData = {
    //   email: email,
    //   password: password
    // }

    // // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    // if (response.status === 200) {
    //   const data = response.data
    //   setUser(data.user)
    //   localStorage.setItem('token', data.token);
    //   navigate('/')
    // }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        {/* uber logo */}
        <img className='w-16 mb-10' src="https://th.bing.com/th/id/OIP.9bm6M6gfXxYJ6qqjNR9B9AAAAA?w=280&h=280&rs=1&pid=ImgDetMain" alt="" />

        {/* Form  */}
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <h2 className='text-4xl underline font-semibold mb-7 text-center '>User Login</h2>
          {/* email box */}
          <h3 className='text-sm font-medium mb-2'>
            Email
          </h3>

          <input
            required
            // twoway binding 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg text-black placeholder:text-sm rounded-lg'
            type="email"
            placeholder='enter your email'
          />

          {/* password box */}
          <h3 className='text-sm font-medium mb-2'>
            Password
          </h3>

          <input
            required
            type="password"
            // twoway binding 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] mb-5 px-4 py-2 border w-full text-black text-lg placeholder:text-sm rounded-lg'
            placeholder='enter your password'
          />

          {/* Login button */}
          <button className='bg-[#eeeeee] font-semibold mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'>
            Login
          </button>

        </form>

        {/* redirected to new Account */}
        <p className='text-center'>New here?
          <Link to='/signup' className='text-blue-600'>
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-signup' className='bg-[#10b461] flex items-center justify-center font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as a captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
