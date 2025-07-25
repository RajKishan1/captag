import React from "react";
interface prop {
  title: string;
  text: string;
  buttonText: string;
  route: string;
}
export const FeatureDiv = ({ text, title, buttonText, route }: prop) => {
  return (
    <div className=" w-4/5 max-w-[400px] p-2 lg:p-4 rounded-xl flex flex-col my-6 items-center gap-2 bg-neutral-800">
      <h2 className="my-1.5 lg:my-3 text-center text-2xl lg:text-4xl">{title}</h2>
      <span className="flex flex-col items-center gap-3 bg-neutral-900 rounded-lg px-1 py-3">
        <p className="text-center text-sm lg:text-xl px-3 text-neutral-300">{text}</p>
        <a
          href={route}
          className="px-3  py-2 border border-neutral-800 text-sm lg:text-lg bg-blue-700 mt-5 rounded-lg"
        >
          {buttonText}
        </a>
      </span>
    </div>
  );
};
const Features = () => {
  return (
    <div className="w-full  flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-4 lg:gap-10">
        <FeatureDiv
          route="/captionGenerator"
          title="Caption to Image"
          text="Get captions for your post Instantly.
        No need to get confused everytime"
          buttonText="Try Now"
        />
        <FeatureDiv
          route="/reframeText"
          text="Reframe your existing caption to achieve more engagement ."
          title="Caption Reframe"
          buttonText="Try Now"
        />
      </div>
    </div>
  );
};

export default Features;
