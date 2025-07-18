import React from "react";
import { FileUpload } from "./FileUpload";
import NavigationBar from "@/components/homepage/NavigationBar";
import Inputs from "./Inputs";
import GenerateButtons from "@/components/imageToCaption/GenerateButtons";

const page = () => {
  return (
    <div className="">
      <NavigationBar />
      <FileUpload />
      <Inputs />
      <GenerateButtons />
    </div>
  );
};

export default page;
