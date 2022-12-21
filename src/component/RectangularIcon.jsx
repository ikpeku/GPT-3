import React from 'react'
import { Images } from '../assets'

export const RectangularIcon = ({text}) => {
    const {rectangularIcon} = Images
  return (
    <div>
        <img src={rectangularIcon} alt="icon" />
        <h3>{text}</h3>
    </div>
  )
}
