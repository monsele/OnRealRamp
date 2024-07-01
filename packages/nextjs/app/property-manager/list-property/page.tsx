"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "~~/components/Header";

export default function Page() {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyCategory, setPropertyCategory] = useState("");
  const [annualBase, setAnnualYield] = useState(0);

  return (
    <div className="bg-[#F7FCFF] w-screen h-screen flex flex-col">
      <Header />
      <div className=" w-[80%] flex-1 h-[80%] mx-auto flex justify-between">
        <div className="w-[50%] mt-10 flex flex-col justify-start ">
          <h1 className="text-black text-xl font-bold">Images of Property</h1>
          <Image
            src="/houseimg.png"
            alt="Img"
            layout="responsive"
            width={300} // Adjust width and height as per the image aspect ratio
            height={240}
            objectFit="contain"
          />
        </div>
        <div className="bg-white w-[40%] mt-10 shadow-md rounded-lg h-[80vh] p-10">
          <h2 className="">Property Brief</h2>
          <p>Ensure to give a convincing description of your properties to help potential buyers notice you quick</p>
          <div>
            <p className="text-black text-xl font-semibold">Property title</p>
            <input
              value={propertyTitle}
              onChange={(value: any) => setPropertyTitle(value)}
              placeholder="Property Name"
              className="border-2 border-gray-600 h-20 w-full text-black text-base"
            />
          </div>
          <div>
            <p className="text-black text-xl font-semibold">Property Location</p>
            <input
              value={propertyLocation}
              onChange={(value: any) => setPropertyLocation(value)}
              placeholder="Property Location"
              className="border-2 border-gray-600 h-20 w-full text-black text-base"
            />
          </div>
          <div className="w-full flex flex-row justify-between gap-10">
            <div className="w-[50%]">
              <p className="text-black text-xl font-semibold">Property Category</p>
              <div className="w-[100%] border-2 border-gray-600">
                <input
                  value={propertyCategory}
                  placeholder=""
                  onChange={(value: any) => setPropertyCategory(value)}
                  className="border-r text-center  h-20 w-[100%] text-black text-base"
                />
              </div>
            </div>
            <div className="w-[50%]">
              <p className="text-black">Annual Yield</p>
              <div className="w-[100%] flex flex-row border-2 border-gray-600">
                <input
                  value={annualBase}
                  onChange={(value: any) => setAnnualYield(value)}
                  className="border-r text-center h-20 w-[45%] text-black text-base"
                />
                <p className="text-black ">%</p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-10">
              <div className="w-[50%]">
                <p className="text-black text-xl font-semibold">Property Category</p>
                <div className="w-[100%] border-2 border-gray-600">
                  <input
                    value={propertyCategory}
                    placeholder=""
                    onChange={(value: any) => setPropertyCategory(value)}
                    className="border-r text-center  h-20 w-[100%] text-black text-base"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <p className="text-black">Annual Yield</p>
                <div className="w-[100%] flex flex-row border-2 border-gray-600">
                  <input
                    value={annualBase}
                    onChange={(value: any) => setAnnualYield(value)}
                    className="border-r text-center h-20 w-[45%] text-black text-base"
                  />
                  <p className="text-black ">%</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-black text-xl font-semibold">Property Location</p>
              <input
                value={propertyLocation}
                onChange={(value: any) => setPropertyLocation(value)}
                placeholder="Property Location"
                className="border-2 border-gray-600 h-20 w-full text-black text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
