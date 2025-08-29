
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Prize = () => {
  return (
    <div id="prize" className="w-screen overflow-x-hidden">
      <h1 className=" text-3xl self-center lg:text-4xl font-bold leading-9 text-[#f6921e] pb-1 text-center mb-4">
        Prizes
      </h1>
      {/* Prize Cards */}
      <div className="flex flex-wrap gap-10 lg:gap-28 md:gap-4 justify-center items-center  max-w-fit my-10 mx-auto">
        {/*Second Prize */}
        <div className="hover:scale-110 hidden md:block duration-300">
          <LazyLoadImage
            src="/silver.jpeg"
            className="bg-cover rounded-lg w-[180px] lg:w-[200px] h-[250px] lg:h-[300px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md">
            🏆2nd Prize🏆
            <br />
            ₹15000
          </h2>
        </div>
        {/*First Prize */}
        <div className="hover:scale-110 duration-300">
          <LazyLoadImage
            src="/gold.jpeg"
            className="bg-cover rounded-lg w-[250px] h-[300px] lg:w-[300px] lg:h-[400px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md">
            🏆1st Prize🏆
            <br />
            ₹21000
          </h2>
        </div>
        <div className="hover:scale-110 md:hidden duration-300">
          <LazyLoadImage
            src="/silver.jpeg"
            className="bg-cover rounded-lg w-[180px] lg:w-[200px] h-[250px] lg:h-[300px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md">
            🏆2nd Prize🏆
            <br />
            ₹15000
          </h2>
        </div>
        {/* Third Prize */}
        <div className="hover:scale-110 duration-300">
          <LazyLoadImage
            src="/bronze.jpeg"
            className="bg-cover rounded-lg w-[180px] lg:w-[200px] h-[250px] lg:h-[300px]"
          />
          <h2 className="bg-gradient-to-r text-center font-semibold lg:font-bold lg:text-2xl text-xl text-white py-1 from-[#FFF1A5] via-[#C87D4C] to-[#533636] rounded-md ">
            🏆3rd Prize🏆
            <br />
            ₹10000
          </h2>
        </div>
      
      </div>
    </div>
  );
};

export default Prize;
