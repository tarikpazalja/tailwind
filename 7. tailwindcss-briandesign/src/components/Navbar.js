import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hook/useDarkMode";
//import { useState, useEffect } from "react";

const Navbar = ({ toggle }) => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white dark:bg-gray-800 dark:text-gray-100 text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        EGG
      </Link>
      <div className="flex justify-items-center">
        <div
          onClick={() => setTheme(colorTheme)}
          className="inline pr-4 md:hidden  cursor-pointer"
        >
          {colorTheme === "light" ? (
            <svg
              className="w-6 h-6 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </div>
        <div className="px-4 md:hidden flex items-center" onClick={toggle}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <div className="pr-8 items-center md:block hidden ">
        <div
          onClick={() => setTheme(colorTheme)}
          className="inline pr-4  cursor-pointer"
        >
          {colorTheme === "light" ? (
            <svg
              className="w-6 h-6 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
        </div>
        <Link to="/" className="pr-4  ">
          Home
        </Link>

        <Link to="/menu" className="pr-4">
          Menu
        </Link>

        <Link to="/about" className="pr-4">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
