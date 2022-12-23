import React, { useState } from 'react'
import { Images } from '../../assets'
import { useUserAuth } from '../../hooks/useUserAuth'
import { useNavigate } from 'react-router-dom'

export const Bannner = () => {
  const [email, setEmail] = useState("")
  const { dispatch } = useUserAuth()
  const navigate = useNavigate()

  const { HeaderIllustration } = Images

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "EMAIL" , payload: email})
    navigate("/signup")

  }
  return (
    <div className="w-full flex flex-col-reverse md:flex-row max-h-full items-center">
      <div className="left_Banner flex flex-1 flex-col gap-8">
        <h1 className="bg-gradient-to-r from-[#AE67FA] via-[#F49867] to-[#F49867] bg-clip-text text-transparent text-xl sm:text-3xl lg:text-5xl 2xl:text-7xl lg:leading-[50px] xl:leading-[75px] font-semibold ">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-[#81AFDD] lg:w-[70%] lg:leading-loose">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="h-16 rounded-lg flex">
          <input
            type="text"
            placeholder="Your Email Address"
            className="h-full w- w-9/12 text-white outline-none bg-[#052D56] pl-4 rounded-l-md placeholder:text-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-[#FF4820] text-white text-xs sm:text-md lg:text-lg h-full flex-auto rounded-r-md " onClick={handleSubmit}>
            Get Started
          </button>
        </div>
        <div className="flex items-center text-white gap-4">
          <div className="flex cursor-pointer">
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-8 w-8 rounded-full"
            />
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-8 w-8 rounded-full -ml-5"
            />
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-8 w-8 rounded-full -ml-5"
            />
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-8 w-8 rounded-full -ml-5"
            />
            <img
              alt="Welcome"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-8 w-8 rounded-full -ml-5"
            />
            <div className="h-8 w-8 rounded-full -ml-5 bg-sky-400 text-black flex justify-center items-center">
              34+
            </div>
          </div>

          <p className=''>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="right_Banner h-full flex-1">
        <img
          src={HeaderIllustration}
          alt="bannner"
          className=" h-auto object-cover"
        />
      </div>
    </div>
  )
}
