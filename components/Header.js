"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  // Function to get header title based on current route
  const getHeaderTitle = () => {
    switch(pathname) {
      case '/':
        return 'Welcome to Wise Way';
      case '/about':
        return 'About Us';
      case '/services':
        return 'Our Services';
      case '/universities':
        return 'Explore Top Universities';
      case '/colleges':
        return 'Discover Premier Colleges';
      case '/courses':
        return 'Courses We Offer';
      case '/contact':
        return 'Contact Us';
      default:
        return 'Wise Way Education';
    }
  };

  return (
    <header className="w-full relative">
      {/* Top Bar - Visible on all screens */}
      <div className="items-start bg-white py-3 px-4 md:py-4 md:px-6 lg:px-12 flex flex-col md:flex-row justify-between sm:items-center">
        {/* Logo */}
        <div>
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

        {/* Contact Info */}
        <div className=" hidden sm:flex flex-col md:mr-[100px] lg:mr-[200px] lg:mt-[-40px] sm:flex-row gap-4 md:gap-6 lg:gap-8 items-center">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-16">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Mail className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-black">Email Address</h4>
                <p className="text-xs font-bold text-gray-600">hello@wiseway.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Phone className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-black">24/7 In Touch</h4>
                <p className="text-xs font-bold text-gray-600">+91 9000023211</p>
              </div>
            </div>
          </div>

          {/* Social Icons - Hidden on Mobile */}
          <div className="hidden sm:flex gap-2 md:gap-3">
            {["instagram", "facebook", "linkedin", "x"].map((icon, index) => (
              <Link href="#" key={index} aria-label={icon}>
                <Image
                  src={`/images/${icon}.svg`}
                  alt={icon}
                  width={32}
                  height={20}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className=" absolute mt-[-40px] flex flex-row justify-center w-full">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-700 overflow-hidden">
          <Image
            src="/images/graduation-students.jpg"
            alt="Graduating Students"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-80"
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center">
              {getHeaderTitle()}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;