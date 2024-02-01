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
      <div className="flex flex-col p-10 md:ml-10 lg:ml-40">
        <div className="flex w-2/3"> 
          <div className="w-60 mr-4 lg:mx-10 w-60 h-10 md:w-72 md:h-20 lg:h-40  relative" ref={cloud1Ref} style={cloud1Style}>
          <Image src="/assets/cloud.png" fill />
            <p className='text-[10px] md:text-lg lg:text-3xl  font-semibold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>Hosted by WiCSxWiDS 
</p>

          </div>
          <div className="mr-2 md:mr-16  lg:mx-10 w-60 h-10 md:w-72 md:h-20 lg:h-40  relative" ref={cloud2Ref} style={cloud2Style}>
              <Image src="/assets/cloud.png" fill />
            <p className='text-[10px] md:text-lg lg:text-3xl  font-semibold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>30+ Volunteers & Mentors </p>
          </div>
        </div>
       
        <p className='md:hidden ml-0 text-white text-[10px] md:text-lg  mt-4'>
        Our values: Inclusivity, Visibility, Community, Wellbeing.
        </p>
      </div>
    </div>
  )
}

export default Stats2