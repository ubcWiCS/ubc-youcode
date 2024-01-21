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
  aspect-ratio: 1920/1080;

  z-index: 10;
  overflow: hidden;



  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/TimeLineAndResources.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 0;


`

const BodyContainer = styled.div`
  margin-top: 0rem;
  position:relative;
  margin-left: 2rem;
  margin-right: 2rem;
  
 
`


const ResourcesAndFaq = () => {
  return (
    <InfoContainer>
      <BgScroll />
      <BodyContainer>
        <Resources/>
        <Faq/>
      </BodyContainer>
    </InfoContainer>
  )
}

export default ResourcesAndFaq;