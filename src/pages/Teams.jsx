import React from 'react';
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Team"
const Teams = () => {

  


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Navbar */}
      <div className="bg-[#303090] py-5">
        <div className="w-[90vw] mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-16 px-4 lg:px-0 min-h-[200px]'>
          <div className="w-full lg:w-3/5 text-center">
            <h2 className='text-[#ffffff] text-2xl lg:text-[35px] font-bold mt-[21px] mb-[34px]'>Team Member</h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-800">
                <span>Our Dedicated</span>
                <span className="badge bg-dark text-white">Team 🙂</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Get to Know Our<br />
                <span className="text-blue-600">Expert Algoramming</span><br />
                Team
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Get acquainted with the powerhouse behind Algoramming - our expert team of professionals dedicated to revolutionizing the IT landscape. Comprising.
              </p>

              <a
                href="https://cal.com/sabikrahat/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Talk to an Expert</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            {/* Video */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <video autoPlay loop muted playsInline className="w-full h-auto">
                  <source src="/videos/office-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </main>
<Team/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Teams;