'use client';
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import ArtistsSection from "@/components/Landing/Sections/ArtistsSection";
import AboutSection from "@/components/Landing/Sections/AboutSection";
import ContactsSection from "@/components/Landing/Sections/ContactsSection";
import LatestReleasesSection from "@/components/Landing/Sections/LatestReleasesSection";
import PlatformsSection from "@/components/Landing/Sections/PlatformsSection";
import AdvantagesSection from "@/components/Landing/Sections/AdvantagesSection";
import MainSection from "@/components/Landing/Sections/MainSection";
import sal from 'sal.js';
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
    sal();

    
  }, [])
  

  return (
    <>
    <Header/>
    <MainSection/>
    <AdvantagesSection/>
    <AboutSection/>
    <LatestReleasesSection/>
    <PlatformsSection/>
    <ArtistsSection/>
    <ContactsSection/>
    <Footer/>
    </>
  )
}
