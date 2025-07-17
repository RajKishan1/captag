import React from "react";
import { FileUpload } from "./FileUpload";
import NavigationBar from "@/components/homepage/NavigationBar";
import Inputs from "./Inputs";

const page = () => {
  return (
    <div className="">
      <NavigationBar />
      <FileUpload />
      <Inputs />
    </div>
  );
};

export default page;
