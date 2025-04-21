import React from "react";
import bannerImg from "../assets/banner.png";
import Navbar from "./Navbar";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="hero min-h-auto lg:min-h-screen justify-center items-start"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* <div className="hero-overlay w-[100vw]"></div> */}
      <div className="text-center">
        <div className="w-[90vw] mx-auto my-5">
          <Navbar />
        </div>
        <div className="max-w-5xl mx-auto text-center mt-10 lg:mt-36">
          <h1 className="mb-8 text-3xl lg:text-5xl font-bold leading-[3.5rem] lg:leading-[4.5rem] px-4 lg:px-8 text-white">
            Transform Your Business with GenzSoft's Cutting-Edge Solutions.
          </h1>
          <p className="mb-12 text-xl lg:text-3xl leading-10 px-4 lg:px-0 text-white">
            Leverage next-gen web, mobile, and cloud solutions to stay ahead in
            the digital era and drive unstoppable success.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-10 lg:mb-0">
            <button className="rounded-[100px] bg-white text-[#0948FD] text-lg font-inter font-semibold text-center py-4 px-7">
              Get in touch
            </button>
            <button className="rounded-[99px] bg-linear-to-r from-[#0047FF] to-[#7B55E8] text-lg font-inter font-semibold text-center py-4 px-7 text-white flex justify-center items-center gap-1">
              Explore our services
              <span>
                <FaArrowRightLong className="text-2xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
