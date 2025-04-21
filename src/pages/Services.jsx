import React from "react";
import Footer from "./Footer";
import CustomersLove from "../components/CustomersLove";
import GenzSoftIdea from "../components/GenzSoftIdea";
import FQASection from "../components/FQASection";
import ServiceSection from "../components/ServiceSection";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <>
      <div className="bg-[#303090] py-5">
        <div className="w-[90vw] mx-auto">
          <Navbar />
        </div>
      </div>
      <ServiceSection isServicePage={true} />
      <CustomersLove />
      <GenzSoftIdea />
      <FQASection bgColor="bg-[#F5F5F5]" />
      <Footer />
    </>
  );
};

export default Services;
