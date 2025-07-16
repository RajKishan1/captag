import React from "react";
const Features = () => {
  return (
    <div className="w-full  flex flex-col gap-4">
      <div className="flex flex-col items-center justify-between gap-5">
        <div className=" w-4/5 py-3 rounded-xl border flex flex-col gap-3 border-neutral-50 bg-gradient-to-bl from-neutral-800 to-neutral-900">
          <h2 className="my-5 text-center text-2xl ">Image to Caption</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus, ipsum provident sed ex eveniet quasi impedit! Quod,
            doloribus facere?{" "}
          </p>

          <a href="#" className="px-3 py-2 border rounded-lg">
            Try Now
          </a>
        </div>
        <div className=" w-4/5 py-3 rounded-xl border flex flex-col gap-3 border-neutral-50 bg-gradient-to-bl from-neutral-800 to-neutral-900">
          <h2 className="my-5 text-center text-2xl ">Image to Caption</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            delectus, ipsum provident sed ex eveniet quasi impedit! Quod,
            doloribus facere?{" "}
          </p>

          <a href="#" className="px-3 py-2 border rounded-lg">
            Try Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
