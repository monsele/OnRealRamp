import React from "react";

export default function Overview({ tableData, tableHead }: any) {
  return (
    <div className="w-[78vw]  mt-6 pt-20 h-[40%] mx-auto">
      <h2 className="text-black text-xl font-medium">Your Current Bid</h2>
      <div className=" bg-white p-5 rounded-lg ">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((th: any, idx: number) => (
                <th key={idx} className="text-gray-600">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data: any, idx: number) => (
              <tr key={idx} className="text-base">
                <td>
                  <p className="text-black text-lg font-semibold">{data.title}</p>
                  <p className="text-gray-500  text-lg font-semibold">{data.location}</p>
                </td>
                <td className="text-black text-lg font-semibold">{data.owner}</td>
                <td className="text-black text-lg font-semibold">{data.eth}</td>
                <td className="text-black text-lg font-semibold">{data.yourOffer}</td>
                <td className="text-black text-lg font-semibold">{data.bidPosition}</td>
                <td>
                  <button className="bg-slate-300 shadow-lg  px-6 rounded-full">
                    <p className="font-medium text-base text-gray-400">{data.last}</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
