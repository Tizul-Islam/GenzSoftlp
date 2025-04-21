import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const points = [
  {
    title: "Robust & Scalable Applications",
    desc: "Built for a wide range of industries and business goals",
  },
  {
    title: "User-Centric Design",
    desc: "Engaging UI and intuitive UX to elevate user satisfaction",
  },
  {
    title: "Feature-Rich Functionality",
    desc: "Packed with modern tools and smart integrations",
  },
  {
    title: "Cross-Platform Flexibility",
    desc: "Develop once, deploy across iOS, Android & web",
  },
  {
    title: "Diverse App Options",
    desc: "From native to hybrid and web apps, built to fit your needs",
  },
  {
    title: "End-to-End OS Support",
    desc: "Flawless performance across major operating systems",
  },
  {
    title: "Built for Growth",
    desc: "Apps designed to grow your user base and maximize impact",
  },
];

const DeliverSection = () => {
  return (
    <section className="py-12 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-9 items-center">
        {/* Left Text Block */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl lg:text-[50px] font-inter font-extrabold text-[#4D4D4D] leading-snug">
            What We <br /> Deliver at{" "}
            <span className="text-[#0066FF] lg:text-[45px] block">
              GenZsoft Cloud
            </span>
          </h2>
          <p className="text-[#0F1114] text-sm font-inter mt-4 font-light">
            Let GenZsoft Cloud turn your ideas into fully functional,
            beautifully crafted mobile and web applications.
          </p>
        </div>

        {/* Points */}
        <div className="space-y-4 w-full lg:w-2/3">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckSquare className="text-green-500 mt-1 text-lg" />
              <p className="text-[#0F1114]">
                <strong className="text-xl font-medium">{point.title}</strong> -{" "}
                <span className="text-[#4D4D4D] font-light text-lg">
                  {point.desc}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;
