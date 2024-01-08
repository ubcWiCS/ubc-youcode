import React from 'react'
import Image from 'next/image'

const TimeLine = () => {
  return (
    <div className='flex justify-end mr-20'>
      <Image src="/assets/timeline.png" height={1050} width={850}  alt="timeline" />
    </div>
  )
}

export default TimeLine