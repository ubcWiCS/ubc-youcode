import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center w-1/2 md:ml-20 lg:ml-0 md:mt-10 lg:mt-0'>

      <p className='text-[7px] md:text-[15px] lg:text-lg  text-dark-green font-bold  ]'>WiDS@UBC x UBC WiCS</p>
      <div className=" md:ml-5 w-36 h-12 md:w-60 md:h-20 lg:w-96 lg:h-28 relative ">
            <Link href="/" className="ml-5 hover:scale-105 transition duration-500">
              <Image src="/assets/youCode.png" fill
                    alt="YouCode Logo"   />
            </Link>

        </div>

      <p className='text-[7px] md:text-lg lg:text-xl text-dark-green font-bold lg:mt-5 drop-shadow-md'>24-hour wellness-themed hackathon</p>
      <p className='text-[7px] md:text-lg lg:text-xl text-dark-green font-bold  drop-shadow-md'>April 5-6, 2024</p>
      <Link href="/" className='mt-2 lg:mt-8'>
        <p className='text-[12px]  md:text-xl lg:text-2xl bg-[#B72E38] border-[#C7444D]/[1] px-7 rounded-3xl py-1 transform hover:scale-105 transition duration-500 drop-shadow-xl '>
          Apply!
        </p>
      </Link>

    </div>
  )
}

export default Register