// components/Header.jsx
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react"; // Import Lucide icons
import Navbar from "./Navbar.js";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 ml-2 md:mb-0">
          <Link href="/">
            <Image
              src="/images/wise-way-logo.png"
              alt="Wise Way Logo"
              width={100}
              height={70}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Contact Info and Social Icons */}
        <div className="flex flex-col mr-[200px] mb-14 md:flex-row gap-4 md:gap-8 items-center">
          {/* Email */}
          <div className="flex items-center gap-16">
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
            {/* Phone */}
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

          <div className="h-10 w-[2px] bg-gray-300"></div>
          {/* Social Icons */}
          <div className="flex gap-3 ml-0 md:ml-6">
            <Link href="#" className="text-pink-500 hover:text-pink-600">
              <Image
                src="/images/instagram.svg"
                alt="Instagram"
                width={40}
                height={24}
              />
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <Image
                src="/images/facebook.svg"
                alt="Facebook"
                width={40}
                height={24}
              />
            </Link>
            <Link href="#" className="text-blue-700 hover:text-blue-800">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={24}
              />
            </Link>
            <Link href="#" className="text-black hover:text-gray-800">
              <Image src="/images/x.svg" alt="Twitter" width={40} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute mt-[-40px] ml-[180px] flex flex-row justify-center">
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
