import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line import/no-named-default
import anime from 'animejs'


const profiles = [
  {
    img: '/assets/team/Sandra-Radic.jpg',
    name: 'Sandra Radic',
    emoji: 'WICS',
    color: '#01DACC',
    title: 'VP External Wics',
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

const ProfileImage = styled.img`
  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${(p) => p.color};
  object-fit: cover;
  margin: 10px 15px;
  transition: all 100ms ease-in-out;
  opacity: 0.69;
  
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
        {
         
        }
        <div style={{ willChange: 'transform' }} id='anim-profiles'>
          {profiles.map((profile) => (
            <a href={profile.social} key={profile.img}>
              <ProfileImage
                src={profile.img}
                color={profile.color}
                onClick={() => setSelectedProfile(profile)}
                onMouseEnter={() => setSelectedProfile(profile)}
                onMouseLeave={() => setSelectedProfile({})}
              />
            </a>
          ))}
          
        </div>
      </ProfileList>
    </>
  )
}