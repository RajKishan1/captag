import React from "react";
interface prop {
  title: string;
  text: string;
  buttonText: string;
  route: string;
}
export const FeatureDiv = ({ text, title, buttonText, route }: prop) => {
  return (
    <div className=" w-4/5 p-2 rounded-xl flex flex-col items-center gap-2  bg-neutral-800">
      <h2 className="my-1.5 text-center text-2xl ">{title}</h2>
      <span className="flex flex-col items-center gap-3 bg-neutral-900 rounded-lg px-1 py-3">
        <p className="text-center px-3 text-neutral-400">{text}</p>
        <a
          href={route}
          className="px-3  py-2 border border-neutral-800 text-sm bg-blue-700 mt-5 rounded-lg"
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
      <div className="flex flex-col items-center justify-between gap-5">
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
