"use client";
import Link from "next/link";
import { useState } from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSmallMenu(false);
  };

  const toggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  }

  const closeSmallMenu = () => {
    setSmallMenu(false);
  };


  return (

    <div>
      <div className={`fixed flex top-0 w-full justify-between z-10 ease-in duration-300 bg-transparent`}>


      <div className="ml-2 md:ml-5 w-10 h-10 md:w-16 md:h-16 relative mt-2">
            <Link href="/" className="ml-5 hover:scale-105 transition duration-500">
              <Image src="/assets/Logo.png" fill
                    alt="YouCode Logo"   />
            </Link>
        </div>

        
        <div className="flex flex-col gap-0">


            <div className="sm:hidden  "> {/* Center the hamburger menu */}
                      <button
                        className="p-2 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                      >
                        <svg
                          className="h-6 w-6 fill-current text-black font-bold"
                          viewBox="0 0 24 24"
                        >
                          {isOpen ? (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z"
                          />
                          ) : (
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3 6h18v1H3V6zm0 5h18v1H3v-1zm0 5h18v1H3v-1z"
                            />
                          )}
                        </svg>
                      </button>
                    </div>

                <div
          className={`${
            isOpen ? "flex flex-col items-end justify-end z-1000  bg-white text-black " : "hidden"
          } sm:flex flex-col sm:flex-row sm:w-full font-medium justify-end  text-dark-green md:text-white gap-1 md:gap-4 mt-4`}
        >

        
          <ul className={`flex flex-col z-1000 md:flex-row justify-end  sm:flex text-[7px] lg:text-lg 2xl:text-2xl text-dark-green md:text-white`}>
          <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/">About</Link>
            </li>
            <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#schedule">Schedule</Link>
            </li>
            <li className="p-2 md:p-4  mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#resources">Resources</Link>
            </li>
           
           
            <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#faq">FAQ</Link>
            </li>
            <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#sponsors">Sponsors</Link>
            </li>
            <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#contact">Contact</Link>
            </li>
            <li className="p-2 md:p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="https://www.ubcgirlcode.com/">girlCode</Link>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;