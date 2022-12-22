import React from 'react'
import { Images } from '../../assets'
export const ThePossibility = () => {
  const { FeatureImage } = Images
  return (
    <div className="sm:flex items-center">
      <img src={FeatureImage} alt="Man with the Future vision" className='sm:w-1/2  object-cover' />

      <div className="rightSide flex flex-col gap-6 sm:w-1/2 p-6">
        <h6 className='text-sm text-[#71E5FF]'>Request Early Access to Get Started</h6>
        <h2 className='bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent w-5/6 font-bold text-5xl'>The possibilities are beyond your imagination</h2>
        <p className='text-[#81AFDD] text-sm lg:text-lg leading-loose'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h6 className='bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent text-sm'>Request Early Access to Get Started</h6>
      </div>
    </div>
  )
}
