"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';
import { SectionContainer } from '@/components/SectionContainer';
import Navbar from '@/components/Navbar';

const profiles = [
  {
    img: '/assets/team/Sandra.jpg',
    name: 'Sandra Radic',
    emoji: '☀️ ',
    color: '#01DACC',
    title: 'Founder & Co-Lead',
    social: "https://www.linkedin.com/in/sandraradic/"
  },
  {
    img: '/assets/team/Arden.jpg',
    name: 'Arden Choi',
    emoji: '🫵 ',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/ardenchoi/"
  },
  {
    img: '/assets/team/Tara.jpg',
    name: 'Tara Ubovic',
    emoji: '🐸',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/tara-ubovic/"
  },
  {
    img: '/assets/team/Moira.jpg',
    name: 'Moira Renata',
    emoji: '🏝️',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/moira-renata/"
  },
  
  {
    img: '/assets/team/Tanya.jpg',
    name: 'Tanya',
    emoji: '🫧',
    color: '#01DACC',
    title: 'Website Team Lead',
    social: "https://www.linkedin.com/in/tanya-75a03a254/"
  },
  {
    img: '/assets/team/Carina.jpg',
    name: 'Carina Tze',
    emoji: '🫶🏻',
    color: '#01DACC',
    title: 'Swag Team Lead',
    social: "https://www.linkedin.com/in/carinactze/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Shannon Aurelia',
    emoji: '🩰',
    color: '#01DACC',
    title: 'Pre-Hackathon Lead',
    social: "https://www.linkedin.com/in/shannon-aurelia-s/"
  },
  {
    img: '/assets/team/Megan.jpg',
    name: 'Megan Ong',
    emoji: '🐳',
    color: '#01DACC',
    title: 'Website ',
    social: "https://www.linkedin.com/in/meganong-/"
  },
  {
    img: '/assets/team/Chohyeon.jpg',
    name: 'Chohyeon Kim',
    emoji: '👻 ',
    color: '#01DACC',
    title: 'Website ',
    social: "https://www.linkedin.com/in/chohyeon-k-586614230/"
  },
  {
    img: '/assets/team/Selin.jpg',
    name: 'Selin Uz',
    emoji: '🕺',
    color: '#01DACC',
    title: 'Website',
    social: "https://www.linkedin.com/in/selin-uz/"
  },
  {
    img: '/assets/team/prajna.jpg',
    name: 'Prajna Nayak',
    emoji: '🍉',
    color: '#01DACC',
    title: 'Website + Swag',
    social: "https://www.linkedin.com/in/prajna-nayak-807b1a247/"
  },
  {
    img: '/assets/team/olivia.jpg',
    name: 'Olivia Lam',
    emoji: '🦖',
    color: '#01DACC',
    title: 'Website',
    social: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BywYhXZUiRuSGfAKJulF3aw%3D%3D"
  },
  {
    img: '/assets/team/Khammy.jpeg',
    name: 'Khammy Saychaleun',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Marketing + Website',
    social: "https://www.linkedin.com/in/khammy-saychaleun-26290817b/"
  },
  {
    img: '/assets/team/Karan.jpg',
    name: 'Karan Chick',
    emoji: '🦦',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/karan-chick/"
  },
  {
    img: '/assets/team/Hannah.jpg',
    name: 'Hannah Meaney',
    emoji: '🤭',
    color: '#01DACC',
    title: 'Workshop + Social Media',
    social: "https://www.linkedin.com/in/hannahmeaney/"
  },
  {
    img: '/assets/team/Kaitlin.jpg',
    name: 'Kaitlin Khu',
    emoji: '😽',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/kaitlinkhu/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Alizah Irfan',
    emoji: '🐤',
    color: '#01DACC',
    title: 'Social Media',
    social: ""
  },
  
  
  {
    img: '/assets/Logo.png',
    name: 'Grace Co',
    emoji: '🤪',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/grace--co/"
  },


  {
    img: '/assets/team/Sarah.jpg',
    name: 'Sarah Wong',
    emoji: '🥰 ',
    color: '#01DACC',
    title: 'Workshop + Swag ',
    social: "https://www.linkedin.com/in/sarah-ashley-wong/"
  },
  {
    img: '/assets/team/Victoria.jpg',
    name: 'Victoria Farkas',
    emoji: '🥸 ',
    color: '#01DACC',
    title: 'Workshop + Swag',
    social: "https://www.linkedin.com/in/victoria-farkas-617262262/"
  },
  {
    img: '/assets/team/Pantea.jpg',
    name: 'Pantea Ghoroori',
    emoji: '🦋 ',
    color: '#01DACC',
    title: 'Swag ',
    social: "https://www.linkedin.com/in/pantea-ghoroori-4a3a66227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    img: '/assets/team/Sonja.jpg',
    name: 'Sonja Deng',
    emoji: '🦭',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/sonja-deng-0a5a79289/"
  },

  
  
  
  {
    img: '/assets/team/Zelalem.jpg',
    name: 'Zelalem Araya',
    emoji: '❣️',
    color: '#01DACC',
    title: 'Workshop',
    social: "https://www.linkedin.com/in/zelalem-araya/"
  },
  
  {
    img: '/assets/team/angelique.jpg',
    name: 'Angelique Clara Hanzell',
    emoji: '🐇',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/angeliqueclara/"
  },
  
  
  {
    img: '/assets/team/fatima.jpg',
    name: 'Fatima Yahya',
    emoji: '👀',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/fatima-yahya-27ba43112/"
  },
  {
    img: '/assets/team/tetiksha.jpg',
    name: 'Tetiksha Jain',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/tetiksha-jain/"
  },
  {
    img: '/assets/team/iris.jpg',
    name: 'Iris Caglayan',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Events',
    social: "https://www.linkedin.com/in/iriscaglayan/"
  },
  {
    img: '/assets/team/Yeojun.jpg',
    name: 'Yeojun Han',
    emoji: '🧸',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/yeojun/"
  },
  {
    img: '/assets/team/Katie.jpg',
    name: 'Katie Kathiresan',
    emoji: '✨',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/katiekathiresan/"
  },
  



  
  
];

const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1920/4320;
  z-index: 0;
  overflow: hidden;

 

  @media (min-width: 768px) {
    aspect-ratio: 1920/3240;
  }

  @media (min-width: 1000px) {
    aspect-ratio: 1920/2160;
  }

  
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/team.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;


`

const page = () => {
  return (
    <BgSectionContainer>
      <Navbar/>
    <BgScroll/>
      <div className='flex items-center justify-center mt-10 lg:mt-20 p-4 md:p-12 lg:p-16 '>
          
          <div className=""></div>


          <div className="grid grid-cols-5 lg:grid-cols-6 gap-4 md:gap-x-12 md:gap-y-2 lg:gap-x-16 lg:gap-y-10">
              {profiles.map((profile) => (
                      <div className=" h-auto max-w-full flex items-center justify-center items-center rounded-lg relative hover:scale-105 transition duration-500" key={profile.name} style={{ flexShrink: 0 }}>
                      <Link href={profile.social} >
                      <img className="h-auto max-w-full rounded-lg" src={profile.img} alt=""/>
                      <div className='flex text-[5px] md:text-[8px] lg:text-sm text-dark-green flex-col justify-center align-center items-center text-center mt-2'>
                        <p className='text-centre justify-center'>{profile.name}{" "}{profile.emoji}</p>
                        <p>{profile.title}</p>
                      </div>
                      </Link>
                      </div>
                  ))}

          </div>
    </div>
    </BgSectionContainer>
    
  )
}

export default page