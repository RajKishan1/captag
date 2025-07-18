import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  return (
    <div className="w-full h-10 backdrop-blur-2xl flex items-center justify-between px-4">
      <div><a href="/">CapTag</a></div>
      <div>
        <GiHamburgerMenu size={20} />
      </div>
    </div>
  );
};

export default NavigationBar;
