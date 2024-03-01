import React from 'react'
import GradientBox from '../GradinetBox'

const HomePage = () => {
  return (
    <div>
        <div className="flex w-full h-full  flex-col md:flex-row-reverse mt-20 md:items-end p-2 border-b border-gray-400 pb-10 lg:mt-28">
        <div className="title w-full text-[98px] lg:pb-10 md:text-[121px] lg:text-[152px] pr-4 md:pr-10 uppercase font_m font-bold leading-none text-right tracking-tighter ">
          <h1>spaces</h1>
          <h1 className="w-full text-right">that</h1>
          <h1>Inspire</h1>
        </div>
        <div className="w-full border-b pb-10 md:pb-1  leading-none ">
          <p className="w-[340px] lg:w-[430px] font_m mt-10 pl-4 text-[21px] lg:text-[28px]">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </p>
        </div>
      </div>
      <div className="relative z-[2] p-5 md:p-8 overflow-hidden w-full h-full rounded-3xl mt-5">
        
        <div className="w-full rounded-2xl overflow-hidden">

        <video loop={true} muted={true} autoPlay={true} className="" >
          <source src="/video/a.mp4" />
        </video>
        </div>
      </div>
      <div className="overflow-hidden">
        <GradientBox />
      </div>
    </div>
  )
}

export default HomePage