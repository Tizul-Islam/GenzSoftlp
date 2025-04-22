import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import heroImage from "../assets/services_hero.png";
import { IoMdArrowDropdown } from "react-icons/io";
import DeliverSection from "../components/DeliverSection";
import IndustriesServed from "../components/IndustriesServed";
import TechnologiesWeUse from "../components/TechnologiesWeUse";
import WorkedWithSection from "../components/WorkedWithSection";

const deslugify = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const ServicesDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <>
      <div className="bg-[#303090] py-5">
        <div className="w-[90vw] mx-auto">
          <Navbar />
        </div>
      </div>

      <div>
        {/* Hero Section */}
        <div
          className="relative min-h-auto lg:min-h-[calc(100vh-120px)] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center backdrop-blur-xs"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="bg-white/90 min-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#303090] mx-5 lg:mx-11 mt-8 lg:mt-[3.25rem] mb-4 lg:mb-8 px-2 lg:px-8">
              {data?.title || deslugify(title)}
            </h1>
            <p className="text-[#0948FD] text-lg lg:text-3xl max-w-[45rem] mx-auto mb-8 lg:mb-12 px-4 lg:px-0">
              {data?.description || "Innovative solutions for your business."}
            </p>

            <div className="mt-8 lg:mt-12 mb-10 lg:mb-20 flex justify-center items-center gap-8">
              <button className="py-4 border-2 border-[#0948FD] text-[#0948FD] btn-outline rounded-full font-inter font-semibold lg:text-xl px-7 flex justify-center items-center gap-2">
                EXPLORE
                <span>
                  <IoMdArrowDropdown className="text-2xl" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-[#FFF]">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-20 max-w-7xl mx-auto px-4 lg:px-0 py-12 text-lg text-[#4D4D4D]">
            <div className="space-y-4 text-justify">
              <p>
                At GenzSoft Cloud, we build mobile experiences that drive real
                business growth. With deep expertise in cross-platform and
                responsive app development, our team crafts solutions that are
                intuitive, fast, and scalable — built to perform across all
                devices and platforms.
              </p>
            </div>
            <div className="space-y-4 text-justify">
              <p>
                While others chase trends, we focus on creating elegant
                interfaces paired with secure, high-performing backends. Our
                developers specialize in delivering seamless mobile solutions
                for startups, SMEs, and enterprises, tailored to industries like
                e-commerce, healthcare, banking.
              </p>
            </div>
          </div>
        </div>
        <DeliverSection />
        <TechnologiesWeUse />
        <IndustriesServed />
        <WorkedWithSection />
        <Footer />
      </div>
    </>
  );
};

export default ServicesDetails;
