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
    <div className="">
      
      <div className={`flex fixed top-0 w-full z-10 ease-in duration-300 bg-opacity-0 justify-between`}>
      <Link href="/" className="ml-5 mt-2 hover:scale-105 transition duration-500">
        <Image src="/assets/Logo.svg" width={70} height={70} alt="YouCode Logo"   />
      </Link>
     
        <div className="sm:hidden flex items-center"> {/* Center the hamburger menu */}
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 14H6v-1h12v1zm-6-4H6V9h6v1zm6-5H6V4h12v1zm0 8H6v-1h12v1z"
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
            isOpen ? "flex flex-col items-end h-screen" : "hidden"
          } justify-end sm:flex flex-col sm:flex-row sm:w-full font-medium text-white gap-2 `}
        >
          <ul className={`flex flex-col  items-end md:flex-row sm:flex text-lg 2xl:text-2xl text-white`}>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/">About</Link>
            </li>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#schedule">Schedule</Link>
            </li>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#resources">Resources</Link>
            </li>
           
           
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#faq">FAQ</Link>
            </li>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#sponsors">Sponsors</Link>
            </li>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="/#contact">Contact</Link>
            </li>
            <li className="p-4 mr-4 hover:bg-primary-darkgreen hover:scale-110 transition duration-500">
              <Link onClick={closeMenu} href="https://www.ubcgirlcode.com/">girlCode</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
