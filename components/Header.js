import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/wise-way-logo.png"
              alt="Wise Way Logo"
              width={100}
              height={70}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* Contact Info and Social Icons */}
        <div className="flex flex-col md:flex-row gap-4  md:mb-[50px] md:mr-[200px] md:gap-8 items-center">
          {/* Email and Phone */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Mail className="text-emerald-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black">Email Address</h4>
                <p className="text-xs font-bold text-gray-600">
                  hello@wiseway.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
                <Phone className="text-emerald-500 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black">24/7 In Touch</h4>
                <p className="text-xs font-bold text-gray-600">
                  +91 9000023211
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-10 w-[2px] bg-gray-300"></div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { src: "/images/instagram.svg", alt: "Instagram", className: "text-pink-500 hover:text-pink-600" },
              { src: "/images/facebook.svg", alt: "Facebook", className: "text-blue-600 hover:text-blue-700" },
              { src: "/images/linkedin.svg", alt: "LinkedIn", className: "text-blue-700 hover:text-blue-800" },
              { src: "/images/x.svg", alt: "Twitter", className: "text-black hover:text-gray-800" },
            ].map((icon, index) => (
              <Link href="#" key={index} aria-label={icon.alt}>
                <Image src={icon.src} alt={icon.alt} width={40} height={24} className={icon.className} />
              </Link>
            ))}

          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:block absolute mt-[-40px] ml-[180px]">
        <Navbar />
      </div>

      {/* Hero Image with Overlay Text */}
      <div className="relative">
        <div className="w-full h-full md:h-[600px] bg-gray-700 overflow-hidden">
          <Image
            src="/images/graduation-students.jpg"
            alt="Graduating Students"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;