import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PropertyCard from "~~/components/home/PropertyCard";

const tabs = ["All Categories", "Saved for later", "Published", "Investors"];

export default function Properties() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-[100%] h-[70%] mt-8 px-10">
      <h2 className="text-lg font-medium text-black">My Properties</h2>
      <div className="h-[100%] w-[100%] ">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-10">
            {tabs.map((tab, i) => (
              <button
                style={
                  activeTab === tab
                    ? { padding: "2px 10px", borderRadius: "10%", backgroundColor: "lightblue" }
                    : { color: "black" }
                }
                onClick={() => setActiveTab(tab)}
                key={i}
                className=""
              >
                <p>{tab}</p>
              </button>
            ))}
          </div>
          <div>
            <Link
              href={"/property-manager/list-property"}
              className="bg-gradient-to-b py-4 px-5 rounded-xl from-[#3A96AD] to-[#5A82FC]"
            >
              List Properties
            </Link>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-20 w-[100%] justify-between p-5 ">
          {Array.from({ length: 6 }).map(el => (
            <div className="p-12">
              <PropertyCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
