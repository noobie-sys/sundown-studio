import GradientBox from '@/components/GradinetBox'
import GradientCircle from '@/components/GradinetBox/gradient'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <div className='w-full relative h-[80vh] md:h-screen flex md:flex-row flex-col md:justify-between md:items-center md:p-10 p-5 '>
        <div className='relative z-[4] text-[35px] md:text-[49px] lg:text-[65px] leading-none font_m  w-[450px] md:w-[800px]' >
            <h1>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
        </div>
        <div className='md:flex flex-col justify-end items-end md:ml-80 md:mt-80 relative z-[7]'>
           <div className='w-[300px] h-[200px] md:w-[250px] md:h-[180px] mt-10 ml-3  rounded-lg overflow-hidden relative z-[10] '>
            <Image src={"/image.webp"} alt='Image' width={200} height={200} className='w-full h-full object-cover object-center' />
           </div>
           <div className='relative z-[10] w-2/3 md:w-56 md:flex justify-center items-center   tracking-tight text-sm py-10 px-3'>
            <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
           </div>
        </div>
        <div className=''>
            <GradientCircle />
        </div>
    </div>
  )
}

export default AboutSection