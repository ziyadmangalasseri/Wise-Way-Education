"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current path

const Navbar = () => {
  const pathname = usePathname(); // Get the active page

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white w-[1150px] h-[80px] rounded-full flex items-center shadow-[0_-5px_10px_rgba(0,0,0,0.2),5px_0_15px_rgba(0,0,0,0.2)] relative z-10">
        <div className="mx-auto flex flex-row ml-16 items-center justify-between w-full px-">
          {/* Navigation Links */}
          <div className="flex items-center font-bold">
            <ul className="flex text-lg gap-5">
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
          <div>
            <Link
              href="/enquire"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-extrabold py-6 px-6 rounded-full transition duration-300"
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