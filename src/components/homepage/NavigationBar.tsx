"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  const [visible, setVisible] = useState<string>("hidden");
  const click = () => {
    setVisible(visible === "hidden" ? "block" : "hidden");
  };
  return (
    <div className=" w-full max-w-[1200px] mx-auto h-10 backdrop-blur-2xl flex items-center justify-between px-4">
      <div>
        <a href="/">CapTag</a>
      </div>
      <div onClick={() => click()} className=" relative">
        <GiHamburgerMenu size={20} />
        <div
          className={` ${visible} z-[1000] w-[300px] mx-auto h-40 bg-red-500`}
        >
          <a href="/captionGenerator">
            {" "}
            <div>Caption Generator</div>
          </a>
          <div>Reframe Text</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
