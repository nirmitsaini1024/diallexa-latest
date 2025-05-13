import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b  from-blue-950 to-[#0149AB] text-white p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <Image src="/logo-diaa.png" alt="Logo" width={128} height={112} />
        <div className="flex gap-4 items-center flex-wrap">
          <p className="text-[#ffd823] font-bold text-2xl">
            Ready to get started?
          </p>
          <Link href="/contact-us" passHref className="cursor-pointer">
            <Button className="bg-blue-800">Let's Talk</Button>
          </Link>
        </div>
      </div>

      <div className="border-t border-b border-gray-600 my-6"></div>

      <div className="text-white py-14 grid grid-cols-1 md:grid-cols-4 gap-10 montserrat-new">
        {/* Let's Connect */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">
            Let&apos;s Connect
          </h3>
          <p className="text-sm mb-4">
            When there are great ideas at stake, it&apos;s always a good idea to
            share. Tell us how we can make it happen for you!
          </p>
          <p className="text-sm">
            Email Us:{" "}
            <span className="text-yellow-400">diallexa@gmail.com</span>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Celebrity Giveaway Sponsorships</li>
            <li>Social Media Management</li>
            <li>Professional Dubbing</li>
            <li>100% Youtube management</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Feedback */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            <span className="text-yellow-400">Fill Out The</span>{" "}
            <span className="text-white">Feedback Form</span>
          </h3>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-6">
        <p>© Diallexa 2025. All Rights Reserved.</p>
        <div className="flex gap-2">
          <Link
            href="/"
            aria-label="LinkedIn"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            aria-label="Twitter"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/bisonbuzz?igsh=emZiY212ZWIwY2hi"
            aria-label="Instagram"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            aria-label="YouTube"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Youtube className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
