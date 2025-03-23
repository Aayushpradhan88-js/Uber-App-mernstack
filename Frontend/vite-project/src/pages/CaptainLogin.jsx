/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { use } from 'react';

const CaptainLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captain, setCaptain] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault(); //To stop the output of the browser
    const captain = {
      email: email,
      password: password
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, CaptainLogin)
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/captain-home');
    };

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          {/* uber logo */}
          <img className='w-30 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" style={{ filter: 'brightness(0) invert(1)' }} />

          {/* Form  */}
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>

            <h2 className='text-3xl underline font-semibold mb-7 text-center '>Captain Login</h2>
            {/* email box */}
            <h3 className='text-base font-medium mb-2'>
              Create your email
            </h3>

            <input
              required
              // twoway binding 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='bg-[#eeeeee] text-black mb-5 px-4 py-2 border w-full text-lg placeholder:text-sm rounded-lg'
              type="email"
              placeholder='email@example.com'
            />

            {/* password box */}
            <h3 className='text-base font-medium mb-2'>
              Enter Password
            </h3>

            <input
              required
              type="password"
              // twoway binding 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className='bg-[#eeeeee] mb-5 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'
              placeholder='password'
            />

            {/* Login button */}
            <button className='bg-[#111] font-semibold mb-1 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
              Login
            </button>

          </form>

          {/* redirected to new Account */}
          <p className='text-center'>Join a fleet?
            <Link to='/captain-signup' className='text-blue-600'>
              create a new captain
            </Link>
          </p>
        </div>

        <div>
          <Link to='/login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>

      </div>

    </div>
  );
};

export default CaptainLogin;
