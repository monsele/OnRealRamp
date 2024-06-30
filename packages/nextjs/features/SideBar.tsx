"use client";

import React, { useState } from "react";
import { Category, Home2, Setting2 } from "iconsax-react";

const navList = [
  { title: "Overview", id: 2 },
  { title: "My Properties", id: 3 },
  { title: "Settings", id: 4 },
];

export default function SideBar() {
  const [activeTab, setActiveTab] = useState(navList[0].title);

  return (
    <div className="h-screen w-80 bg-white flex flex-col justify-start">
      <div className="flex flex-col justify-start ">
        <div className="mt-20 flex justify-center mx-auto w-[80%]">
          <img src="/logoicon.svg" width={200} height={100} />
        </div>
        <div className="mx-auto">
          <img
            src="/avatar.png"
            alt=""
            style={{
              width: "150px",
              height: "150px",
              marginTop: "20px",
            }}
          />
        </div>
        <h1 className="text-3xl text-center mt-3 font-bold text-black">Danielkinq</h1>
        <div className="bg-slate-200 flex justify-center items-center rounded-full  w-[70%] mt-2 mx-auto ">
          <p className="text-gray-500 text-sm ">Property Manager</p>
        </div>
        <div className="h-[2px] w-[80%] my-10 border border-gray-500 mx-auto " />
      </div>
      <div className="flex flex-col items-center gap-10">
        {navList.map(nav => (
          <button
            onClick={() => setActiveTab(nav.title)}
            style={
              nav.title === activeTab
                ? {
                    backgroundColor: "black",
                    border: "2px solid #3A96AD",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "80%",
                    borderRadius: 10,
                    paddingLeft: 20,
                    gap: 20,
                  }
                : {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "80%",
                    paddingLeft: 20,
                    gap: 20,
                  }
            }
            key={nav.id}
          >
            {nav.title === "Settings" ? (
              <Setting2 size="24" color={nav.title === activeTab ? "white" : "black"} />
            ) : nav.title === "My Properties" ? (
              <Category size="24" color={nav.title === activeTab ? "white" : "black"} />
            ) : (
              <Home2 size="24" color={nav.title === activeTab ? "white" : "black"} />
            )}
            <p
              style={
                nav.title === activeTab
                  ? {
                      color: "white",
                      fontSize: 16,
                      fontWeight: 600,
                    }
                  : {
                      color: "black",
                      fontSize: 16,
                      fontWeight: 600,
                    }
              }
            >
              {nav.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
