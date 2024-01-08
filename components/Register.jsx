import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-lg text-white'>WiDS@UBC x UBC WiCS</p>
        <div className="max-w-sm">
          <Image src="/assets/youCode.png" height={130} width={350}  />
        </div>

      <p className='text-lg text-white'>24-hour wellness-themed hackathon</p>
      <p className='text-lg text-white'>April 5-6, 2024</p>
      <Link href="/" className='mt-8'>
        <p className='text-2xl bg-[#1A535C]/[0.7] border-2 border-[#4ECDC4]/[0.8] px-7 rounded-3xl py-1 transform hover:scale-105 transition duration-500 '>
          Apply!
        </p>
      </Link>

    </div>
  )
}

export default Register