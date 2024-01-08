import React from 'react'
import Image from 'next/image'

const Stats2 = () => {
  return (
    <div>
      <div className="flex flex-col p-10 ml-40">
        <div className="flex w-2/3"> 
          <div className="mx-20 w-1/2 relative">
            <Image src="/assets/cloud.png" height={150} width={350} layout="responsive" alt="cloud" />
            <p className='text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>Stat 3</p>
          </div>
          <div className="mr-16 w-1/2 relative">
            <Image src="/assets/cloud.png" height={150} width={300} layout="responsive" alt="cloud"/>
            <p className='text-3xl font-bold text-dark-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>Stat 4</p>
          </div>
        </div>
        <div className="flex w-1/3">

        </div>

      </div>
    </div>
  )
}

export default Stats2