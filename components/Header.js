// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="">
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
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
              <Image src="" alt="Email" width={20} height={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold">Email Address</h4>
              <p className="text-xs text-gray-600">hello@wiseway.com</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-gray-50">
              <Image src="" alt="Phone" width={20} height={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold">24/7 In Touch</h4>
              <p className="text-xs text-gray-600">+91 9000023211</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3 ml-0 md:ml-6">
            <Link href="#" className="text-pink-500 hover:text-pink-600">
              <Image src="" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              <Image src="" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="text-blue-700 hover:text-blue-800">
              <Image src="" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" className="text-black hover:text-gray-800">
              <Image src="" alt="Twitter" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-white shadow-md relative z-10">
        <div className="mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center">
            <ul className="flex text-base">
              <li>
                <Link href="" className="block py-4 px-4 text-emerald-500 font-medium border-b-2 border-emerald-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/universities" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  Colleges
                </Link>
              </li>
              <li>
                <Link href="/courses" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-4 px-4 text-gray-800 hover:text-emerald-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Enquire Button */}
          <Link href="/enquire" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-full">
            Enquire Now
          </Link>
        </div>
      </nav>
      
      {/* Hero Image with Overlay Text */}
      <div className="relative">
        <div className="w-full h-full md:h-[600px] bg-gray-700 overflow-hidden">
          <Image 
            src="/images/graduation-students.jpg" 
            alt="Graduating Students" 
            layout="fill"
            objectFit="cover"
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