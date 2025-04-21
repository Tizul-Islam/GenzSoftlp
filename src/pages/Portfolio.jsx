import React from "react";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import CustomersLove from "../components/CustomersLove";
import FQASection from "../components/FQASection";

const Portfolio = () => {
  return (
    <>
      <div className="bg-[#303090] py-5">
        <div className="w-[90vw] mx-auto">
          <Navbar />
        </div>
      </div>
      <FQASection bgColor="bg-[#FFF]" />
      <CustomersLove />
      <Footer />
    </>
  );
};

export default Portfolio;
