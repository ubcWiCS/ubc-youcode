import Resources from '@/components/Resources';
import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import Faq from '@/components/faq';

const InfoContainer = styled.div`
  background: #150C27;
  position: relative;
  width: 100%;
  min-height: 100vh; 
  z-index: 10;
  overflow: visible; 
  
  
`
const BgScroll = styled(SectionContainer)`

  background: url('assets/backgrounds/4.png');
  background-size: 100vw;

  background-repeat: no-repeat;
  background-position: center;
  
  position: relative;
  
  width: 100%;
  
  min-height: 100vh;
  z-index: 0;
`
;


const ResourcesAndFaq = () => {
  return (
    <InfoContainer>
      <BgScroll>
        <Resources/>
        <Faq/>
      </BgScroll>
    </InfoContainer>
  )
}

export default ResourcesAndFaq;