import React from "react";
import ServicesImg1 from "../assets/services_1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

const ServicesCard = ({ data }) => {
  return (
    <div className="relative w-full h-[400px] rounded-lg transition-transform duration-300 hover:scale-105">
      <img src={data.image} alt="Services Image" />
      <div className="absolute sm:w-[285px] lg:w-[315px] h-[210px] lg:h-[196px] top-36 sm:top-40 lg:top-48 left-0 mx-4 lg:ml-[26px] flex flex-col items-center justify-center font-inter bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] space-y-4 p-4">
        <h3 className="text-lg lg:text-xl font-semibold text-center text-[#000]">
          {data.title}
        </h3>
        <p className="font-medium text-center text-[#717171]">
          {data.description}
        </p>
        <Link
          to={`/serviceDetails/${slugify(data.title)}`}
          state={{ data }}
          className="text-[#0948FD] text-lg lg:text-xl font-semibold flex items-center gap-2"
        >
          Readmore
          <span>
            <FaArrowRightLong className="text-2xl" />
          </span>
        </Link>
        {/* <h5 className="text-[#0948FD] text-lg lg:text-xl font-semibold flex items-center gap-2">
          Readmore
          <span>
            <FaArrowRightLong className="text-2xl" />
          </span>
        </h5> */}
      </div>
    </div>
  );
};

export default ServicesCard;
