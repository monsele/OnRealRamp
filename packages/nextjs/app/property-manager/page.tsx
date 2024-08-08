"use client";

import React, { useState } from "react";
import { Category, Home2, Notification, SearchNormal, Setting2 } from "iconsax-react";
import { Header } from "~~/components/Header";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import Overview from "~~/features/Overview";
import Properties from "~~/features/Properties";
import SideBar from "~~/features/SideBar";

const navList = [
  { title: "Overview", id: 2 },
  { title: "My Properties", id: 3 },
  { title: "Settings", id: 4 },
];

const analysis = [
  { title: "My Profits", cash: "$7,242", id: 232, eth: "0.00223" },
  { title: "Total Volume", cash: "$79,242", id: 222, eth: "0.00223" },
  { title: "Total Properties", cash: "242", id: 2009, eth: "0.00223" },
  { title: "Released Properties", cash: "42", id: 34212, eth: "0.00223" },
];

const tableHead = ["Property", "Owner", "Value(eth)", "Your offer", "Your Bid Position", "End bidding"];

const tableData = [
  {
    type: "Property",
    title: "Lekki Court Yard",
    location: "Island, Lagos State",
    owner: "Kuma Hotel",
    eth: "23246ETH",
    yourOffer: "55646ETH",
    bidPosition: 1,
    last: "End Bid",
  },
  {
    type: "Property",
    title: "Lekki Pase 2 estate",
    location: "Lagos State",
    owner: "Adrone Homes",
    eth: "0.06ETH",
    yourOffer: "0.046ETH",
    bidPosition: 2,
    last: "End Bid",
  },
  {
    type: "Property",
    title: "Lagos Court Yard",
    location: "Mainland, Lagos State",
    owner: "Liki Homes",
    eth: "63ETH",
    yourOffer: "0.046ETH",
    bidPosition: 4,
    last: "End Bid",
  },
  {
    type: "Property",
    title: "Mikoko Court",
    location: "Inini State",
    owner: "High Apartments",
    eth: "6988ETH",
    yourOffer: "82896ETH",
    bidPosition: 1,
    last: "End Bid",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(navList[0].title);
  return (
    <div className="w-screen h-screen bg-slate-50 flex flex-col">
      <div className="h-full ">
        <div className="flex flex-row w-full">
          <div className="max-h-screen">
            <SideBar tab={activeTab} setTab={setActiveTab} />
          </div>
          <div className="w-[80vw] ml-[20vw] bg-[#f7f5f7] pt-16 flex items-center justify-center overflow-auto">
            <div className="flex w-[100%] relative flex-col">
              <div className="flex relative flex-row justify-between w-[100%] pr-14">
                <div className="h-[30%] flex w-[30%] flex-row ml-20 items-center justify-start gap-5">
                  {activeTab === "Settings" ? (
                    <Setting2 size="34" color={"black"} />
                  ) : activeTab === "My Properties" ? (
                    <Category size="34" color={"black"} />
                  ) : (
                    <Home2 size="34" color={"black"} />
                  )}
                  <p className="text-3xl font-medium text-blue-950">{activeTab}</p>
                </div>
                <div className=" h-20 w-[50vw] relative bg-white rounded-full flex flex-row justify-start">
                  <SearchNormal size="24" color="gray" className="absolute left-10 focus:border-blue-400 h-full" />
                  <input className="h-[70%] w-[60%] ml-5 border-2 bg-slate-200 text-black pl-14 border-gray-400 rounded-full my-auto"></input>
                  <div className="ml-5 flex items-center justify-between w-full ">
                    <Notification size="24" color="#000" />
                    <RainbowKitCustomConnectButton />
                  </div>
                </div>
              </div>
              <div className=" ml-14">
                <h2 className="text-2xl text-black">Activity Overview</h2>
                <div className="flex flex-row items-center gap-4">
                  {analysis.map(analytic => (
                    <div
                      key={analytic.id}
                      className="w-[18vw] h-[14vh] flex flex-row  items-center justify-between rounded-lg shadow-lg bg-white"
                    >
                      <div className="flex flex-col justify-center items-start px-6">
                        <h2 className="text-gray-500 text-xl ">{analytic.title}</h2>
                        <h1 className="text-gray-900 text-2xl font-semibold">{analytic.cash}</h1>
                        <h2 className="text-gray-500 text-lg">{`${analytic.eth}ETH`}</h2>
                      </div>
                      <div
                        className="flex flex-col  justify-center items-center"
                        style={{
                          width: 200,
                          height: 200,
                        }}
                      >
                        <div
                          style={
                            analytic.title === analysis[0].title
                              ? { backgroundColor: "#FF89011C", width: 100, height: 100 }
                              : analytic.title === analysis[1].title
                              ? { backgroundColor: "#3326AE08", width: 100, height: 100 }
                              : analytic.title === analysis[2].title
                              ? { backgroundColor: "#07AB981A", width: 100, height: 100 }
                              : { backgroundColor: "#E2146B1A", width: 100, height: 100 }
                          }
                          className="flex rounded-full justify-center items-center"
                        >
                          <img
                            src={
                              analytic.title === analysis[0].title
                                ? "/cash.svg"
                                : analytic.title === analysis[1].title
                                ? "/dollar.svg"
                                : analytic.title === analysis[2].title
                                ? "/propertyicon.svg"
                                : "/released.svg"
                            }
                            alt={analytic.title}
                            style={{
                              width: 50,
                              height: 50,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[100%] px-14">
                {activeTab === navList[0].title ? (
                  <Overview tableData={tableData} tableHead={tableHead} />
                ) : (
                  <Properties />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
