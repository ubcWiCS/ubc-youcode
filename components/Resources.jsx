import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Resources = () => {
  const Resource = (props) => {
    return (
      <div className="mt-1 relative flex flex-row">
        <div className=" w-[21px]">{ props.number }</div>
        <div className="w-[385px] h-[34px]">{ props.title }</div>
        <div className="w-[878px] h-[34px]">{ props.topic }</div>
        <Link className="w-[125px] h-[30px] text-center bg-red-500 rounded-3xl underline underline-offset-2" href={ props.link } target="_blank">click here</Link>
      </div>
    )
  }
  return (
    <div className='resources ml-14 mr-14'>

      <div className='title w-[347px] h-36 relative'>
        <div className="text-white drop-shadow-lg font-inter text-base">Public playlist</div>
        <div className="text-white drop-shadow-lg font-inter text-2xl font-extrabold">youCode 2024 playlist</div>
        <div className='icons w-[347px] h-[81px] relative flex-row flex'>
          <Image src='/assets/spotify-icons/spotify.svg' width={50} height={40}/>
          <Image src='/assets/spotify-icons/download.svg' width={40} height={40}/>
          <Image src='/assets/spotify-icons/shuffle.svg' width={40} height={40}/>
          <div className="text-black p-5 text-xl">...</div>
        </div>
      </div>

    <div className="relative flex flex-row border-b border-black">
      <div className='mb-1 text-black w-[21px]'>#</div>
      <div className='text-black w-[385px]'>Title</div>
      <div className='text-black w-[878px]'>Topic</div>
      <div className='text-black w-[148px]'>Link</div>
    </div>

    <Resource number="1" title="What is a hackathon?" topic="Learn about hackathons and what happens." link="https://www.techtarget.com/searchcio/definition/hackathon"/>
    <Resource number="2" title="Hackathon 101" topic="How to prepare for a hackathon" link="https://blog.streamlit.io/hackathon-101-5-simple-tips-for-beginners/amp/"/>
    <Resource number="3" title="Figma and UX Design guide" topic="Learn how to design projects" link="https://www.figma.com/resource-library/ux-design/"/>
    <Resource number="4" title="Guide to Github" topic="Learn how to collaborate using Github" link="https://docs.github.com/en/get-started/quickstart/hello-world"/>
    <Resource number="5" title="Building projects" topic="Learn how to efficiently complete a project in the given time" link="https://hackthenorth.medium.com/building-projects-effectively-at-hackathons-997e5b1c2b1d"/>
    <Resource number="5" title="Hackathon guide" topic="Learning how to hack successfully" link="https://hackathon.guide"/>
    </div>
  )
}

export default Resources