import React from "react";
import { MdArrowOutward } from "react-icons/md";
export const Text = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 ">
      <p>{text}</p>
      <div>
        <MdArrowOutward size={20}/>
      </div>
    </div>
  );
};
const SampleText = () => {
  return (
    <div className="w-full h-auto p-2 flex flex-col gap-3">
      <Text text="qwe qwe qwe qwe qwe "/>
      <Text text="qwe qwe qwe qwe qwe " />
      <Text text="qwe qwe qwe qwe qwe " />
    </div>
  );
};

export default SampleText;
