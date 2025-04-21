import React from "react";
import rightImg from "../assets/about.png";

const TransformBusiness = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-16 px-4 lg:px-0">
        <div className="w-full lg:w-2/5">
          <img src={rightImg} alt="section image" />
        </div>
        <div className="w-full lg:w-3/5">
          <h2 className="text-[#0948FD] text-2xl lg:text-[35px] font-bold mt-[21px] mb-[34px]">
            Transform Your Business with GenzSoft's Cutting-Edge Solutions.
          </h2>
          <p className="text-xl text-justify text-[#4D4D4D]">
            At GenzSoft Cloud, we are passionate about building cutting-edge
            software solutions that drive innovation and business growth. With
            expertise in Web & Mobile Development, AI-powered solutions, Cloud &
            DevOps, IoT, ERP, and Custom Software Development, we deliver
            scalable and efficient digital experiences tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransformBusiness;
