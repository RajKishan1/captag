import React from "react";
import { FaArrowUp } from "react-icons/fa6";
const InputArea = () => {
  return (
    <div className="w-[95%] h-32 my-5 mx-auto rounded-lg backdrop-blur-2xl border border-neutral-600">
      <input
        className="border w-full h-16 border-none pl-3 pt-3"
        placeholder="Paste your Text"
      />
      <div>
        {" "}
        <div className="w-full flex items-center  justify-evenly gap-2 px-2  py-4">
          <div className="text-white text-xs bg-[#202020] px-5 py-2 rounded-lg border border-neutral-500">
            <select name="" id="">
              <option>Instagram</option>
              <option>X / Twitter</option>
              <option>Facebook</option>
            </select>
          </div>
          <div className="text-white text-xs font-extralight bg-[#202020] px-5 py-2 rounded-lg border border-neutral-500">
            <select name="" id="" className="bg-neutral-800">
              <option className=" px-3 py-1.5">Happy😊</option>
              <option className=" px-3 py-1.5">Sad🙁</option>
            </select>
          </div>
          <a
            href="#"
            className="size-9 ml-6 rounded-full bg-[#202020] flex items-center justify-center border border-neutral-500 text-sm"
          >
            <FaArrowUp color="white" size={16} className="bg-red" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
