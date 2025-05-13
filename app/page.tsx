"use client";

import { useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroGeometric from "../components/kokonutui/hero-geometric";
import ContactComponent from "@/components/contact-component";
import Footer from "@/components/footer";
import { GlobeDemo } from "@/components/globee";

export default function Page() {
  // Create a ref for the main container
  const mainRef = useRef(null);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" ref={mainRef}>
      {/* Explicitly place the navbar first in the DOM order */}
      <Navbar mainRef={mainRef} />
      
      {/* Add id="page1" to the hero section for the GSAP trigger */}
      <div id="page1" className="w-full min-h-screen">
        <HeroGeometric 
          badge="DIALLEXA"
          title1="Your Language" 
          title2="Our Expertise"
        />
      </div>
      <GlobeDemo />
      <ContactComponent />
      <Footer />
    </div>
  );
}