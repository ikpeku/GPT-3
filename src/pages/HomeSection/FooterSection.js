import React from 'react'
import { Footer } from '../../component'

export const FooterSection = () => {
  return (
    <div className="bg-[#031B34] w-full sm:mt-5 lg:mt-12 text-white">
      <div className='text-center'>
        <h2 className='bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent text-4xl font-bold sm:w-3/4 lg:w-1/2  mx-auto py-5 lg:py-12'>Do you want to step in to the future before others</h2>
        <button type='button' className='border p-3 mt-5  lg:mt-10'>Request Early Access</button>
      </div>
      <Footer />
    </div>
  )
}
