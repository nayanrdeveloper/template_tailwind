import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full px-32 my-24 mx-auto" id="about">
      <h2 className="font-bold text-4xl">
        Trusted by developers across the world
      </h2>
      <p className="text-indigo-600 py-4 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="flex flex-wrap w-full justify-center">
        <div className="flex flex-col px-16 py-12 text-center shadow-xl mx-1 rounded-xl">
          <span className="font-bold text-6xl text-indigo-700">100%</span>
          <span className="text-slate-500">Completation</span>
        </div>
        <div className="flex flex-col px-16 py-12 text-center shadow-xl mx-1 rounded-xl">
          <span className="font-bold text-6xl text-indigo-700">24/7</span>
          <span className="text-slate-500">Delivery</span>
        </div>
        <div className="flex flex-col px-16 py-12 text-center shadow-xl mx-1 rounded-xl">
          <span className="font-bold text-6xl text-indigo-700">100K</span>
          <span className="text-slate-500">Trasaction</span>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div className="border py-8 px-24 roudend-xl shadow-xl">
                <p className="text-6xl font-bold text-indigo-600">100%</p>
                <p className="text-gray-400">Completation</p>
            </div>
            <div className="border py-8 px-24 roudend-xl shadow-xl">
                <p className="text-6xl font-bold text-indigo-600">100%</p>
                <p className="text-gray-400">Completation</p>
            </div>
            <div className="border py-8 px-24 roudend-xl shadow-xl">
                <p className="text-6xl font-bold text-indigo-600">100%</p>
                <p className="text-gray-400">Completation</p>
            </div>
        </div> */}
      </div>
    </div>
  );
}
