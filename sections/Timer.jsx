import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { SectionContainer } from '../components/SectionContainer';
import TimeLine from '@/components/TimeLine';

const InfoContainer = styled.div`
  background: #150C27;
  position: relative;
  width: 100%;
  aspect-ratio: 1920/1080;

  z-index: 10;
  overflow: hidden;


  
  
`
const BgScroll = styled(SectionContainer)`
  background: url('assets/TimeLine.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;


`



const BodyContainer = styled.div`
  
  position:relative;
  
 
`



const Timer = () => {
  return (
    //<InfoContainer>
      //<BgScroll />
      <BodyContainer className='flex flex-col items-center justify-center z-10'>
        
      <TimeLine/>
      
      
        
      </BodyContainer>
      
      
    //</InfoContainer>
  )
}

export default Timer