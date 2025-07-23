"use client"
import React, { useState } from "react";
import { FileUpload } from "../../components/imageToCaption/FileUpload";
import Inputs from "../../components/imageToCaption/Inputs";
import GenerateButtons from "@/components/imageToCaption/GenerateButtons";
const page = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="">
      <FileUpload />
      <Inputs value={value} setValue={setValue} />
      <GenerateButtons />
    </div>
  );
};

export default page;
