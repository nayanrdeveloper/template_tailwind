import React from "react";
import DigitalImage from "../assets/pakata.jpg";
import { CloudIcon, DatabaseIcon, CashIcon, ArrowNarrowUpIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-4">
          <p className="text-4xl py-5">Unique Sequcing and Production</p>
          <p className="py-3 text-5xl md:text-7xl font-bold">Cloud Managment</p>
          <p className="text-2xl py-5">This is a our tech branded</p>
          <button className="py-3 px-8">Get Started</button>
        </div>
        <div className="">
          <img src={DigitalImage} alt="" className="h-96 w-screen" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500"><CloudIcon className="h-5 w-5 text-indigo-600" /> Icon App Security</p>
            <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-5 w-5 text-indigo-600" /> Icon App Security</p>
            <p className="flex px-4 py-2 text-slate-500"><CashIcon className="h-5 w-5 text-indigo-600" /> Icon App Security</p>
            <p className="flex px-4 py-2 text-slate-500"><ArrowNarrowUpIcon className="h-5 w-5 text-indigo-600" /> Icon App Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}
