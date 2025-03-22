"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic"; // Import dynamic for client-side only modules
import Image from "next/image";

// Dynamically import usePathname from next/navigation
const usePathname = dynamic(() => import("next/navigation").then((mod) => mod.usePathname), { ssr: false });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Universities", path: "/universities" },
    { name: "Colleges", path: "/colleges" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ], []);

  return (
    <div>
      {/* Mobile & Tablet Menu Button */}
      <button
        onClick={toggleMenu}
        className={`xl:hidden fixed top-4 right-4 z-50 p-3 mt-3 mr-3 bg-emerald-500 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95 ${
          isMenuOpen ? "rotate-90" : "rotate-0"
        }`}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Navigation */}
      <nav className="bg-white w-full xl:w-[1150px] xl:h-[80px] xl:rounded-full items-center shadow-[0_-5px_10px_rgba(0,0,0,0.2),5px_0_15px_rgba(0,0,0,0.2)] relative z-10 hidden xl:flex">
        <div className="hidden mx-auto lg:flex flex-col md:flex-row md:ml-16 items-center justify-between w-full px-4">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center font-bold w-full">
            <ul className="flex flex-col md:flex-row text-lg lg:gap-5 w-full">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`block py-4 px-4 transition duration-200 relative ${
                      pathname === link.path ? "text-emerald-500 font-extrabold" : "text-gray-800 hover:text-emerald-500"
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-500 w-2/4"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enquire Button */}
          <div className="w-full md:w-auto">
            <Link href="/enquire" className="bg-emerald-500 md:w-[200px] hover:bg-emerald-600 text-white text-2xl font-bold py-4 md:py-6 md:ml-[30px] rounded-full transition duration-300 block text-center">
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Sidebar Menu */}
      <div className={`fixed inset-0 bg-white shadow-xl z-50 flex flex-col w-4/5 max-w-xs h-full px-4 py-3 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-2 mb-10">
          <Image src="/images/wise-way-logo.png" alt="Logo" width={80} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mt-[-40px]">
          <ul className="flex flex-col space-y-4 items-center text-lg">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative block py-2 transition duration-200 text-center ${
                    pathname === link.path ? "text-emerald-500 font-extrabold" : "text-gray-800 hover:text-emerald-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-500 w-3/4"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Enquire Now Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/enquire"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-center text-gray-600 text-lg mt-10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
