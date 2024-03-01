import React from 'react'

const GradientCircle = () => {
  return (
    <div className="overflow-hidden  ">
    <div className="w-[350px] h-[350px] lg:h-[600px] lg:w-[500px] rotate-45 md:h-[500px] md:w-[400px]  animate-preserve3d2  transition ease-linear rounded-full bg-orange-500 blur-xl absolute right-0 top-40 z-[2] md:top-1/2 md:right-1/2 " />
    <div className="w-[350px] h-[350px] md:h-[500px] md:w-[400px] lg:h-[600px] lg:w-[500px] md:top-1/2 md:right-1/2  rounded-full animate-preserve3d2 bg-red-500 absolute  blur-xl  right-0 top-40 z-[3]" />
  </div>
  )
}

export default GradientCircle