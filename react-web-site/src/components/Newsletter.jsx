import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black focus:outline-none" type="email" placeholder="Enter your email" />
            <button className="bg-[#00df9a] w-[200px] rounded-md ml-4 font-medium my-6 mx-auto px-6 py-3 text-black ">
              Notify Me
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, <span className="text-[#00df9a] "> <a href="#">Privacy Policy.</a> </span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
