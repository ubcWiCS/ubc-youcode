import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

const TimeLine = () => {

  const { ref: ponyRef, style: ponyStyle } = useParallax
    ({easing: 'easeOutQuad',
    translateX: ['90%', '90%'],
    translateY: ['50%', '80%'],
    scale: [1, 1] });

  return (

    <div className='flex md:p-20 w-full items-center justify-center z-10' id="schedule">
  <div className="flex flex-col items-center text-center mt-24 md:mt-80 gap-2 md:gap-10"> 
    <p className='text-xs md:text-xl text-dark-green font-bold'>Pre-hackathon workshops TBA</p>
    <p className='text-xs md:text-xl text-dark-green font-bold'> Hackathon April 5-6</p>
  </div>
  <div className="hidden md:block flex z-20 w-48 h-56 md:w-48 md:h-60 absolute bottom-40 right-80" ref={ponyRef} style={ponyStyle}>
    <Image src="/assets/face_mask_unicorn.png" fill alt="pony"/>
  </div>
</div>


  )
}

export default TimeLine