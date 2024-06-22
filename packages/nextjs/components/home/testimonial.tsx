import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const actions = [
  {
    id: 3131,
    image: require("../../public/bidding.png"),
    title: "Bidding",
    text: "Bidders submit offers (bids) for real estate properties during a set timeframe.",
    link: "bidding",
    linkText: "Start Bidding",
  },
  {
    id: 23224,
    image: require("../../public/auction.png"),
    title: "Auction",
    text: "Bidders submit offers (bids) for real estate properties during a set timeframe.",
    link: "bidding",
    linkText: "View Auctions",
  },
  {
    id: 31111,
    image: require("../../public/win.png"),
    title: "Winning and Settlement",
    text: "Bidders submit offers (bids) for real estate properties during a set timeframe.",
    link: "bidding",
    linkText: "See winner",
  },
];

export default function Testimonial() {
  return (
    <div className="h-[50vh] pb-10 mt-20 flex items-center">
      <div className="flex gap-14 ml-40">
        <div className="w-auto">
          <h1 className="text-6xl font-bold text-black">How it works</h1>
          <p className="text-left text-2xl text-gray-400">
            Packets leverages blockchain technology to transform real estate investment, ensuring secure, transparent,
            and efficient transactions
          </p>
        </div>
        <div>
          <Carousel
            sx={{ height: "48vh", width: "60vw" }}
            indicators={false}
            swipe={true}
            animation="slide"
            duration={1500}
            stopAutoPlayOnHover
            navButtonsAlwaysInvisible={true}
            navButtonsProps={{
              style: {
                position: "absolute",
                left: 10,
              },
            }}
          >
            {actions.map(action => (
              <div
                key={action.id}
                className="rounded-lg shadow-lg h-[45vh] gap-5 p-7 w-[40%] bg-gradient-to-b from-[#3A96AD] flex flex-col mx-auto mt-5 to-[#5A82FC]"
              >
                <Image
                  src={action.image}
                  objectFit="contain"
                  style={{
                    width: 150,
                    height: 150,
                  }}
                  alt={`${action.text} Picture`}
                />
                <h1 className="font-bold text-2xl ">{action.title}</h1>
                <p className="text-lg w-[70%]">{action.text}</p>

                <Link className="bg-black rounded-full w-[150px] flex justify-center items-center " href={action.link}>
                  <p className="font-semibold">{action.linkText}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
