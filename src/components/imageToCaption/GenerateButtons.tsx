import React from "react";
export const Button = ({ text }: { text: string }) => {
  return (
    <a
      href=""
      className="w-full h-10 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center rounded-lg"
    >
      {text}
    </a>
  );
};
const GenerateButtons = () => {
  return (
    <div className="w-3/4 mx-auto py-4 flex flex-col gap-2 px-2">
      <Button text="Generate Captions"/>
      <Button text="Generate Hashtags"/>
      <Button text="Generate Both"/>
    </div>
  );
};

export default GenerateButtons;
