import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RegisterBanner = () => {
  const navigate = useNavigate()

  const handleRedirect = () => navigate("/login")
  return (
    <div className='sm:flex justify-between items-center bg-gradient-to-r from-[#AE67FA] to-[#F49867] w-full py-6 text-center sm:px-16 my-12'>
        <div>
            <h6 className='text-sm text-black'>Request Early Access to Get Started</h6>
            <h3 className='text-lg font-bold text-black'>Register today & start exploring the endless possiblities.</h3>
        </div>
        <button type='button' className='text-white bg-black rounded-full p-4' onClick={handleRedirect}>Get Started</button>

    </div>
  )
}
