"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '@/sections/Hero';
import Timer from '@/sections/Timer';
import StatsAndAbout from '@/sections/StatsAndAbout';
import TimeLineAndResources from '@/sections/TimeLineAndResources';
import SponsorsAndTeam from '@/sections/SponsorsAndTeam';


export default function Home() {
  return (
    <ParallaxProvider>
     
       
        <Hero/>
        <Timer/>
        <StatsAndAbout/>
        <TimeLineAndResources/>
        <SponsorsAndTeam/>
        
        
     
    </ParallaxProvider>
  )
}
