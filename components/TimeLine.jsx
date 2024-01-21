import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

const TimeLine = () => {

  const { ref: ponyRef, style: ponyStyle } = useParallax
    ({easing: 'easeOutQuad',
    translateX: ['0vw', '0vw'],
    translateY: ['5vw', '-10vw'],
    scale: [1, 1] });

  return (
    <div className='flex p-32 w-full relative items-center justify-center' id="schedule">
      
      <Image src="/assets/timeline.svg" height={1050} width={850} layout="responsive" alt="timeline" />
      <div className="z-40 flex flex-col mx-auto absolute  items-center">
        <p className='text-xl text-black'>Pre-hackathon workshops TBA</p>
        <p className='text-xl text-black mt-10'> Hackathon April 5-6</p>
      </div>
      <div className="flex items-end justify-end right-20 bottom-20 absolute" ref={ponyRef} style={ponyStyle}>
        <Image src="/assets/face_mask_unicorn.svg"  height={200} width={200} alt="pony"/>
      </div>
      
    </div>
  )
}

export default TimeLine