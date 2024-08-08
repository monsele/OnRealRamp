"use client";

import React from "react";
import FrameComponent from "~~/components/locofy/frame-component"
export default function Page() {
  return (
    <div className="w-full h-[1024px] relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[39px] px-[149px] pb-[132px] box-border gap-[616px] leading-[normal] tracking-[normal] mq450:gap-[154px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[308px] mq750:pl-[74px] mq750:pr-[74px] mq750:box-border mq1225:h-auto">
      <main className="self-stretch flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full shrink-0">
        <section className="flex-1 flex flex-col items-end justify-start gap-[29px] shrink-0 max-w-full">
          <FrameComponent />
          {/* <Content /> */}
        </section>
      </main>
      <img
        className="w-[35px] h-[35px] relative shrink-0"
        alt=""
        src="/group-1000002260.svg"
      />
    </div>
  );
}
