import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  
  return (

    <div className="flex p-20 ">
      <p className='text-5xl font-bold text-white'> 
        Our Sponsors: 
      </p>
      <div className="flex mx-20">
        <Image src="/assets/arcteryx.png" height={200} width={200}  />
      </div>
      
    </div>
  )
}

export default Sponsors