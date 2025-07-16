import React from "react";
interface prop {
  title: string;
  text: string;
  buttonText: string;
}
export const FeatureDiv = ({ text, title, buttonText }: prop) => {
  return (
    <div className=" w-4/5 p-2 rounded-xl flex flex-col items-center gap-2  bg-neutral-800">
      <h2 className="my-1.5 text-center text-2xl ">{title}</h2>
      <span className="flex flex-col items-center gap-3 bg-neutral-900 rounded-lg px-1 py-3">
        <p className="text-center">{text}</p>
        <a href="#" className="px-3  py-2 border rounded-lg">
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
          text=" aofsvnpiaefughcwpfegwhruitgvuhvw sslfjkvnaeliruigaghnb aer;oicahneit "
          title="erwrw"
          buttonText="sdfs"
        />
        <FeatureDiv
          text=" aofsvnpiaefughcwpfegwhruitgvuhvw sslfjkvnaeliruigaghnb aer;oicahneit aeira"
          title="erwrw"
          buttonText="sdfs"
        />
      </div>
    </div>
  );
};

export default Features;
