import React from 'react';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

const Stats = () => {
  const { ref: cloud1Ref, style: cloud1Style } = useParallax
    ({easing: 'easeOutQuad',
    translateX: ['-5vw', '0vw'],
    translateY: ['0vw', '0vw'],
    scale: [1, 1] });
  const { ref: cloud2Ref, style: cloud2Style } = useParallax
        ({easing: 'easeOutQuad',
        translateX: ['-5vw', '0vw'],
        translateY: ['0vw', '0vw'],
        scale: [1, 1] });

  return (
    <div>
      <div className="flex flex-col p-2 md:p-10">
        <div className="flex"> 
          <div className="mx-2 lg:mx-10 w-60 h-10 md:w-80 md:h-20 lg:h-40   relative" ref={cloud1Ref} style={cloud1Style}>
            <Image src="/assets/cloud.png" fill />
            <p className='text-[8px] md:text-lg lg:text-3xl font-semibold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold '>200+ Participants</p>
          </div>
          <div className="mx-2 md:mx-10 w-60 h-10 md:w-80 md:h-20 lg:h-40  relative" ref={cloud2Ref} style={cloud2Style}>
          <Image src="/assets/cloud.png" fill />
            <p className='text-[8px] md:text-lg lg:text-3xl font-semibold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>50+ Projects</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Stats;
