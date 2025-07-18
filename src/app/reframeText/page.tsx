import InputArea from "@/components/reframeCaption/InputArea";
import SampleText from "@/components/reframeCaption/SampleText";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl my-4">Refine your Captions and Tweets</h1>
      <InputArea />
      <SampleText />
    </div>
  );
};

export default page;
