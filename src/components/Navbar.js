import React, {useState} from "react";
import { MenuAlt1Icon, LockClosedIcon } from "@heroicons/react/solid";

export default function Navbar() {
    const [navState, setNavState] = useState(false)

    const handleClick = () => {
        setNavState(!navState);
    }

  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Supports</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
            {navState ? <LockClosedIcon className="h-5 w-5 text-blue-500" /> : <MenuAlt1Icon className="h-5 w-5 text-blue-500" /> }
         
        </div>
      </div>
      <ul className={navState ? 'absolute bg-zinc-200 w-full px-8': 'hidden'}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Supports</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb=4">Sign In</button>
            <button className="px-8 py-3">Sign Out</button>
        </div>
      </ul>
    </div>
  );
}
