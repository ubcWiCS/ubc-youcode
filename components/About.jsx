import React from 'react'
import Stats from './Stats'

const About = () => {
  return (
    <div className='flex'>
      <div className="flex flex-col w-1/2">
        <div className="text-lg md:text-5xl text-dark-green font-bold drop-shadow-[0_0_4px_#E2D6FF] ">
          About youCode 💻 🦄
        </div>
        <Stats/>
      </div>
      <div className='w-1/2'>
        <p className='hidden md:block text-white text-xs md:text-lg mr-20 mt-10'>
        Dedicated to fostering gender inclusivity and breaking traditional norms in the tech industry. As we strive to build opportunities for underrepresented genders interested in tech to innovate, we create tight, welcoming communities where we empower each other. Continuing to build meaningful networks in a supportive environment is our ultimate mission.
        </p>
        <p className='hidden md:block text-white text-xs md:text-lg mr-20 mt-10 font-bold'>
        Our values: Inclusivity, Visibility, Community, Wellbeing.
        </p>
        
      </div>

    </div>
  )
}

export default About