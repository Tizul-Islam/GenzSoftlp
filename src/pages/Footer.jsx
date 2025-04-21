import React from "react";
import logo from "../assets/brandLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#303090] text-white">
      <footer className="footer sm:footer-horizontal max-w-[90rem] mx-auto font-roboto p-11">
        <aside className="w-auto lg:w-[550px]">
          <img src={logo} alt="" className="" />
          <p className="text-[15px] text-justify mt-[18px]">
            GenzSoft Cloud is a next-generation software company revolutionizing
            web, mobile, AI, and cloud technologies. We specialize in delivering
            scalable, secure, and intelligent digital solutions tailored to
            modern business needs. From custom software development to
            AI-powered innovations, we help businesses stay ahead in the digital
            era
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <span>
              <FaFacebookF className="text-2xl mr-4" />
            </span>
            <span>
              <FaTwitter className="text-2xl mr-4" />
            </span>
            <span>
              <FaLinkedinIn className="text-2xl mr-4" />
            </span>
            <span>
              <FaInstagram className="text-2xl mr-4" />
            </span>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">GenZSoft</h6>
          <a className="link link-hover my-4">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover my-4">Our Service</a>
          <a className="link link-hover">Our Portfolio</a>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <a className="link link-hover my-4">Careers</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover mt-4">Help and Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a className="link link-hover my-4">
            Uttara Sector 10, Road 12, House 9
          </a>
          <a className="link link-hover">+8801518389378</a>
          <a className="link link-hover mt-4">genzsoft.cloud@gmail.com</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} GenzSoft Cloud. All rights
            reserved.
          </p>
          <p className="text-xs text-justify font-roboto">
            Unauthorized use, reproduction, or distribution of any content
            without permission is prohibited. Contact us for inquiries.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
