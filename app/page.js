"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '@/sections/Hero';
import Timer from '@/sections/Timer';
import StatsAndAboutAndTimeLine from '@/sections/StatsAndAboutAndTimeLine';
import ResourcesAndFaq from '@/sections/ResourcesAndFaq';
import SponsorsAndTeam from '@/sections/SponsorsAndTeam';
import FaqMobile from '@/sections/FaqMobile';
import { SectionContainer } from '@/components/SectionContainer';
import styled from 'styled-components';

const BgSectionContainer = styled(SectionContainer)`
  background: #150C27;
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center top;
  
  position: relative;
  width: 100%;
  aspect-ratio: 1920/6880;
  z-index: 0;
  overflow: hidden;

 
  @media (min-width: 268px) {
    aspect-ratio: 1920/7780;
  }

  @media (min-width: 390px) {
    aspect-ratio: 1920/6980;
  }

  @media (min-width: 768px) {
    aspect-ratio: 1920/6780;
  }

  @media (min-width: 868px) {
    aspect-ratio: 1920/6480;
  }

  @media (min-width: 1000px) {
    aspect-ratio: 1920/6880;
  }

  @media (min-width: 1800px) {
    //aspect-ratio: 1920/6480;
    width: 1980px;
    height:6480px;
    margin:auto;

    justify:center;
    align:center;

  }

  @media (min-width: 2800px) {
    //aspect-ratio: 1920/6480;
    width: 1580px;
    height:5480px;
    margin:auto;

    justify:center;
    align:center;

  }

  
  }
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/BgFull2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;


`

export default function Home() {
  return (
    <BgSectionContainer>
      <BgScroll/>
    <ParallaxProvider>
        <Navbar/>
        <Hero/>
        <Timer/>
        <StatsAndAboutAndTimeLine/>
        <ResourcesAndFaq/>
        <FaqMobile className="md:hidden"/>
        <SponsorsAndTeam/>
     
    </ParallaxProvider>
    </BgSectionContainer>
  )
}


