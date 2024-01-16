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
    emoji: 'WICS',
    color: '#01DACC',
    title: 'VP External Wics',
    social: ""
  },
  {
    img: '/assets/team/Carina-Tze.jpg',
    name: 'Carina Tze',
    emoji: 'WICS',
    color: '#01DACC',
    title: 'President',
    social: ""
  },
  {
    img: '/assets/team/Selin-Uz.jpeg',
    name: 'Selin Uz',
    emoji: 'WICS',
    color: '#01DACC',
    title: '',
    social: ""
  },

  {
    img: '/assets/team/Trisha-Sia.jpeg',
    name: 'Trisha Sia',
    emoji: 'WICS',
    color: '#01DACC',
    title: '',
    social: ""
  },
  {
    img: '/assets/team/Yeojun-Han.jpg',
    name: 'Yeojun Han',
    emoji: 'WICS',
    color: '#01DACC',
    title: '',
    social: ""
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
  height: 1em;
  b {
    margin-right: 8px;
  }
`

const ProfileList = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
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
      vel = velocity + 0.05 * accelP
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
    <>
      
      <ProfileContent>
        <span>
          <b>{selectedProfile?.name}</b> {selectedProfile?.emoji}
        </span>{' '}
        {selectedProfile?.title}
      </ProfileContent>
      <ProfileList
        onMouseEnter={() => {
          setAccel(-1)
        }}
        onMouseLeave={() => {
          setAccel(1)
        }}
      >
        
        <div style={{ willChange: 'transform' }} className="flex flex-row" id='anim-profiles'>
          {profiles.map((profile) => (
            <Link href={profile.social} key={profile.img}>
              <Image
                className='rounded-lg  mx-5 transform transition-transform hover:scale-115'
                width={100}
                height={100}
                src={profile.img}
                onClick={() => setSelectedProfile(profile)}
                onMouseEnter={() => setSelectedProfile(profile)}
                onMouseLeave={() => setSelectedProfile({})}
              />
            </Link>
          ))}
          
        </div>
      </ProfileList>
    </>
  )
}