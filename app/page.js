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



export default function Home() {
  return (
    <ParallaxProvider>
        <Navbar/>
        <Hero/>
        <Timer/>
        <StatsAndAboutAndTimeLine/>
        <ResourcesAndFaq/>
        <FaqMobile className="md:hidden"/>
        <SponsorsAndTeam/>
     
    </ParallaxProvider>
  )
}


