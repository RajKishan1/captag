import React from "react";
import { MdArrowOutward } from "react-icons/md";
interface prop {
  text: string;
  setText: (value: string) => void;
}
export const Text = ({ text }: { text: string }) => {
  return (
    <div className="max-w-[500px] flex justify-between items-center bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 ">
      <p>{text}</p>
      <div>
        <MdArrowOutward size={20} />
      </div>
    </div>
  );
};
const SampleText = ({ text, setText }: prop) => {
  const text1 = "I'm feeling awesome today!";
  const text2 = "Today's match was awesome!!";
  const text3 = "The AI era is here.";
  return (
    <div className="w-full h-auto p-2 flex flex-col gap-3">
      <div
        onClick={() => {
          setText(text1);
        }}
      >
        <Text text={text1} />
      </div>
      <div
        onClick={() => {
          setText(text2);
        }}
      >
        <Text text={text2} />
      </div>{" "}
      <div
        onClick={() => {
          setText(text3);
        }}
      >
        <Text text={text3} />
      </div>
    </div>
  );
};

export default SampleText;
