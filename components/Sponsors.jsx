import React from 'react'
import Image from 'next/image'


const Sponsors = () => {
  
  

  return (
    <div className=" mt-4 flex flex-col lg:mt-40  " id="sponsors">
      <p className='text-lg md:text-3xl lg:text-5xl font-bold text-white ml-8 drop-shadow-[0_0_4px_#E2D6FF]'> 
        Our Sponsors 
      </p>
      <div className="flex flex-col items-center justify-center mt-4 md:mt-10 lg:mt-28 rounded-2xl bg-white/[0.1] p-3 md:p-10 lg:p-20 mx-8 md:mx-20">
      <div className="flex w-20 h-10  md:w-48 md:h-32 lg:w-5/12 lg:h-60  relative">
        <Image src="/assets/arcteryx.png" fill  />
      </div>
      <div className="flex w-full mt-4 md:mt-10 lg:mt-28 gap-4 md:gap-10 lg:gap-20">
        <div className="flex w-4/12 h-8 md:h-16 lg:w-4/12 lg:h-24 relative">
          <Image src="/assets/schneider.png" fill  />
        </div>
        <div className="flex w-3/12 h-8 md:h-16 lg:w-4/12 lg:h-24 relative">
          <Image src="/assets/plainview.png" fill  />
        </div>
      </div>
      <div className="flex w-full mt-4 md:mt-10 lg:mt-28">
        <div className="flex w-1/12 h-4 md:h-10 lg:w-2/12 lg:h-20 relative">
          <Image src="/assets/orbis.png" fill  />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Sponsors
