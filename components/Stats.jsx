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
      <div className="flex flex-col p-10">
        <div className="flex"> 
          <div className="mx-10 w-1/2 relative" ref={cloud1Ref} style={cloud1Style}>
            <Image src="/assets/cloud3.svg" height={150} width={350} layout="responsive" alt="cloud" />
            <p className='text-3xl text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
              <span className="font-bold">100+</span> Participants
            </p>
          </div>
          <div className="mx-10 w-1/2 relative" ref={cloud2Ref} style={cloud2Style}>
            <Image src="/assets/cloud4.svg" height={150} width={300} layout="responsive" alt="cloud" />
            <p className='text-3xl text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              <span className="font-bold">30+</span> Projects
            </p>
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
