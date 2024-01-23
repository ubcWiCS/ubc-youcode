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
    <div className="flex flex-col p-20 " id="sponsors">
      <p className='text-5xl font-bold text-white drop-shadow-[0_0_4px_#E2D6FF]'> 
        Our Sponsors: 
      </p>
      <div className="mt-40"></div>

      <div className="flex mx-20  w-48 h-48 md:w-64 md:h-48 relative" ref={cloud1Ref} style={cloud1Style}>
        <Image src="/assets/arcteryx.png" fill  />
     </div>
      
    </div>
  )
}

export default Sponsors