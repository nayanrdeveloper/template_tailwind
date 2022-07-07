import React from "react";
import blueBackground from "../assets/blue_background.jpg";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Pricing() {
  return (
    <div className="w-full h-screen mt-1" id="pricing">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={blueBackground}
          className="w-full h-full object-cover mix-blend-overlay"
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="flex flex-col text-center pt-3">
          <h3 className="uppercase text-4xl text-slate-500 ">Pricing</h3>
          <p className="font-bold text-3xl text-white py-4">
            The Righr Price for your research.
          </p>
          <p className="text-indigo-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black my-4">
          <div className="bg-white rounded-lg flex flex-col p-6 shadow-lg">
            <span className="bg-blue-600 uppercase py-2 px-2 rounded-lg">
              Standard
            </span>
            <p className="font-bold text-5xl py-2">
              $49<span className="text-2xl">/mo</span>
            </p>
            <p className="py-2 text-indigo-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <ul className="list-none text-indigo-500">
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
            </ul>
            <button className="py-3">Get Started</button>
          </div>
          <div className="bg-white rounded-lg flex flex-col p-6 shadow-lg">
            <span className="bg-blue-600 uppercase py-2 px-2 rounded-lg">
              Standard
            </span>
            <p className="font-bold text-5xl py-2">
              $49<span className="text-2xl">/mo</span>
            </p>
            <p className="py-2 text-indigo-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <ul className="list-none text-indigo-500">
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
              <li className="flex text-2xl">
                {" "}
                <ChevronRightIcon className="h-8 w-8 text-lime-600" />
                Lorem Ipsum is simply{" "}
              </li>
            </ul>
            <button className="py-3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
