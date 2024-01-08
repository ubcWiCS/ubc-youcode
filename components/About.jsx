import React from 'react'
import Stats from './Stats'

const About = () => {
  return (
    <div className='flex'>
      <div className="flex flex-col w-1/2">
        <div className="text-5xl text-dark-green font-bold ">
          About youCode:
        </div>
        <Stats/>
      </div>
      <div className='w-1/2'>
        <p className='text-white text-md mr-20 mt-10'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>

    </div>
  )
}

export default About