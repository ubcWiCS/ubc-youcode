import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center w-1/2'>
      <p className='text-xs md:text-lg  text-dark-green font-bold  ]'>WiDS@UBC x UBC WiCS</p>
      <div className=" md:ml-5 w-48 h-12 md:w-96 md:h-28 relative ">
            <Link href="/" className="ml-5 hover:scale-105 transition duration-500">
              <Image src="/assets/Youcode.png" fill
                    alt="YouCode Logo"   />
            </Link>
        </div>

      <p className='text-xs md:text-xl text-dark-green font-bold md:mt-5 drop-shadow-md'>24-hour wellness-themed hackathon</p>
      <p className='text-xs md:text-xl text-dark-green font-bold  drop-shadow-md'>April 5-6, 2024</p>
      <Link href="/" className='mt-2 md:mt-8'>
        <p className='text-xs  md:text-2xl bg-[#B72E38] border-[#C7444D]/[1] px-7 rounded-3xl py-1 transform hover:scale-105 transition duration-500 drop-shadow-xl '>
          Apply!
        </p>
      </Link>

    </div>
  )
}

export default Register