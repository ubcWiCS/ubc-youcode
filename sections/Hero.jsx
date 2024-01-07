import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import Register from '@/components/Register';


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
  
  
  }
`

const Hero = () => {
  return (
    <BgSectionContainer>
      <BgScroll />
      <Register/>
    </BgSectionContainer>
  )
}

export default Hero