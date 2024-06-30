import React from "react";

export default function ActivityCard() {
  return (
    <div className="h-20 w-40 bg-white rounded-lg shadow-md flex flex-row">
      <div className="flex flex-col justify-start">
        <p className="text-gray-500">My Profits</p>
        <p className="text-blue-900">$3,455</p>
        <p className="text-gray-500">0.0005ETH</p>
      </div>
      <div className="p-4 bg-orange-300 rounded-full">
        <img
          src="/packages/nextjs/public/vuesax/linear/money-recive.png"
          style={{
            width: 50,
            height: 50,
          }}
        />
      </div>
    </div>
  );
}
