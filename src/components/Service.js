import React from "react";
import teamImage from "../assets/jason-goodma.jpg";
import {
  CloudIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";

export default function Service() {
  return (
    <div className="w-full h-screen mt-24" id="support">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={teamImage}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="flex flex-col justify-center text-center px-16 py-16">
          <p className="text-slate-300 uppercase text-center  text-3xl">
            Support
          </p>
          <p className="text-indigo-400 font-bold py-6 text-center text-5xl">
            Finding the right team
          </p>
          <p className="text-slate-300 text-3xl py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galle
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CloudIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex item-center text-indigo-600">
                  Contact Us{" "}
                  <ArrowRightIcon className="h-5 w-5 text-blue-500" />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CloudIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex item-center text-indigo-600">
                  Contact Us{" "}
                  <ArrowRightIcon className="h-5 w-5 text-blue-500" />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CloudIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex item-center text-indigo-600">
                  Contact Us{" "}
                  <ArrowRightIcon className="h-5 w-5 text-blue-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex px-36">
          <div className="flex flex-col text-left px-10 py-10 shadow-lg my-5 mx-3">
            <p className="font-bold">Sales</p>
            <p className="text-slate-400 py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <p className="flex bg-indigo-100 text-left py-2 px-2">
              Contact Us <ArrowRightIcon className="h-5 w-5 text-blue-500" />
            </p>
          </div>
          <div className="flex flex-col text-left px-10 py-10 shadow-lg my-5 mx-3">
            <p className="font-bold">Sales</p>
            <p className="text-slate-400 py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <p className="flex bg-indigo-100 text-left py-2 px-2">
              Contact Us <ArrowRightIcon className="h-5 w-5 text-blue-500" />
            </p>
          </div>
          <div className="flex flex-col text-left px-10 py-10 shadow-lg my-5 mx-3">
            <p className="font-bold">Sales</p>
            <p className="text-slate-400 py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <p className="flex bg-indigo-100 text-left py-2 px-2">
              Contact Us <ArrowRightIcon className="h-5 w-5 text-blue-500" />
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
