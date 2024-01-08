import React from 'react'
import Image from 'next/image'

const Stats = () => {
  return (
    <div>
      <div className="flex flex-col p-10">
        <div className="flex"> 
          <div className="mx-10 w-1/2 relative">
            <Image src="/assets/cloud.png" height={150} width={350} layout="responsive" alt="cloud" />
            <p className='text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>Stat 1</p>
          </div>
          <div className="mx-10 w-1/2 relative">
            <Image src="/assets/cloud.png" height={150} width={300} layout="responsive" alt="cloud" />
            <p className='text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>Stat 2</p>
          </div>
        </div>
        <div className="flex">

        </div>

      </div>
    </div>
  )
}

export default Stats