import React from "react";
import { MdArrowOutward } from "react-icons/md";
interface prop {
  text: string;
  setText: (value: string) => void;
}
export const Text = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 ">
      <p>{text}</p>
      <div>
        <MdArrowOutward size={20} />
      </div>
    </div>
  );
};
const SampleText = ({ text, setText }: prop) => {
  const text1 = "qwe qwe qwe qwe qwe ";
  const text2 = "qwe wer wer rty qwe ";
  const text3 = "qwe qwe wew qwe sdd ";
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
