import React from 'react'
import { Images } from '../../assets'
export const Logos = () => {
    const { atlassian,dropbox,google,shopify,slack} = Images

    const Img = [atlassian,dropbox,google,shopify,slack]


  return (
    <div className='my-7 flex align-middle justify-between w-4/5 mx-auto'>
       
        {
          Img.map( img => (
            <img src={img} alt="Comapnies Logos" className='' />
          ))
        }
    </div>
  )
}
