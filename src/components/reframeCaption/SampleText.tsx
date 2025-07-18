import React from "react";
export const Text = ({ text }: { text: string }) => {
  return (
    <div className="border border-neutral-500 rounded-full px-3 py-2 ">
      <p>{text}</p>
    </div>
  );
};
const SampleText = () => {
  return <div className="w-full h-auto p-2 flex flex-col gap-3">
    <Text text="qwe qwe qwe qwe qwe "/>
    <Text text="qwe qwe qwe qwe qwe "/>
  </div>;
};

export default SampleText;
