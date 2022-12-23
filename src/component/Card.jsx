import React from 'react'

export const Card = ({header, text, className}) => {
  return (
    <div className={`${className}`}>
        <img src={header} alt="logo" className=' h-44  w-full object-cover' />
        <div className='bg-[#042C54] text-white w-full h-full relative p-2 lg:p-6'>
            <p>Sep 26, 2021</p>
            <h3 className='font-bold lg:text-2xl'>{text}</h3>
            <br />
            <br />
            <br />

            <p className='cursor-pointer absolute bottom-1'>Read Full Article</p>

        </div>
    </div>
  )
}
