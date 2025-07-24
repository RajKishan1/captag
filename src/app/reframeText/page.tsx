"use client";
import InputArea from "@/components/reframeCaption/InputArea";
import SampleText from "@/components/reframeCaption/SampleText";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

const Page = () => {
  const [text, setText] = useState<string>("");
  const [usermood, setUsermood] = useState<string>("");
  const [socialPlatform, setSocialPlatform] = useState<string>("");
  const [result, setResult] = useState<string>("Zca");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };
  return (
    <div className="h-screen max-w-[1200px] mx-auto flex flex-col gap-4">
      <h1 className="text-xl font-semibold mx-auto text-center my-4 mt-8">
        Refine your Captions and Tweets
      </h1>

      <InputArea
        text={text}
        setText={setText}
        usermood={usermood}
        setUsermood={setUsermood}
        socialPlatform={socialPlatform}
        setSocialPlatform={setSocialPlatform}
      />

      <div className="w-full p-2 ">
        <div className="bg-neutral-900 rounded-lg border border-neutral-700 p-2">
          <div>
            {" "}
            <p>{result}</p>
          </div>
          <div className="w-full flex flex-row-reverse mt-4">
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-900"
            >
              {!copied ? <FaCopy /> : <IoMdDoneAll />}
            </button>
          </div>
        </div>
      </div>

      <SampleText text={text} setText={setText} />
    </div>
  );
};

export default Page;
