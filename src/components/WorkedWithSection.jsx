import React from "react";

import hexVector from "../assets/Icon/devicon_Vector.png";
import partner1 from "../assets/Icon/devicon_Pathon.png";
import partner2 from "../assets/Icon/devicon_Govt.png";
import partner3 from "../assets/Icon/devicon_GUB.png";
import partner4 from "../assets/Icon/devicon_BEPZA.png";
import partner5 from "../assets/Icon/devicon_TSSL.png";

const partners = [
  { name: "Pathon", logo: partner1 },
  { name: "Govt", logo: partner2 },
  { name: "GUB", logo: partner3 },
  { name: "BEPZA", logo: partner4 },
  { name: "TSSL", logo: partner5 },
];

const WorkedWithSection = () => {
  return (
    <>
      {/* Who We've Worked With Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#0948FD] mt-12 text-center">
            Who We've Worked With
          </h2>
          <p className="text-[#4D4D4D] max-w-5xl mx-auto text-lg text-center my-12">
            At GenzSoft Cloud, we take pride in building strong partnerships
            with organizations across various sectors. From education to
            government, our tailored solutions have empowered teams to grow,
            innovate, and lead.
            <br />
            We've proudly worked with:
          </p>

          <div className="flex flex-wrap gap-20 justify-center items-center mb-10">
            {partners.map((item, idx) => (
              <div
                key={idx}
                className="w-32 h-36 flex flex-col items-center justify-center"
              >
                <div
                  className="relative w-full h-full bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url(${hexVector})` }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="absolute inset-0 m-auto w-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3E4EF3] py-10 text-white">
        <div className="max-w-[73rem] mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-4">
              Ready to Start Your Project with Us?
            </h3>
            <p className="text-sm md:text-xl mb-6">
              We'd love to hear your ideas and help bring them to life. <br />
              Email us at{" "}
              <a href="mailto:sales@genzsoft.cloud" className="">
                sales@genzsoft.cloud
              </a>{" "}
              — we're ready when you are!
            </p>
          </div>
          <button className="bg-transparent py-2 px-6 rounded-full shadow-md transition border-2 border-white hover:bg-white hover:text-[#3E4EF3] cursor-pointer text-white text-center font-inter text-[22px] not-italic font-normal leading-[139%] tracking-[6.6px]">
            01518389378
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkedWithSection;
