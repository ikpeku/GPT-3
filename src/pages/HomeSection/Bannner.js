import React from 'react'

export const Bannner = () => {
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="left_Banner">
        <h1 className="bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent text-7xl leading-[75px] font-extrabold">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-[#81AFDD]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="h-14 rounded-lg flex">
          <input
            type="text"
            placeholder="Your Email Address"
            className="h-full w- w-9/12 text-white outline-none bg-[#052D56] pl-4 rounded-l-md placeholder:text-lg"
          />
          <button className="bg-[#FF4820] text-white text-lg h-full flex-auto rounded-r-md">
            Get Started
          </button>
        </div>
        <div>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="right_Banner"></div>
    </div>
  )
}
