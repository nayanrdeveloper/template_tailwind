import React from "react";
import { LightBulbIcon, CurrencyBangladeshiIcon, DesktopComputerIcon, FlagIcon } from "@heroicons/react/solid";
import { MenuAlt1Icon, LockClosedIcon, ArrowUpIcon } from "@heroicons/react/solid";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
  } from "react-scroll";

export default function Footer() {

    const scrollToTop = () => {
        scroll.scrollToTop()
      }

  return (
    <footer className="bg-blue-800 mt-72">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-16 py-3 px-28 sm:pt-20 text-black my-4 border-b-2 border-white">
        <div className="text-white">
          <p className="uppercase">Solutions</p>
          <ul>
            <li>Marketing</li>
            <li>Analtyics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="text-white">
          <p className="uppercase">Solutions</p>
          <ul>
            <li>Marketing</li>
            <li>Analtyics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="text-white">
          <p className="uppercase">Solutions</p>
          <ul>
            <li>Marketing</li>
            <li>Analtyics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="text-white">
          <p className="uppercase">Solutions</p>
          <ul>
            <li>Marketing</li>
            <li>Analtyics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div className="text-white p-2">
          <p className="uppercase">Subscribe to our Newslatter</p>
          <p className="py-2">
            The latest news, articles and resource, sent to your inbox weekly{" "}
          </p>
          <div className="flex">
            <input type="text" className="w-48 rounded-lg" />
            <button className="py-1 px-3 ml-1">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 mt-3 py-3 px-28">
        <div className="text-indigo-500 p-3 flex justify-start">2022 created by Nayan Radadiya</div>
        <div className="text-indigo-500 p-3 flex justify-end space-x-4">
        <LightBulbIcon className="h-8 w-8 text-lime-600" />
        <CurrencyBangladeshiIcon className="h-8 w-8 text-lime-600" />
        <FlagIcon className="h-8 w-8 text-lime-600" />
        <DesktopComputerIcon className="h-8 w-8 text-lime-600" />
        <ArrowUpIcon onClick={scrollToTop} className="down-up-slider-btn h-5 w-5 text-blue-500 text-center mt-1 ml-2" />
        </div>
      </div>
    </footer>
  );
}
