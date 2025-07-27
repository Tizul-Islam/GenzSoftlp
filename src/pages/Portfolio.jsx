import React from "react";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import CustomersLove from "../components/CustomersLove";
import FQASection from "../components/FQASection";
import ContainCard from '../components/Contain/Containcard';
import StorySection from '../Components/StorySection/StorySection';
import Header from "../components/Header/Header"
const Portfolio = () => {
  return (
    <>
      <div className="bg-[#303090] py-5">
        <div className="w-[90vw] mx-auto">
          <Navbar />
        </div>
      </div>
      <Header/>
      {/* <FQASection bgColor="bg-[#FFF]" /> */}
      {/* <CustomersLove /> */}
      <ContainCard />
      <StorySection />
      <Footer />
    </>
  );
};

export default Portfolio;
