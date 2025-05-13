"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";

const Navbar = ({ mainRef }: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation
    gsap.to("#twogoodlogo", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: mainRef.current,
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });

    gsap.to("#links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: mainRef.current,
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }, [mainRef]);

  return (
    <>
      <div
        id="nav"
        className="fixed w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent h-24"
      >
        <div id="nav-part1" className="w-60 flex items-center">
          <Image
            id="twogoodlogo"
            src="/logo-diaa.png"
            alt="DIAA LEXA Logo"
            width={250}
            height={80}
            className="block w-full pt-4 h-auto max-w-none"
          />
        </div>
        <div
          id="nav-part2"
          className="flex items-center justify-end gap-10 ml-auto w-4/5"
        >
          {/* Desktop links - hidden on mobile */}
          <div id="links" className="p-2.5 hidden md:flex">
            <a
              href="#"
              className="uppercase no-underline text-white font-medium text-sm mx-4 whitespace-nowrap transition-colors duration-300 hover:text-gray-200"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="uppercase no-underline text-white font-medium text-sm mx-4 whitespace-nowrap transition-colors duration-300 hover:text-gray-200"
            >
              INDUSTRIES
            </a>
            <a
              href="#"
              className="uppercase no-underline text-white font-medium text-sm mx-4 whitespace-nowrap transition-colors duration-300 hover:text-gray-200"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="uppercase no-underline text-white font-medium text-sm mx-4 whitespace-nowrap transition-colors duration-300 hover:text-gray-200"
            >
              TALK TO US
            </a>
            <a
              href="#"
              className="uppercase no-underline text-white font-medium text-sm mx-4 whitespace-nowrap transition-colors duration-300 hover:text-gray-200"
            >
              CAREERS
            </a>
          </div>
          <div
            id="icons"
            className="p-2.5 rounded-full bg-black border-2 border-white cursor-pointer block md:hidden"
            onClick={toggleMobileMenu}
          >
            <AlignJustify color="white" />{" "}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-[60] flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 border-2 border-white/40 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <X color="white" />{" "}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <a
            href="#"
            className="uppercase no-underline text-white font-medium text-xl transition-colors duration-300 hover:text-gray-200"
            onClick={toggleMobileMenu}
          >
            SERVICES
          </a>
          <a
            href="#"
            className="uppercase no-underline text-white font-medium text-xl transition-colors duration-300 hover:text-gray-200"
            onClick={toggleMobileMenu}
          >
            INDUSTRIES
          </a>
          <a
            href="#"
            className="uppercase no-underline text-white font-medium text-xl transition-colors duration-300 hover:text-gray-200"
            onClick={toggleMobileMenu}
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="uppercase no-underline text-white font-medium text-xl transition-colors duration-300 hover:text-gray-200"
            onClick={toggleMobileMenu}
          >
            TALK TO US
          </a>
          <a
            href="#"
            className="uppercase no-underline text-white font-medium text-xl transition-colors duration-300 hover:text-gray-200"
            onClick={toggleMobileMenu}
          >
            CAREERS
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
