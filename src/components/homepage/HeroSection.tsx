import React from "react";
import Features from "./Features";

const HeroSection = () => {
  return (
    <div className=" flex flex-col  gap-4 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
      <h1 className="text-5xl font-bold text-center p-10">CapTag</h1>
      <p className="px-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione
        dolore deserunt incidunt, doloribus odio consequuntur non quasi nam sunt
        laboriosam! Totam perferendis aperiam molestiae eveniet sapiente,
      </p>
      <Features />

    </div>
  );
};

export default HeroSection;
