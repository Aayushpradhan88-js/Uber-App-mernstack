/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
  
    function submitHandler(e) {
      e.preventDefault(); //To stop the output of the browser
      setUserData({
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
    }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        {/* uber logo */}
        <img className='w-16 mb-10' src="https://th.bing.com/th/id/OIP.9bm6M6gfXxYJ6qqjNR9B9AAAAA?w=280&h=280&rs=1&pid=ImgDetMain" alt="" />

        {/* Form  */}
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          {/* email box */}
          <h3 className='text-xl font-medium mb-2'>
            What is Your Email
          </h3>

          <input
            required
            // twoway binding 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'
            type="email"
            placeholder='email@example.com'
          />

          {/* password box */}
          <h3 className='text-xl font-medium mb-2'>
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
            className='bg-[#eeeeee] mb-7 px-4 py-2 border w-full text-lg placeholder:text rounded-lg'
            placeholder='password'
          />

          {/* Login button */}
          <button className='bg-[#111] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>

        </form>

        {/* redirected to new Account */}
        <p className='text-center'>Join a fleet?
          <Link to='/signup' className='text-blue-600'>
          Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link to='/login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
      
    </div>
  )
}

export default CaptainLogin
