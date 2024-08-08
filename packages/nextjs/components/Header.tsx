"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown2, SearchNormal } from "iconsax-react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth"; // Assuming you're using the React library

import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { ethers } from 'ethers'
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */

type Props = {
  onOpen: () => void;
};

export const Header = ({ onOpen }: Props) => {
  const [query, setQuery] = useState<string>("");
  const { address } = useAccount()
  const { data: totalCounter } = useScaffoldReadContract({
  contractName: "EstatePool",
  functionName: "availaibleTokenAmount",
  args: [BigInt(1)],
});
  //const address = useEnsAddress();
  console.log(address);
  console.log(totalCounter);

  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );
   
  const handleSearch = (val: React.ChangeEvent<HTMLInputElement>) => {
    val.preventDefault();

    const { value } = val.target;
    setQuery(value);
  };

  return (
    <div className="sticky lg:static top-0 navbar min-h-0 flex-shrink-0 justify-between z-20 h-20 shadow-xl shadow-[#E9EEFD] px-0 mt-10 rounded-full bg-[#F8F9FD] sm:px-2 w-[80%] mx-auto">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-32 h-10 left-5">
            <Image alt="Packets logo" className="cursor-pointer" fill src="/logoicon.svg" />
          </div>
          <div className="flex flex-col ml-16">
            <span className="bg-gradient-to-r from-[#3A96AD] to-[#5A82FC] h-10 flex flex-col w-[136px] rounded-full justify-center items-center">
              <span className="bg-[#F8F9FD] flex flex-row justify-center items-center h-[80%] w-[94%] rounded-full">
                <p className="bg-clip-text text-[#3A96AD] pr-2">Country</p>
                <ArrowDown2 size="20" color="#3A96AD" />
              </span>
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex lg:flex-nowrap lg:flex-row justify-between menu menu-horizontal pl-10 gap-2">
          <div className="flex flex-row items-center bg-slate-200 h-12 rounded-full w-[20vw] pl-5 active:border-blue-400">
            <span className="-mr-10 ">
              <SearchNormal size="20" color="gray" />
            </span>
            <input
              className="bg-transparent text-black h-full border-0 pl-3 border-none w-full placeholder:pl-10"
              value={query}
              placeholder="Search for properties"
              onChange={(value: any) => handleSearch(value)}
            />
          </div>
        </div>
      </div>
      <div className="navbar-end flex-grow flex-row mr-4 gap-14">
        <button onClick={onOpen} className="text-black text-lg mr-">
          List Properties
        </button>

        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
};
