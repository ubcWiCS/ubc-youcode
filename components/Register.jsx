import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center w-1/2'>
      <p className='text-lg  text-dark-green font-bold  ]'>WiDS@UBC x UBC WiCS</p>
        <div className="max-w-sm">
          <Image src="/assets/youCode.svg" height={130} width={550}  />
        </div>

      <p className='text-xl text-dark-green font-bold mt-5 drop-shadow-md'>24-hour wellness-themed hackathon</p>
      <p className='text-xl text-dark-green font-bold  drop-shadow-md'>April 5-6, 2024</p>
      <Link href="/" className='mt-8'>
        <p className='text-2xl bg-[#B72E38] border-[#C7444D]/[1] px-7 rounded-3xl py-1 transform hover:scale-105 transition duration-500 drop-shadow-xl '>
          Apply!
        </p>
      </Link>

    </div>
  )
}

export default Register