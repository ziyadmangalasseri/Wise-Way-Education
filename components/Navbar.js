"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`
      bg-white 
      w-full 
      ${isMenuOpen ? "h-full" : ""}
     md:mx-32
      lg:w-[950px] 
      xl:w-[1150px] 
      md:h-[70px] 
      lg:h-[80px] 
      md:rounded-full 
      flex 
      items-center 
      justify-center
      shadow-[0_-5px_10px_rgba(0,0,0,0.2),5px_0_15px_rgba(0,0,0,0.2)] 
      relative 
      z-10
    `}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 lg:px-12">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center justify-center font-bold w-full">
          <ul className="flex flex-col md:flex-row text-base lg:text-lg gap-2 md:gap-3 lg:gap-5 items-center md:items-start">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Universities", path: "/universities" },
              { name: "Colleges", path: "/colleges" },
              { name: "Courses", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-3 md:py-4 px-2 md:px-3 lg:px-4 transition duration-200 relative text-center ${
                    pathname === link.path
                      ? "text-emerald-500 font-extrabold"
                      : "text-gray-800 hover:text-emerald-500"
                  }`}
                  onClick={isMenuOpen ? toggleMenu : undefined}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-500 w-3/4"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Enquire Button */}
        <div className="w-full md:mt-0 md:mb-0 flex justify-center">
          <Link
            href="/enquire"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl lg:text-2xl font-bold py-2 sm:py-2 lg:py-4 px-8  lg:px-8 rounded-full transition duration-300 block text-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
