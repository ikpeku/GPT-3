import React from 'react'
import { RectangularIcon } from '../../component'

export const Library = () => {
  return (
    <div className="w-11/12 mx-auto bg-gradient-to-br from-[#0F4279] via-[#0F4279] to-[#1B78DE] p-12">
      <div className="flex justify-between ">
        <RectangularIcon text="What is GPT-3" space="pt-3" />

        <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose w-4/5 ">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <br />
      <div className="flex justify-between bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent py-6">
        <h3 className="font-bold text-lg">
          The possibilities are beyond your imagination
        </h3>
        <h6>Explore The Library</h6>
      </div>
      <br />

      <div className='flex justify-between w-full gap-5'>
        <div className='flex-1 '>
          <RectangularIcon text="Chatbots" space="pt-1" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose pt-5 ">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className='flex-1'>
          <RectangularIcon text="Knowledgebase" space="pt-1" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose  pt-5 ">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div className='flex-1'>
          <RectangularIcon text="Education" space="pt-1" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose  pt-5 ">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  )
}
