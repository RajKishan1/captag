import React from "react";

const Inputs = () => {
  return (
    <div>
      <div className="w-full flex items-center  justify-evenly gap-2 px-2  py-4">
        <div className="text-white text-sm bg-[#202020] px-4 py-2.5 rounded-lg ">
          {/* <label htmlFor="">Platform:</label> */}
          <select name="" id="">
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
        </div>
        <div className="text-white text-sm bg-[#202020] px-4 py-2.5 rounded-lg">
          {/* <label htmlFor="">Mood:</label>  */}
          <select name="" id="">
            <option>Happy😊</option>
            <option>Sad🙁</option>
          </select>
        </div>
      </div>{" "}
      <div className="w-[80%] mx-auto my-3 rounded-lg  px-2 py-4  bg-[#202020]">
        <input
          type="text"
          className="w-full h-full"
          placeholder="Custom Keywords (Optional)"
        />
      </div>
    </div>
  );
};
export default Inputs;