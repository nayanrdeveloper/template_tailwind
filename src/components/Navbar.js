import React, { useState } from "react";
import { MenuAlt1Icon, LockClosedIcon, ArrowDownIcon } from "@heroicons/react/solid";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  const handleClick = () => {
    setNavState(!navState);
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom()
  }

  return (
    <div
      className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg"
      id="home"
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex navbar-list">
            <li className="cursor-pointer hover:bg-violet-600">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="support"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                Supports
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                Platforms
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
          <ArrowDownIcon onClick={scrollToBottom} className="down-up-slider-btn h-5 w-5 text-blue-500 text-center mt-4 ml-2" />
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {navState ? (
            <LockClosedIcon className="h-5 w-5 text-blue-500" />
          ) : (
            <MenuAlt1Icon className="h-5 w-5 text-blue-500" />
          )}
        </div>
      </div>
      <ul className={navState ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Supports</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb=4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
        </div>
      </ul>
    </div>
  );
}
