import React from 'react'
import { RectangularIcon } from '../../component'

export const TheFuture = () => {
  return (
    <div className="flex">
      <div className="leftSide bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent flex-auto w-1/2">
        <h2 className="font-bold lg:text-4xl w-9/12 ">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <br />
        <p>Request Early Access to Get Started</p>
      </div>


      <div className="rightSide w-1/2">
        <div className="flex justify-between">
          <RectangularIcon text="Chatbots" space="pt-1" className="w-1/5"/>
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose w-9/12 ">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </p>
        </div>

        <br />
        <div className="flex justify-between">
          <RectangularIcon text="Become the tended active" space="pt-1" className="w-1/5" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose w-9/12 ">
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </p>
        </div>

        <br />
        <div className="flex justify-between">
          <RectangularIcon text="Message or am nothing" space="pt-1" className="w-1/5" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose w-9/12 ">
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </p>
        </div>

        <br />
        <div className="flex justify-between">
          <RectangularIcon text="Really boy law county" space="pt-1" className="w-1/5" />
          <p className="text-[#81AFDD] text-sm lg:text-lg leading-loose w-9/12">
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </p>
        </div>
        <br />
      </div>
    </div>
  )
}
