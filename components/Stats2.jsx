import React from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

const Stats2 = () => {

  const { ref: cloud1Ref, style: cloud1Style } = useParallax
    ({easing: 'easeOutQuad',
    translateX: ['-2vw', '0vw'],
    translateY: ['0vw', '0vw'],
    scale: [1, 1] });
  const { ref: cloud2Ref, style: cloud2Style } = useParallax
        ({easing: 'easeOutQuad',
        translateX: ['-2vw', '0vw'],
        translateY: ['0vw', '0vw'],
        scale: [1, 1] });


  return (
    <div>
      <div className="flex flex-col p-10 ml-40">
        <div className="flex w-2/3"> 
          <div className="mx-20 w-1/2 relative " ref={cloud1Ref} style={cloud1Style}>
            <Image src="/assets/cloud1.svg" height={150} width={350} layout="responsive" alt="cloud" />
            <p className='text-3xl text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              <span className="font-bold">600+</span> Applications
            </p>
          </div>
          <div className="mr-16 w-1/2 relative" ref={cloud2Ref} style={cloud2Style}>
            <Image src="/assets/cloud2.svg" height={150} width={300} layout="responsive" alt="cloud"/>
            <p className='text-3xl text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
              <span className="font-bold">25+</span> Volunteers & Mentors 
            </p>
          </div>
        </div>
        <div className="flex w-1/3">

        </div>

      </div>
    </div>
  )
}

export default Stats2