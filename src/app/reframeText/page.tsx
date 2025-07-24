"use client";
import InputArea from "@/components/reframeCaption/InputArea";
import SampleText from "@/components/reframeCaption/SampleText";
import React, { useState } from "react";

const Page = () => {
  const [text, setText] = useState<string>("");
  const [usermood, setUsermood] = useState<string>("");
  const [socialPlatform, setSocialPlatform] = useState<string>("");
  const [result, setResult] = useState<string>("Zca");

  return (
    <div className="h-screen flex flex-col gap-4">
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

      <div className="w-full bg-neutral-500 px-2 py-3 ">
        <p>{result}</p>
      </div>

      <SampleText text={text} setText={setText} />
    </div>
  );
};

export default Page;
