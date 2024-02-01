import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

const Sponsors = () => {
  
  const { ref: cloud1Ref, style: cloud1Style } = useParallax
    ({
      easing: 'easeOutQuad',
    translateX: ['-2vw', '4vw'],
    translateY: ['-1vw', '1vw'], // Adjust the range to control the floating effect
    scale: [1, 1],
  });

  return (
    <div className="ml-8 mt-4 flex flex-col " id="sponsors">
      <p className='text-lg md:text-3xl lg:text-5xl font-bold text-white drop-shadow-[0_0_4px_#E2D6FF]'> 
        Our Sponsors 
      </p>
      <div className="mt-10 md:mt-20 lg:mt-40"></div>
      <div className="flex w-10 h-10  md:w-32 md:h-32 lg:w-60 lg:h-60 mx-20 relative" ref={cloud1Ref} style={cloud1Style}>
        <Image src="/assets/arcteryx.png" fill  />
      </div>
      
    </div>
  )
}

export default Sponsors
