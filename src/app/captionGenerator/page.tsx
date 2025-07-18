import React from "react";
import { FileUpload } from "../../components/imageToCaption/FileUpload";
import NavigationBar from "@/components/homepage/NavigationBar";
import Inputs from "../../components/imageToCaption/Inputs";
import GenerateButtons from "@/components/imageToCaption/GenerateButtons";

const page = () => {
  return (
    <div className="">
    
      <FileUpload />
      <Inputs />
      <GenerateButtons />
    </div>
  );
};

export default page;
