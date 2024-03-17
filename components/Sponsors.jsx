import React from 'react'
import Image from 'next/image'


const Sponsors = () => {
  
  

  return (
    <div className=" mt-4 flex flex-col lg:mt-32  " id="sponsors">
      <p className='text-lg md:text-3xl lg:text-5xl font-bold text-white ml-8 drop-shadow-[0_0_4px_#E2D6FF]'> 
        Our Sponsors 
      </p>
      <div className="flex flex-col items-center justify-center mt-4 md:mt-10 lg:mt-24 rounded-2xl bg-white/[0.1] p-3 md:p-10 lg:p-20 mx-8 md:mx-20">
      <div className="flex w-20 h-10 md:w-48 md:h-32 lg:w-6/12 lg:h-64 relative">
        <Image src="/assets/arcteryx.png" layout="fill" objectFit="contain" alt="Arcteryx" />
      </div>
      <div className="flex w-20 h-12 md:w-48 md:h-36 lg:w-5/12 lg:h-60 items-center justify-center relative">
       
            <Image src="/assets/DarkVision.png" layout="fill" objectFit="contain" alt="DarkVision" />
         
      </div>
      <div className="flex w-full gap-4 md:gap-10 lg:gap-20">
        
        <div className="flex w-4/12 h-8 md:h-16 lg:w-4/12 lg:h-24 relative">
          <Image src="/assets/schneider.png" layout="fill" objectFit="contain" alt="Schneider" />
        </div>
        <div className="flex w-3/12 h-8 md:h-16 lg:w-4/12 lg:h-24 relative">
          <Image src="/assets/plainview.png" layout="fill" objectFit="contain" alt="Plainview" />
        </div>
        <div className="flex w-3/12 h-8 md:h-16 lg:w-4/12 lg:h-24 relative">
          <Image src="/assets/saplogo.png" layout="fill" objectFit="contain" alt="Plainview" />
        </div>
      </div>
      <div className="flex w-full mt-4 md:mt-10 lg:mt-28">
        <div className="flex w-1/12 h-4 md:h-10 lg:w-2/12 lg:h-20 relative">
          <Image src="/assets/orbis.png" layout="fill" objectFit="contain" alt="Orbis" />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Sponsors
