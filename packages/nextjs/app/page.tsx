"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { SecuritySafe } from "iconsax-react";
import type { NextPage } from "next";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createCompany } from "~~/api/create";
import { Header } from "~~/components/Header";
import CompanyRegistrationModal from "~~/components/home/CompanyRegistration.";
import PropertyCard from "~~/components/home/PropertyCard";
import TopCompanies from "~~/components/home/TopCompanies";
import Testimonial from "~~/components/home/testimonial";
import { Address } from "~~/components/scaffold-eth";

const categories = [
  { title: "Lands", id: 2323 },
  { title: "Houses", id: 2223 },
  { title: "Commercial", id: 2993 },
  { title: "Apartments", id: 2153 },
];

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [activeCategory, setActiveCategory] = useState("Lands");
  const [listProperty, setListProperty] = useState(false);

  const closeListProperty = () => {
    setListProperty(false);
  };

  const openListProperty = () => {
    setListProperty(true);
  };

  return (
    <div className="bg-[#F7FCFF] flex flex-col h-auto">
      <Header onOpen={openListProperty} />
      <div
        style={{
          backgroundImage: "url('/map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: 20,
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="w-[30%] mx-auto mt-5">
          <ul className="flex flex-row flex-grow h-10 items-center justify-between">
            {categories.map((category, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(category.title)}
                style={
                  activeCategory === category.title
                    ? {
                        padding: "4px 20px",
                        backgroundColor: "#3A96AD1F",
                        borderRadius: 30,
                        borderWidth: 2,
                        flexShrink: 1,
                      }
                    : {}
                }
                className="text-gray-500 text-md cursor-pointer"
              >
                {category.title}
              </button>
            ))}
          </ul>
        </div>
        <div className=" h-auto mx-auto mt-24">
          <p className="flex flex-row justify-center text-black lg:text-[55px] gap-2">
            <span className="font-extrabold">{`Discover `}</span>
            <span className="font-thin">Decentralized</span>
            <span className="font-extrabold">Real Estate</span>
          </p>
          <p className="flex flex-row justify-center text-black lg:text-[55px] gap-2">
            <span className="font-extrabold">with</span>
            <span className="font-extrabold text-[#5A82FC]">Packets</span>
          </p>
          <p className="text-gray-600 text-center text-xl font-medium">
            Less stress, no worries, access lands anywhere from around the world
          </p>

          <button className="cursor-pointer bg-gradient-to-r from-[#3A96AD] mx-auto mt-5 to-[#5A82FC] rounded-full flex flex-col w-[190px] h-[60px] justify-center items-center">
            <p className="font-semibold cursor-pointer text-lg bg-black w-[96%] rounded-full py-3 px-5 flex flex-row justify-center items-center">
              Explore
            </p>
          </button>
        </div>
        <div className="flex flex-row items-center justify-center mt-20 gap-10">
          {Array.from({ length: 4 }).map((el, i) => (
            <div key={i}>
              <PropertyCard />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/bluewatermark.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          width: "100vw",
          height: "120vh",
        }}
      >
        <div className="h-[60%] w-[70%] mx-auto relative ">
          <Image
            src={require("../public/homeIcon.png")}
            objectFit="contain"
            style={{
              width: 50,
              height: 50,
            }}
            alt="Home Icon"
            className="left-10"
          />
          {/* <div className="inset-0 bg-cover bg-center filter blur-lg"> */}
          <div className="w-64 h-20 absolute top-0 z-20 right-[320px] bg-slate-50 bg-opacity-80 border-2 border-[#5A82FC] flex justify-center items-center gap-2 rounded-lg">
            <Image
              src={require("../public/matic.svg")}
              objectFit="contain"
              style={{
                width: 30,
                height: 30,
              }}
              alt="Matic Icon"
              className="z-10"
            />
            <p className="text-[#5A82FC] font-semibold text-xl">Properties on Chain</p>
          </div>
          {/* </div> */}
          <div className="h-full">
            <Image
              src={require("../public/house3.png")}
              objectFit="contain"
              style={{
                width: 550,
                height: 550,
              }}
              alt="Matic Icon"
              className="absolute z-10 top-10 left-[400px]"
            />
            <Image
              src={require("../public/house2.png")}
              objectFit="contain"
              style={{
                width: 450,
                height: 450,
              }}
              alt="Matic Icon"
              className="z-20 absolute top-40 left-[150px]"
            />
            <Image
              src={require("../public/house1.png")}
              objectFit="contain"
              style={{
                width: 350,
                height: 350,
              }}
              alt="Matic Icon"
              className="z-30 absolute bottom-20 -mb-14 left-[400px]"
            />
            <Image
              src={require("../public/coin.png")}
              objectFit="contain"
              style={{
                width: 200,
                height: 200,
              }}
              alt="coin Icon"
              className="z-0 absolute bottom-32 right-[420px]"
            />
            <Image
              src={require("../public/homeIcon.png")}
              objectFit="contain"
              style={{
                width: 100,
                height: 100,
              }}
              alt="Home Icon"
              className="absolute right-40 bottom-5"
            />
            <Image
              src={require("../public/polygon.png")}
              objectFit="contain"
              style={{
                width: 80,
                height: 80,
              }}
              alt="Home Icon"
              className="absolute right-80 bottom-20"
            />
          </div>
          <div className="w-64 h-20 absolute bottom-0 z-20 left-0 bg-slate-50 bg-opacity-80 border-2 border-[#5A82FC] flex justify-center items-center gap-2 rounded-lg">
            <SecuritySafe size="32" color="#5A82FC" />
            <p className="text-[#5A82FC] font-semibold text-xl">Secured Transaction</p>
          </div>
          <div className="absolute right-20 top-40 w-96 flex flex-col items-start">
            <h1 className="text-black font-bold text-left w-80 text-3xl">Tokenize real estate On-chain</h1>
            <p className="text-left text-gray-400">
              Packet Real Estate Platform offers a revolutionary way to buy, sell, and invest in real estate. By
              leveraging the power of blockchain technology, we provide a secure, transparent, and efficient environment
              for all your real estate transactions.
            </p>
            <button className="cursor-pointer bg-gradient-to-r from-[#3A96AD] mx-auto mt-5 to-[#5A82FC] rounded-full flex flex-col  w-[290px] h-[60px] justify-center items-center">
              <p className="font-semibold cursor-pointer text-lg bg-black w-[96%] rounded-full py-3 px-5 flex flex-row justify-center items-center">
                See listed properties
              </p>
            </button>
          </div>
        </div>

        <Testimonial />
        <TopCompanies />
      </div>
      <CompanyRegistrationModal isOpen={listProperty} onClose={closeListProperty} />
    </div>
  );
};

export default Home;
