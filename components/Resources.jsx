import React from 'react'
import Image from 'next/image'


const Resources = () => {
  const Resource = (props) => {
    return (
      <div className="relative flex flex-row">
        <div className=" text-[9px] md:text-lg w-1/12">{ props.number }</div>
        <div className="text-[9px] md:text-lg w-4/12 ">{ props.title }</div>
        <div className="text-[9px] md:text-lg w-5/12">{ props.topic }</div>
        <div className="text-[9px] md:text-lg w-2/12 ">
        <a className="text-[9px] md:text-lg w-2/12  px-2 md:px-6 py-[1px] md:py-2 text-center bg-red-500 rounded-3xl underline underline-offset-2" href={ props.link }>Link</a>
        </div>
        
      </div>
    )
  }
  return (
    <div className='resources ml-8 mt-4 md:mt-0' id="resources">
      <div className="text-lg  md:text-3xl lg:text-5xl text-dark-green font-bold mb-1 md:mb-7 drop-shadow-[0_0_4px_#E2D6FF] ">
          youCode 2024 Playlist 🎹 🎧
        </div>
        <div className='flex gap-2 md:mt-2 mb-3 md:mb-10'>
          <div className="  w-3 h-3 md:w-10 md:h-10 relative mt-2">
            
                <Image src="/assets/spotify-icons/spotify.png" fill
                      alt="Spotify"   />
          
          </div>
          <div className=" w-3 h-3 md:w-10 md:h-10  relative mt-2">
            
                <Image src="/assets/spotify-icons/download.svg" fill
                      alt="Spotify"   />
          
          </div>
          <div className="  w-3 h-3 md:w-10 md:h-10  relative mt-2">
            
                <Image src="/assets/spotify-icons/shuffle.svg" fill
                      alt="Spotify"   />
          
          </div>
          <div className="text-black text-sm md:text-lg my-auto md:ml-3">...</div>
        </div>
     

    <div className="relative flex flex-row">
      <div className='text-[9px] md:text-lg text-black w-1/12'>#</div>
      <div className='text-[9px] font-semibold text-dark-green md:text-lg text-black w-4/12'>Title</div>
      <div className='text-[9px] font-semibold text-dark-green md:text-lg text-black w-5/12'>Topic</div>
      <div className='text-[9px] font-semibold text-dark-green md:text-lg text-black w-2/12'>Link</div>
    </div>
    <hr className=" md:my-3 border-black w-11/12" />

    <ul className="flex flex-col mt-2 gap-2 md:gap-8">
    <Resource number="1." title="What is a hackathon?" topic="Learn about hackathons" link="https://www.techtarget.com/searchcio/definition/hackathon"/>
    <Resource number="2." title="Hackathon 101" topic="How to prepare for a hackathon" link="https://blog.streamlit.io/hackathon-101-5-simple-tips-for-beginners/amp/"/>
    <Resource number="3." title="Design" topic="Learn how to design projects" link="https://www.figma.com/resource-library/ux-design/"/>
    <Resource number="4." title="Github 101" topic="Collaborate using github" link="https://docs.github.com/en/get-started/quickstart/hello-world"/>
    <Resource number="5." title="Building projects" topic="Effectively building projects." link="https://hackthenorth.medium.com/building-projects-effectively-at-hackathons-997e5b1c2b1d"/>
    

    </ul>

    </div>
  )
}

export default Resources