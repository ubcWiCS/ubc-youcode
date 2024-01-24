import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import Image from 'next/image';
import Link from 'next/link';
import Register from '@/components/Register';
import TimeLine from '@/components/TimeLine';
import Timer from './Timer';
import Countdown from '@/components/Countdown/Countdown';



const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1920/1080;
  z-index: 0;
  overflow: hidden;

  
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/heroBackground.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;
  
  position: absolute;
  top: 0;
  z-index: 1;
  

`


const BodyContainer = styled.div`
  
  margin-top: 13rem;
  position:relative;

  @media (max-width: 767px) {
    margin-top: 3rem;
  }
  
 
`


const Hero = () => {
  return (
    <BgSectionContainer>
      <BgScroll />
      <BodyContainer className='flex  items-center justify-center z-10'>
        <Countdown className="w-1/2"/>
        <Register />
      </BodyContainer>
     
    </BgSectionContainer>
  )
}

export default Hero