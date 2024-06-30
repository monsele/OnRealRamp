import React from "react";
import { SearchNormal } from "iconsax-react";
import { Header } from "~~/components/Header";
import SideBar from "~~/features/SideBar";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-row">
      <SideBar />
      <div className="w-[100%] flex-end ">
        <div className="absolute top-8 right-[10%] h-20 w-[40vw] bg-white rounded-full flex flex-row justify-start">
          <SearchNormal size="24" color="gray" className="absolute top-auto left-10 focus:border-blue-400 h-full" />
          <input className="h-[70%] w-[40%] ml-5 border-2 bg-slate-200 text-black pl-14 border-gray-400 rounded-full my-auto "></input>
        </div>
      </div>
    </div>
  );
}
