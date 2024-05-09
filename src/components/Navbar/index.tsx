"use client";
import { SITE_DATA } from "@/data";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;


      setIsScrolledDown(offset > 200);

   
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarCollapsed((prev) => !prev);
  };
  return (
    <nav
      className={`bg-base fixed w-full z-20 top-0 start-0 border-b  border-primary ${
        isScrolledDown || !navbarCollapsed ? "bg-opacity-100" : "bg-opacity-25"
      }  transition-all   `}
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={SITE_DATA.navbar_logo}
            className="h-12 md:h-16 rounded-md"
            alt="Hyde Logo"
          />
          <span className="hidden lg:block self-center text-2xl font-semibold whitespace-nowrap text-white">
            {SITE_DATA.navbar_title}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleNavbarToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-primary hover:text-white transition-all"
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
                stroke="#ccc"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-base md:bg-transparent transition-all  ">
            {SITE_DATA.nav_links.map((link, index) => (
              <li key={index}>
                <a
                onClick={handleNavbarToggle}
                  href={link.url}
                  className="block py-2 px-3  rounded   md:p-0 md:hover:text-primary text-white hover:bg-primary hover:text-white md:hover:bg-transparent transition-all"
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
