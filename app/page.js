"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '@/sections/Hero';
import Timeline from '@/sections/Timeline';
import StatsAndAbout from '@/sections/StatsAndAbout';
import ResourcesAndFaq from '@/sections/ResourcesAndFaq';
import SponsorsAndTeam from '@/sections/SponsorsAndTeam';



export default function Home() {
  return (
    <ParallaxProvider>
        <Navbar/>
        <Hero/>
        <Timeline/>
        <StatsAndAbout/>
        <ResourcesAndFaq/>
        <SponsorsAndTeam/>
     
    </ParallaxProvider>
  )
}


