import React from "react";
import Features from "./Features";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 py-4 bg-[#171717]">
      <h1 className="text-5xl font-bold text-center p-10">#CapTag</h1>
      <p>Captions & Hashtags</p>
      <p className="px-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione
        dolore deserunt incidunt, doloribus odio consequuntur non quasi nam sunt
      </p>
      <Features />
    </div>
  );
};

export default HeroSection;
