import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const [backNavigationAnchorEl, setBackNavigationAnchorEl] =
    useState<HTMLElement | null>(null);
  const backNavigationOpen = Boolean(backNavigationAnchorEl);
  const handleBackNavigationClick = (event: React.MouseEvent<HTMLElement>) => {
    setBackNavigationAnchorEl(event.currentTarget);
  };
  const handleBackNavigationClose = () => {
    setBackNavigationAnchorEl(null);
  };

  const onPlaceholderContainerClick = useCallback(() => {
    // Please sync "CONNECTED WALLET" to the project
  }, []);

  return (
    <header
      className={`self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-42xl bg-white-base flex flex-row items-start justify-start p-3 box-border gap-[48.5px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-ntblack font-outfit mq750:gap-[24px] ${className}`}
    >
      <div className="w-[297px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 gap-[42px] mq450:gap-[21px]">
          <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
            <div
              className="flex flex-row items-start justify-start gap-[12px] cursor-pointer"
              onClick={onPlaceholderContainerClick}
            >
              <img
                className="self-stretch w-[37.1px] relative max-h-full min-h-[31px]"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <a className="[text-decoration:none] relative font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#3a96ad,_#5a82fc)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[83px] whitespace-nowrap">
                Packets
              </a>
            </div>
          </div>
          <div className="w-[122px] shrink-0">
            <Button
              id="button-undefined"
              aria-controls="menu-undefined"
              aria-haspopup="true"
              aria-expanded={backNavigationOpen ? "true" : undefined}
              onClick={handleBackNavigationClick}
              color="primary"
              sx={{
                width: "122",
                height: "100%",
                backgroundColor: "rgba(4, 4, 4, 0)",
                borderRadius: "30px",
              }}
            />
            <Menu
              anchorEl={backNavigationAnchorEl}
              open={backNavigationOpen}
              onClose={handleBackNavigationClose}
            />
          </div>
        </div>
      </div>
      <div className="w-[366px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch rounded-13xl bg-gray-400 overflow-hidden flex flex-row items-start justify-start pt-3 px-3.5 pb-3.5 border-[1px] border-solid border-whitesmoke-100">
          <div className="w-[152px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-4 w-4 relative min-h-[16px]"
              alt=""
              src="/vuesaxlinearsearchnormal.svg"
            />
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] font-medium font-plus-jakarta-sans text-xs bg-[transparent] h-[15px] flex-1 relative text-silver whitespace-pre-wrap text-left inline-block min-w-[74px] shrink-0 p-0"
              placeholder="Search for  properties"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[17px] text-base">
        <div className="h-10 box-border hidden flex-row items-center justify-center py-2.5 px-5 border-b-[4px] border-solid border-base-blue">
          <div className="self-stretch relative font-medium">Sele</div>
        </div>
        <div className="rounded-15xl bg-white-base flex flex-row items-start justify-start py-2 px-[13px] gap-[11px] text-lg text-gray-500">
          <div className="h-10 w-[95px] box-border hidden border-b-[4px] border-solid border-base-blue" />
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[18.5px]">
              <img
                className="h-8 w-8 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="h-[28.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                <div className="w-px h-[26px] relative bg-gray-500 box-border border-r-[1px] border-solid border-gray-500" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px] whitespace-nowrap">
                  xdh...qhjdf
                </a>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[7px] pr-4 pl-[19px] bg-ntblack w-[97px] rounded-11xl box-border flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
            <a className="[text-decoration:none] relative text-base font-outfit text-white-base text-left inline-block min-w-[58px]">
              Log Out
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
