import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

const TimeLine = () => {

  const { ref: ponyRef, style: ponyStyle } = useParallax
    ({easing: 'easeOutQuad',
    translateX: ['0vw', '0vw'],
    translateY: ['50vh', '80vh'],
    scale: [1, 1] });

  return (
    <div className='flex md:p-20 w-full items-center justify-center z-10' id="schedule">
  <div className="flex flex-col items-center text-center"> {/* Added 'text-center' class */}
    <p className='text-xl text-black'>Pre-hackathon workshops TBA</p>
    <p className='text-xl text-black mt-10'> Hackathon April 5-6</p>
  </div>
  <div className="flex items-end justify-end w-48 h-56 md:w-48 md:h-60 absolute bottom-20 right-20" ref={ponyRef} style={ponyStyle}>
    <Image src="/assets/face_mask_unicorn.png" fill alt="pony"/>
  </div>
</div>

  )
}

export default TimeLine