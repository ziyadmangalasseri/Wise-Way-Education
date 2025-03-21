"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="w-full relative">
      {/* Top Bar - hidden on mobile */}
      <div className="bg-white py-3 px-4 md:py-4 md:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo - positioned at start on mobile */}
        <div className="self-start md:self-auto">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/wise-way-logo.png"
              alt="Wise Way Logo"
              width={100}
              height={70}
              className="h-auto w-[80px] sm:w-[90px] md:w-[100px]"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle - visible only on small screens */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="absolute top-4 right-4 z-50 p-2 bg-emerald-500 rounded-full md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Contact Info and Social Icons - Hidden on mobile */}
        <div className="hidden md:flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 items-center md:mr-4 lg:mr-8 xl:mr-12">
          {/* Email and Phone */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-16">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Mail className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-black">Email Address</h4>
                <p className="text-xs font-bold text-gray-600">
                  hello@wiseway.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Phone className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-black">24/7 In Touch</h4>
                <p className="text-xs font-bold text-gray-600">
                  +91 9000023211
                </p>
              </div>
            </div>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden sm:block h-8 md:h-10 w-[1px] md:w-[2px] bg-gray-300"></div>

          {/* Social Icons */}
          <div className="flex gap-2 md:gap-3">
            {[
              { src: "/images/instagram.svg", alt: "Instagram", className: "text-pink-500 hover:text-pink-600" },
              { src: "/images/facebook.svg", alt: "Facebook", className: "text-blue-600 hover:text-blue-700" },
              { src: "/images/linkedin.svg", alt: "LinkedIn", className: "text-blue-700 hover:text-blue-800" },
              { src: "/images/x.svg", alt: "Twitter", className: "text-black hover:text-gray-800" },
            ].map((icon, index) => (
              <Link href="#" key={index} aria-label={icon.alt}>
                <Image 
                  src={icon.src} 
                  alt={icon.alt} 
                  width={32} 
                  height={20} 
                  className={`${icon.className} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation - Centered on all screens */}
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:block 
        md:absolute 
        w-full 
        md:left-1/2 
        md:transform 
        md:-translate-x-1/2
        md:mt-[-20px] 
        lg:mt-[-30px]
        z-30
        ${isMobileMenuOpen ? 'fixed top-0 left-0 w-full h-full bg-white z-40 pt-16' : ''}
      `}>
        <div className="flex justify-center">
          <Navbar isMenuOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </div>

      {/* Hero Image with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-700 overflow-hidden">
          <Image
            src="/images/graduation-students.jpg"
            alt="Graduating Students"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;