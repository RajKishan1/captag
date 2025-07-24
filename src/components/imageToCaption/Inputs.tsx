import React from "react";
interface prop {
  value: string;
  mood: string;
  platform: string;
  setValue: (value: string) => void;
  setPlatform: (value: string) => void;
  setMood: (value: string) => void;
}
const Inputs = ({
  value,
  setValue,
  platform,
  setPlatform,
  mood,
  setMood,
}: prop) => {
  return (
    <div>
      <div className="w-full flex items-center  justify-evenly gap-2 px-2  py-4">
        <div className="text-white text-sm bg-[#202020] px-4 py-2.5 rounded-lg ">
          {/* <label htmlFor="">Platform:</label> */}
          <select
            value={platform}
            onChange={(e) => {
              setPlatform(e.target.value);
            }}
            name=""
            id=""
            className="outline-none"
          >
            <option>Facebook</option>
            <option>Instagram</option>
          </select>
        </div>
        <div className="text-white text-sm bg-[#202020] px-4 py-2.5 rounded-lg">
          {/* <label htmlFor="">Mood:</label>  */}
          <select
            value={mood}
            onChange={(e) => {
              setMood(e.target.value);
            }}
            name=""
            id=""
            className="outline-none"
          >
            <option>Happy😊</option>
            <option>Sad🙁</option>
          </select>
        </div>
      </div>{" "}
      <div className="w-[80%] mx-auto my-3 rounded-lg  px-2 py-4  bg-[#202020]">
        <input
          type="text"
          className="w-full h-full outline-none"
          placeholder="Custom Keywords (Optional)"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
          }}
        />
      </div>
    </div>
  );
};
export default Inputs;
