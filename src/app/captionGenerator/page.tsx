import React from "react";
import { FileUpload } from "./FileUpload";
import NavigationBar from "@/components/homepage/NavigationBar";

const page = () => {
  return (
    <div className="">
      <NavigationBar />
      <FileUpload />
      <div className="w-full flex items-center  justify-around gap-2 px-2 bg-red-600 py-4">
        <div className="text-white bg-red-50">
          <label htmlFor="">Mood</label>
          <select name="" id="">
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
        </div>
        <div className="text-white">
          <label htmlFor="">Mood</label>
          <select name="" id="">
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default page;
