"use client";
import React, { useEffect, useState } from "react";
import { FileUpload } from "../../components/imageToCaption/FileUpload";
import Inputs from "../../components/imageToCaption/Inputs";
import GenerateButtons from "@/components/imageToCaption/GenerateButtons";
const page = () => {
  const [value, setValue] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  useEffect(() => {
    console.log(value, platform, mood);
  },[value]);
  return (
    <div className="">
      <FileUpload />
      <Inputs
        platform={platform}
        setPlatform={setPlatform}
        mood={mood}
        setMood={setMood}
        value={value}
        setValue={setValue}
      />
      <GenerateButtons />
    </div>
  );
};

export default page;
