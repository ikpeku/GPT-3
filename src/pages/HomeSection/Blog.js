import React from 'react'
import { Card } from '../../component'
import { Images } from '../../assets'

export const Blog = () => {
    const { Rectangle0, Rectangle1, Rectangle2, Rectangle3, Rectangle4} = Images

    const  matrix = [
        {
            img:  Rectangle1,
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            img:  Rectangle2,
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            img:  Rectangle3,
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            img:  Rectangle4,
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
    ]
  return (
    <div className="w-full object-cover pb-24">
      <h2 className="bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent w-[45%] font-semibold text-4xl py-14">
        A lot is happening, We are blogging about it.
      </h2>

      <div className="flex gap-8">

        <div  className='w-1/2 min-h-full'>
        <div className='bg-[#042C54] text-white w-full h-full relative '>
            <img src={Rectangle0} alt="logo" className='h-1/2  w-full' />
            <p className='pt-6 px-6' >Sep 26, 2021</p>
            <h3 className='font-bold text-2xl px-6'>"GPT-3 and Open  AI is the future. Let us exlore how it is?"</h3>

            <p className='cursor-pointer absolute bottom-1 px-6'>Read Full Article</p>

        </div>

        </div>


        <div className='grid grid-cols-2 gap-5 w-1/2'>
            {
                matrix.map(({img, text}) => (
                   <div key={img}>
                     <Card text={text} header={img}  className="w-full" />
                   </div>

                ))
            }

        </div>
      </div>
    </div>
  )
}
