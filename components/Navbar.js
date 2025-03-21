"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-emerald-500 rounded-full"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
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

      {/* Navigation */}
      <nav
        className={`bg-white w-full md:w-[1150px] md:h-[80px] md:rounded-full flex items-center shadow-[0_-5px_10px_rgba(0,0,0,0.2),5px_0_15px_rgba(0,0,0,0.2)] relative z-10 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="mx-auto flex flex-col md:flex-row md:ml-16 items-center justify-between w-full px-4">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center font-bold w-full">
            <ul className="flex flex-col md:flex-row text-lg gap-5 w-full">
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
                    className={`block py-4 px-4 transition duration-200 relative ${
                      pathname === link.path
                        ? "text-emerald-500 font-extrabold"
                        : "text-gray-800 hover:text-emerald-500"
                    }`}
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
          <div className="w-full md:w-auto">
            <Link
              href="/enquire"
              className="bg-emerald-500 md:w-[200px] hover:bg-emerald-600 text-white text-2xl font-bold py-4 md:py-6  md:px- md:ml-[30px] rounded-full transition duration-300 block text-center"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;