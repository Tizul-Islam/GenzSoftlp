import React from "react";
import {
  FaShoppingCart,
  FaPiggyBank,
  FaSatelliteDish,
  FaPills,
  FaHospital,
  FaCity,
  FaSeedling,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaShoppingCart className="text-[#0066ffb9] text-xl" />,
    title: "E-commerce",
    desc: "Scalable platforms that drive online sales and customer engagement",
  },
  {
    icon: <FaPiggyBank className="text-[#0066ffb9] text-xl" />,
    title: "FinTech",
    desc: "Secure, efficient, and compliant financial applications",
  },
  {
    icon: <FaSatelliteDish className="text-[#0066ffb9] text-xl" />,
    title: "Telecommunication",
    desc: "Smart integrations and robust service portals",
  },
  {
    icon: <FaPills className="text-[#0066ffb9] text-xl" />,
    title: "Pharmaceuticals",
    desc: "Streamlined operations and data-driven solutions",
  },
  {
    icon: <FaHospital className="text-[#0066ffb9] text-xl" />,
    title: "Healthcare",
    desc: "Innovative tools for better care and patient management",
  },
  {
    icon: <FaCity className="text-[#0066ffb9] text-xl" />,
    title: "Local Enterprises",
    desc: "Digital empowerment for small and mid-sized businesses",
  },
  {
    icon: <FaSeedling className="text-[#0066ffb9] text-xl" />,
    title: "Agriculture",
    desc: "Smart tech for sustainable farming and agri-commerce",
  },
  {
    icon: <FaGlobe className="text-[#0066ffb9] text-xl" />,
    title: "MNCs",
    desc: "Enterprise-grade solutions for global scale",
  },
  {
    icon: <FaRocket className="text-[#0066ffb9] text-xl" />,
    title: "Startups",
    desc: "From MVP to market, full-cycle development support",
  },
];

const IndustriesServed = () => {
  return (
    <section className="py-12 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-16 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-[28%]">
          <h2 className="text-3xl lg:text-[50px] font-inter font-extrabold text-[#4D4D4D] leading-snug">
            Industries <br /> We've{" "}
            <span className="text-[#0066FF] lg:text-[45px] block">Served</span>
          </h2>
          <p className="text-[#0F1114] text-sm font-inter mt-4 font-light">
            Whatever your industry, we deliver smart, scalable solutions to help
            you grow.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4 w-full lg:w-[65%]">
          {industries.map((industry, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div>{industry.icon}</div>
              <p className="text-[#0F1114]">
                <strong className="text-xl font-medium">
                  {industry.title}
                </strong>{" "}
                -{" "}
                <span className="text-[#4D4D4D] font-light text-lg">
                  {industry.desc}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
