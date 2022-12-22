import React from 'react'
import { Images } from '../assets'

export const RectangularIcon = ({text, space}) => {
    const {rectangularIcon} = Images
  return (
    <div className='text-white font-bold text-lg'>
        <img src={rectangularIcon} alt="icon" />
        {/* <br /> */}
        <h3 className={space}>{text}</h3>
    </div>
  )
}
