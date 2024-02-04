import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import Sponsors from '../components/Sponsors';
import Footer from '@/components/Footer';
import TeamCarousel from '@/components/TeamCarousel';


const InfoContainer = styled.div`
  background: #150C27;
  position: relative;
  width: 100%;
  aspect-ratio: 1920/1080;

  z-index: 10;
  overflow: hidden;

  
  
  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/Sponsors.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

`


const SponsorsAndTeam = () => {
  return (
    <InfoContainer>
      <BgScroll>
        <Sponsors/>
        
        <Footer/>
      </BgScroll>
    </InfoContainer>
  )
}

export default SponsorsAndTeam;