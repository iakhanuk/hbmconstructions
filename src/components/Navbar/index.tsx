"use client";
import { SITE_DATA } from "@/data";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const [isScrolledFromTop, setIsScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsScrolledFromTop(true);
      } else {
        setIsScrolledFromTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  , []);


  const handleNavbarToggle = () => {
    setNavbarCollapsed((prev) => !prev);
  };
  return (
    <nav className={`bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600 ${isScrolledFromTop?"bg-opacity-100":"bg-opacity-25"} transition-all  `}>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={SITE_DATA.navbar_logo} className="h-16 rounded-md" alt="Hyde Logo" />
          <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap text-white">
            {SITE_DATA.navbar_title}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleNavbarToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarCollapsed ? "hidden" : ""
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
            {SITE_DATA.nav_links.map((link, index) => (
              <li key={index}>
              <a
                href={link.url}
                className="block py-2 px-3  rounded   md:p-0 md:hover:text-orange-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                {link.name}
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
