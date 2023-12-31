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
    <div className='flex p-32 w-full relative '>
      
      <Image src="/assets/timeline.png" height={1050} width={850} layout="responsive" alt="timeline" />
      <div className="flex items-end justify-end right-20 bottom-20 absolute" ref={ponyRef} style={ponyStyle}>
        <Image src="/assets/face_mask_unicorn.png"  height={200} width={200} alt="pony"/>
      </div>
      
    </div>
  )
}

export default TimeLine