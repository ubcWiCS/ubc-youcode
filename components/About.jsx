import React from 'react'
import Stats from './Stats'


const About = () => {
  return (
    <div className='flex mt-10 md:mt-20 md:mt-40 ml-8 md:ml-10 xl:mt-60' id="about">
      <div className="flex flex-col w-1/2">
        <div className="text-lg md:text-3xl lg:text-5xl text-dark-green font-bold drop-shadow-[0_0_4px_#E2D6FF] ">
          About youCode 
        </div>
        <Stats/>
      </div>
      <div className='w-1/2'>
        <p className='hidden drop-shadow-md md:tracking-wider md:block font-semibold text-dark-green  md:text-xs lg:text-xl md:mr-20 mt-10'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. As we strive to build opportunities for underrepresented genders interested in tech to innovate, we create tight, welcoming communities where we empower each other. Continuing to build meaningful networks in a supportive environment is our ultimate mission.
        </p>
        <p className='text-[7px] md:hidden drop-shadow-md md:tracking-wider md:block font-semibold text-dark-green  md:text-xs lg:text-xl mr-5 mt-10'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. 24 hour hackathon for underrepresented genders in tech, by WIDS and WICS.
        </p>
        <p className='text-[7px] md:block drop-shadow-md md:tracking-wider font-semibold text-dark-green   md:text-xs lg:text-xl mr-20 md:mt-10 font-bold'>
        Our values: Inclusivity, Visibility, Community, Wellbeing.
        </p>
        
      </div>

    </div>
  )
}

export default About