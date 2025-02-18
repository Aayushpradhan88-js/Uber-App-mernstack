/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  function submitHandler(e) {
    e.preventDefault(); //To stop the output of the browser
    setUserData({
      fullname: {
        firstname: firstName,
        lastname: LastName,
      },
      email: email,
      password: password
    })
    // console.log(userData)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div>
      <div className='p-7 h-screen  flex flex-col justify-between'>
        <div>
          {/* uber logo */}
          <img className='w-30 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" style={{ filter: 'brightness(0) invert(1)' }}/>

          {/* Form  */}
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>

            
          <h2 className='text-3xl underline font-semibold mb-7 text-center '>Captain Registration</h2>

            {/* name box of user first and lastname */}
            <h3 className='text-base font-medium mb-2'>
              What is Your name ?
            </h3>
            <div className='flex gap-2 mb-5'>
              <input
                required
                className='bg-[#eeeeee] text-black w-1/2 px-4 py-2 border text-lg placeholder:text-sm rounded-lg'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                placeholder='First name'
              />
              <input
                required
                className='bg-[#eeeeee] text-black w-1/2 px-4 py-2 border text-lg placeholder:text-sm rounded-lg'
                value={LastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                placeholder='Last name'
              />

            </div>

            {/* email box */}
            <h3 className='text-base font-medium mb-2'>
              What is Your Email
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
              className='bg-[#eeeeee] text-black mb-5 px-4 py-2 border w-full text-lg placeholder:text-sm rounded-lg'
              placeholder='password'
            />

            {/* Login button */}
            <button className='bg-[#111] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
              Login
            </button>

          </form>

          {/* redirected to new Account */}
          <p className='text-center'>Already have a account?
            <Link to='/captain-login' className='text-blue-600'>
              Login your account
            </Link>
          </p>
        </div>

        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
      

    </div>
  )
}

export default CaptainSignup
