import React from "react";
import Carousel from "react-material-ui-carousel";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const PropertyCard = () => {
  return (
    <div className="h-[500px] w-[400px] border bg-white shadow-lg rounded-lg">
      <div className="w-full h-[60%]">
        <Carousel
          sx={{ height: "100%" }}
          indicatorIconButtonProps={{
            style: { width: "14px", height: "10px", scale: 0.8, color: "grey" },
          }}
          activeIndicatorIconButtonProps={{
            style: { scale: 1.2, color: "white" },
          }}
          //  swipe={true}
          indicators={true}
          animation="slide"
          indicatorContainerProps={{
            style: {
              zIndex: 10,
              bottom: 45,
              position: "relative",
            },
          }}
          duration={1500}
          stopAutoPlayOnHover
        >
          {images.map(el => (
            <img
              key={el.id}
              src={el.src}
              style={{
                height: "100%",
                overflow: "hidden",
                width: "100%",
              }}
              className="rounded-t-lg"
            />
          ))}
        </Carousel>
      </div>
      <div className="px-5 -mt-3">
        <p className="text-black text-2xl font-bold">Lekki Court Yard</p>
        <p className="text-gray-500 text-base font-medium">Lekki, Lagos State</p>
        <div className="flex -mt-3 flex-row justify-start gap-5 items-center">
          <p className="text-black text-lg font-medium">0.02 ETH MIN</p>
          <span className="w-0.5 h-6 bg-gray-500" />
          <p className="text-black text-lg font-medium">300 Bidders</p>
        </div>
        <div className="flex justify-center">
          <button className=" text-[#5A82FC]  text-2xl font-bold ">Join Bid</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
