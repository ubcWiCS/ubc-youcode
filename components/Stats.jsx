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
          <div className="mx-2 md:mx-10 w-60 h-10 w-80 md:h-40 relative" ref={cloud1Ref} style={cloud1Style}>
            <Image src="/assets/cloud.png" fill />
            <p className='text-xs md:text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold '>100+ Participants</p>
          </div>
          <div className="mx-2 md:mx-10 w-60 h-10 w-80 md:h-40 relative" ref={cloud2Ref} style={cloud2Style}>
          <Image src="/assets/cloud.png" fill />
            <p className='text-xs md:text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>30+ Projects</p>
          </div>
        </div>
        <div className="flex">
          {/* Add more cloud images with parallax effect here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Stats;
