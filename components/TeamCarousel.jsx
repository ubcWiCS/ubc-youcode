

import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-default
import anime from 'animejs'
import Image from 'next/image';
import Link from 'next/link';


const profiles = [
  {
    img: '/assets/team/Sandra-Radic.jpg',
    name: 'Sandra Radic',
    emoji: '☀️ ',
    color: '#01DACC',
    title: 'Founder & Co-Lead',
    social: "https://www.linkedin.com/in/sandraradic/"
  },
  {
    img: '/assets/team/Arden_Choi.jpg',
    name: 'Arden Choi',
    emoji: '🫵 ',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/ardenchoi/"
  },
  {
    img: '/assets/team/Tara_Ubovic.jpeg',
    name: 'Tara Ubovic',
    emoji: '🐸',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/tara-ubovic/"
  },
  {
    img: '/assets/team/Moira.jpeg',
    name: 'Moira Renata',
    emoji: '🏝️',
    color: '#01DACC',
    title: 'Co-Lead',
    social: "https://www.linkedin.com/in/moira-renata/"
  },
  {
    img: '/assets/team/karan.png',
    name: 'Karan Chick',
    emoji: '🦦',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/karan-chick/"
  },
  {
    img: '/assets/team/Katie.jpeg',
    name: 'Katie Kathiresan',
    emoji: '✨',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/katiekathiresan/"
  },
  {
    img: '/assets/team/Tanya.png',
    name: 'Tanya',
    emoji: '🫧',
    color: '#01DACC',
    title: 'Website Team Lead',
    social: "https://www.linkedin.com/in/tanya-75a03a254/"
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
    img: '/assets/team/Carina-Tze.jpg',
    name: 'Carina Tze',
    emoji: '🫶🏻',
    color: '#01DACC',
    title: 'Workshop + swag committee',
    social: "https://www.linkedin.com/in/carinactze/"
  },
  {
    img: '/assets/team/Hannah.jpeg',
    name: 'Hannah Meaney',
    emoji: '🤭',
    color: '#01DACC',
    title: 'Workshop + Social Media',
    social: "https://www.linkedin.com/in/hannahmeaney/"
  },
  {
    img: '/assets/team/Megan.jpeg',
    name: '🐳',
    emoji: 'WICS',
    color: '#01DACC',
    title: 'Website Team',
    social: "https://www.linkedin.com/in/hannahmeaney/"
  },
  {
    img: '/assets/team/Sarah.jpeg',
    name: 'Sarah Wong',
    emoji: '🥰 ',
    color: '#01DACC',
    title: 'Workshop + Swag ',
    social: "https://www.linkedin.com/in/sarah-ashley-wong/"
  },
  {
    img: '/assets/team/Victoria.png',
    name: 'Victoria Farkas',
    emoji: '🥸 ',
    color: '#01DACC',
    title: 'Workshop + Swag',
    social: "https://www.linkedin.com/in/victoria-farkas-617262262/"
  },
  {
    img: '/assets/team/Pantea.jpeg',
    name: 'Pantea Ghoroori',
    emoji: '🦋 ',
    color: '#01DACC',
    title: 'Swag Committee',
    social: "https://www.linkedin.com/in/pantea-ghoroori-4a3a66227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },

  {
    img: '/assets/team/ChohyeonKim.png',
    name: 'Chohyeon Kim',
    emoji: '👻 ',
    color: '#01DACC',
    title: 'Website Team',
    social: "https://www.linkedin.com/in/chohyeon-k-586614230/"
  },
  
  {
    img: '/assets/team/Yeojun-Han.jpg',
    name: 'Yeojun Han',
    emoji: '🧸',
    color: '#01DACC',
    title: 'Finance',
    social: "https://www.linkedin.com/in/yeojun/"
  },

  {
    img: '/assets/team/Kaitlin.png',
    name: 'Kaitlin Khu',
    emoji: '😽',
    color: '#01DACC',
    title: 'Social Media',
    social: "https://www.linkedin.com/in/kaitlinkhu/"
  },

  {
    img: '/assets/team/Selin-Uz.jpeg',
    name: 'Selin Uz',
    emoji: '🕺',
    color: '#01DACC',
    title: 'Website Team',
    social: ""
  },
  {
    img: '/assets/team/zelalem.png',
    name: 'Zelalem Araya',
    emoji: '❣️',
    color: '#01DACC',
    title: 'Workshop',
    social: "https://www.linkedin.com/in/zelalem-araya/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Shannon Aurelia',
    emoji: '🩰',
    color: '#01DACC',
    title: 'Workshop',
    social: "https://www.linkedin.com/in/shannon-aurelia-s/"
  },
  {
    img: '/assets/team/angelique.jpeg',
    name: 'Angelique Clara Hanzell',
    emoji: '🐇',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/angeliqueclara/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Alizah Irfan',
    emoji: '🐤',
    color: '#01DACC',
    title: 'Marketing',
    social: ""
  },
  {
    img: '/assets/team/prajna.png',
    name: 'Prajna Nayak',
    emoji: '🍉',
    color: '#01DACC',
    title: 'Website + Swag',
    social: "https://www.linkedin.com/in/prajna-nayak-807b1a247/"
  },
  {
    img: '/assets/team/olivia.jpeg',
    name: 'Olivia Lam',
    emoji: '🦖',
    color: '#01DACC',
    title: 'Website',
    social: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BywYhXZUiRuSGfAKJulF3aw%3D%3D"
  },
  {
    img: '/assets/team/fatima.jpeg',
    name: 'Fatima Yahya',
    emoji: '👀',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/fatima-yahya-27ba43112/"
  },
  {
    img: '/assets/team/tetiksha.png',
    name: 'Tetiksha Jain',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Outreach',
    social: "https://www.linkedin.com/in/tetiksha-jain/"
  },
  {
    img: '/assets/team/iris.jpeg',
    name: 'Iris Caglayan',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Events',
    social: "https://www.linkedin.com/in/iriscaglayan/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Khammy Saychaleun',
    emoji: '🦄',
    color: '#01DACC',
    title: 'Marketing + Website',
    social: "https://www.linkedin.com/in/khammy-saychaleun-26290817b/"
  },
  {
    img: '/assets/Logo.png',
    name: 'Sonja Deng',
    emoji: '🦭',
    color: '#01DACC',
    title: 'Swag',
    social: "https://www.linkedin.com/in/sonja-deng-0a5a79289/"
  },


  
  
];

const Header3 = styled.h3`

`

const StyledTitle = styled(Header3)`
  margin-top: 1em;
  color: #E2D6FF;
  filter: drop-shadow(0 0 4px #E2D6FF);

 
  }
`

const ProfileContent = styled.p`
  color: white;
  span {
    margin-right: 8px;
  }
  
  
  b {
    margin-right: 8px;
  }
`

const ProfileList = styled.div`
  // overflow-x: hidden;
  // white-space: nowrap;
`



let lastTime = -1
let accumulateTime = -1
const MAX_SPEED = 2

export default function Team() {
  const [animator, setAnimator] = useState()
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [accel, setAccel] = useState(1)
  const requestRef = useRef()

  // https://codesandbox.io/s/anime-js-speed-adjustment-lm0ui?file=/src/index.js:158-166
  // https://animejs.com/documentation/#tick
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const animate = (animatorP, accelP, velocity, t) => {
    let vel
    if (accumulateTime === -1) {
      accumulateTime = t
    } else {
      const deltaT = t - lastTime
      vel = velocity + 0.1 * accelP
      vel = Math.max(0, vel)
      vel = Math.min(MAX_SPEED, vel)
      accumulateTime += deltaT * vel
    }
    lastTime = t


    animator.tick(accumulateTime)
    requestRef.current = window.requestAnimationFrame((tP) =>
      animate(animatorP, accelP, vel || velocity, tP)
    )
  }

  useEffect(() => {
    if (animator) {
      const vel = accel === 1 ? 0 : MAX_SPEED
      requestRef.current = window.requestAnimationFrame((t) =>
        animate(animator, accel, vel, t)
      )
    }
    // Cleanup animation frame listener
    return () => window.cancelAnimationFrame(requestRef.current)
  }, [animator, accel])

  useEffect(() => {
    setAnimator(
      anime({
        targets: ['#anim-profiles'],
        easing: 'linear',
        loop: true,
        translateX: [-(90 * profiles.length), 0],
        duration: 3000 * profiles.length,
        autoplay: false
      })
    )
  }, [setAnimator])

  return (
    <div className=''>
      <div className="w-full text-center mt-2 md:mt-7 lg:mt-20 flex items-center justify-center">
  
    <span className="text-[5px] md:text-lg text-[#C7444D] font-normal">
      <b className="mr-2">{selectedProfile?.name}</b> {selectedProfile?.emoji} {'\u00A0'}
    </span>
    <span className="text-[5px] md:text-sm lg:text-lg text-[#C7444D] font-bold">
      {selectedProfile?.title}
    </span>
  
</div>

      <ProfileList
        onMouseEnter={() => {
          setAccel(-1)
        }}
        onMouseLeave={() => {
          setAccel(1)
        }}
      >
        
        <div style={{ willChange: 'transform' }} className="flex flex-row md:mt-5 gap-[2px] md:gap-[5px] lg:gap-3  " id='anim-profiles'>
          {profiles.map((profile) => (
            <div className=" w-4 h-4 md:w-7 md:h-7 lg:w-20 lg:h-20 relative " key={profile.name} style={{ flexShrink: 0 }}>
              <Link href={profile.social} >
                <Image
                  className='rounded-sm md:rounded-lg  transform transition-transform hover:scale-115'
                  fill
                  src={profile.img}
                  onClick={() => setSelectedProfile(profile)}
                  onMouseEnter={() => setSelectedProfile(profile)}
                  onMouseLeave={() => setSelectedProfile({})}
                />
              </Link>
            </div>
          ))}
          
        </div>
      </ProfileList>
    </div>
  )
}