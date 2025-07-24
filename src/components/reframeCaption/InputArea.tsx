import React from "react";
import { SiCodemagic } from "react-icons/si";

interface InputAreaProps {
  text: string;
  setText: (value: string) => void;
  usermood: string;
  setUsermood: (value: string) => void;
  socialPlatform: string;
  setSocialPlatform: (value: string) => void;
}

const InputArea = ({
  text,
  setText,
  usermood,
  setUsermood,
  socialPlatform,
  setSocialPlatform,
}: InputAreaProps) => {
  const selectWrapperClass =
    "text-white text-xs bg-[#202020] px-2 py-2 rounded-lg border border-neutral-700";

  const selectInputClass = "bg-neutral-800 text-white outline-none";

  return (
    <div className="w-[95%] h-32  mx-auto rounded-lg backdrop-blur-2xl border border-neutral-700">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-16 pl-3 pt-3 outline-none "
        placeholder="Paste your Text"
      />

      <div className="w-full flex items-center justify-between px-2 mt-2 py-2 ">
        {/* Platform Selector */}
        <div className="flex items-center justify-around gap-2">
          <div className={selectWrapperClass}>
            <select
              value={usermood}
              onChange={(e) => setUsermood(e.target.value)}
              className={selectInputClass}
            >
              <option>Instagram</option>
              <option>X / Twitter</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>TikTok</option>
              <option>YouTube</option>
            </select>
          </div>

          {/* Mood Selector */}
          <div className={selectWrapperClass}>
            <select
              value={socialPlatform}
              onChange={(e) => setSocialPlatform(e.target.value)}
              className={selectInputClass}
            >
              <option>Happy😊</option>
              <option>Sad🙁</option>
              <option>Excited🤩</option>
              <option>Calm😌</option>
              <option>Professional💼</option>
              <option>Funny😂</option>
              <option>Motivational💪</option>
              <option>Romantic💕</option>
            </select>
          </div>
        </div>

        {/* Magic Button */}
        <a
          href="#"
          className="size-9 ml-4 rounded-full bg-[#202020] flex items-center justify-center border border-neutral-500 text-sm hover:scale-105"
          onClick={() => {
            console.log(usermood, text, socialPlatform);
          }}
        >
          <SiCodemagic color="white" size={16} />
        </a>
      </div>
    </div>
  );
};

export default InputArea;
