import React from 'react'
import Image from 'next/image'


const Resources = () => {
  const Resource = (props) => {
    return (
      <div className="relative flex flex-row">
        <div className=" w-[21px]">{ props.number }</div>
        <div className="w-[385px] h-[34px]">{ props.title }</div>
        <div className="w-[878px] h-[34px]">{ props.topic }</div>
        <a className="w-[125px] h-[30px] text-center bg-red-500 rounded-3xl underline underline-offset-2" href={ props.link }>click here</a>
      </div>
    )
  }
  return (
    <div className='resources ml-14 mr-14' id="resources">

      <div className='title w-[347px] h-36 relative'>
        <div className="text-white drop-shadow-lg font-inter text-base">Public playlist</div>
        <div className="text-white drop-shadow-lg font-inter text-2xl font-extrabold">youCode 2024 playlist</div>
        <div className='icons w-[347px] h-[81px] relative flex-row flex'>
          <Image src='/assets/spotify-icons/spotify.svg' width={59} height={60}/>
          <Image src='/assets/spotify-icons/download.svg' width={59} height={60}/>
          <Image src='/assets/spotify-icons/shuffle.svg' width={59} height={60}/>
          <div className="text-black p-5">...</div>
        </div>
      </div>

    <div className="relative flex flex-row">
      <div className='text-black w-[21px]'>#</div>
      <div className='text-black w-[385px]'>Title</div>
      <div className='text-black w-[878px]'>Topic</div>
      <div className='text-black w-[148px]'>Link</div>
    </div>
    <hr className="my-3 border-black w-full" />

    <Resource number="1" title="WTF is a hackathon" topic="Understading what a hackathon is" link="https://medium.com/hackathons-anonymous/wtf-is-a-hackathon-92668579601"/>
    <Resource number="2" title="WTF is a hackathon" topic="Understading what a hackathon is" link="https://medium.com/hackathons-anonymous/wtf-is-a-hackathon-92668579601"/>
    <Resource number="3" title="WTF is a hackathon" topic="Understading what a hackathon is" link="https://medium.com/hackathons-anonymous/wtf-is-a-hackathon-92668579601"/>
    <Resource number="4" title="WTF is a hackathon" topic="Understading what a hackathon is" link="https://medium.com/hackathons-anonymous/wtf-is-a-hackathon-92668579601"/>
    <Resource number="5" title="WTF is a hackathon" topic="Understading what a hackathon is" link="https://medium.com/hackathons-anonymous/wtf-is-a-hackathon-92668579601"/>
    </div>
  )
}

export default Resources