import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Heroimage from "../assets/profile pic.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row ml-[40px] gap-8">
          <div className="md:w-1/2">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#ccd6f6]">
              KOMAL DAS
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#8892b0]">
              I'm a Frontend Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-prose">
              I’m a Frontend developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive frontend web
              applications.
            </p>
            <div>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src={Heroimage}
              alt="My image"
              className="rounded-3xl w-full md:w-2/3 lg:w-[30rem] h-[30rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


