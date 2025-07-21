import InputArea from "@/components/reframeCaption/InputArea";
import SampleText from "@/components/reframeCaption/SampleText";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-4">
      <h1 className="text-xl font-semibold mx-auto text-center my-4 mt-8">Refine your Captions and Tweets</h1>
      <InputArea />
      <div className="w-full bg-red-500 px-2">here</div>
      <SampleText />
    </div>
  );
};

export default page;
