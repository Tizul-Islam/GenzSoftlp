import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./DetailsSection.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CaseStudyLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="bg-white text-black">
            {/* Mobile Sidebar Toggle Button */}
            <button 
                className="md:hidden fixed top-8 right-4 z-50 bg-gray-100 p-2 rounded-lg shadow-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20"
            >
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Recharge IV</h1>
                </div>
            </motion.section>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row mx-auto max-w-7xl px-4 md:px-8 lg:px-12 gap-8 relative">
                {/* Sidebar - Hidden on mobile unless toggled */}
                <aside className={`lg:w-1/4 bg-white lg:sticky lg:top-0 lg:h-screen z-40 transition-all duration-300
                    ${isSidebarOpen ? 'fixed inset-0 p-6 overflow-y-auto' : 'hidden lg:block'}`}
                >
                    {isSidebarOpen && (
                        <button 
                            className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-black"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            
                        </button>
                    )}
                    
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="lg:mt-6"
                    >
                        <div className="bg-[rgb(217,221,226)] p-6 mt-6 mx-10 h-110 lg:sticky lg:top-6">
                            <div className="mb-4">
                                <h2 className="text-sm text-gray-500 m-1">Company</h2>
                                <p className="font-medium text-sm">Recharge IV</p>
                            </div>
                            <hr className="m-2" />
                            <div className="mb-4">
                                <h2 className="text-sm text-gray-500 m-1">Category</h2>
                                <p className="font-medium text-sm">Web Design</p>
                            </div>
                            <hr className="m-2" />
                            <div className="mb-4">
                                <h2 className="text-sm text-gray-500 m-1">Timeline</h2>
                                <p className="font-medium text-sm">3 Months</p>
                            </div>
                            <hr className="m-2" />
                            <div>
                                <h2 className="text-base text-gray-500 mb-2">
                                    Services We Provided
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {["User Research", "UI Design", "Development"].map(
                                        (service, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm"
                                            >
                                                {service}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 lg:mt-5 mx-10">
                            <h2 className="text-base font-medium">Share this Case Study:</h2>
                            <div className="mt-2 flex gap-3">
                                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp].map(
                                    (Icon, idx) => (
                                        <a
                                            href="#"
                                            key={idx}
                                            className="text-gray-600 hover:text-black p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                        >
                                            <Icon className="text-lg" />
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.section>
                </aside>

                {/* Main Content */}
                <main className="flex-1 py-6 overflow-hidden">
                    {/* Project Preview Image */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-10"
                    >
                        <img
                            src="/src/assets/Detailsimg/67d685ed5a4273da6785671e_Frame 1984077426 (3).jpg"
                            alt="Laptop Preview"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>

                    {/* About the Project */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About the Project</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                            Recharge IV provides convenient door-to-door drip therapy services,
                            offering wellness treatments in the comfort of clients' homes. We
                            designed the entire website for Recharge IV, incorporating engaging
                            3D elements and micro-interactions to enhance the user experience.
                            This thoughtful design not only streamlines the booking process but
                            also reflects the ease and comfort of the services.
                        </p>
                    </motion.section>

                    {/* Objectives */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Objectives</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            The client wanted a website for Recharge IV that makes booking
                            door-to-door drip therapies effortless. They emphasized the
                            importance of keeping the design consistent even when adding new
                            drip and wellness products.
                        </p>
                    </motion.section>

                    {/* Requirements */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Requirements</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            The drip booking should be straightforward and swift, avoiding unnecessary steps for users.
                            Additionally, they want the ability to update the
                            site with new content easily, minimizing the need for frequent designer involvement.
                        </p>
                    </motion.section>

                    {/* Solutions */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            We designed a modern website for Recharge IV, featuring engaging 3D product images and smooth micro-interactions to create a swift and
                            intuitive booking experience for users.
                        </p>
                    </motion.section>

                    {/* Macbook View */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67a4afa374eae0ccbd984379_Recharge-IV-macbook-view.jpg"
                            alt="Laptop Preview"
                            className="w-full h-auto rounded-lg shadow-md mb-6"
                        />
                    </motion.section>

                    {/* Mobile Views */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                                src="/src/assets/Detailsimg/67a4afb04ac72d9337378558_Recharge-IV-mobile-version.jpg"
                                alt="Mobile Preview 1"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <img
                                src="/src/assets/Detailsimg/67a4afba4f9b1345b29f5244_Recharge-IV-mobile-view.jpg"
                                alt="Mobile Preview 2"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </motion.section>

                    {/* Style Guide */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Style Guide</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            The style guide for Recharge IV features a bold color pallet. This combination was
                            chosen to convey an energetic and vibrant vibe,
                            reflecting the dynamic nature of the drip therapy services.
                        </p>
                    </motion.section>

                    {/* Typography and Color */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                                src="/src/assets/Detailsimg/67a4afd4ab5cb5debe143d79_Recharge-IV-typography.jpg"
                                alt="Typography"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <img
                                src="/src/assets/Detailsimg/67a4afdcbd473222fe097ba1_Recharge-IV-color.jpg"
                                alt="Color Palette"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </motion.section>

                    {/* Style Image */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67a4afe6e76b98fe05364b1f_Recharge-IV-style-image.avif"
                            alt="Style Image"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>

                    {/* Product Images */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                                src="/src/assets/Detailsimg/67a4aff3bd473222fe098cae_Recharge-IV-bottol-image.jpg"
                                alt="Bottle Image"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <img
                                src="/src/assets/Detailsimg/67a4affa2b4cfc3406b55a88_Recharge-IV-run-image.jpg"
                                alt="Run Image"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </motion.section>

                    {/* Icons and Illustrations */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Icons and Illustrations</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            The website required vibrant icons and illustrations to capture users'
                            attention and complement the overall design. We created dynamic visuals
                            that embody the energetic nature of the website.
                        </p>
                    </motion.section>

                    {/* Icons Illustration */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67a4b008388e1d85acd1b2b9_Recharge-IV-icon-ilustration.jpg"
                            alt="Icons and Illustrations"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>

                    {/* Responsive Views */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <img
                                src="/src/assets/Detailsimg/67a4b015c15da70c2c834cec_Recharge-IV-mobile-responsive.jpg"
                                alt="Mobile Responsive"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <img
                                src="/src/assets/Detailsimg/67a4b01c4f9b1345b29fc580_Recharge-IV-ios-version.jpg"
                                alt="iOS Version"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </motion.section>

                    {/* Responsive View */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67a4b0280cd95fc19d5c0397_Recharge-IV-responsive-view.jpg"
                            alt="Responsive View"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>

                    {/* Responsiveness */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Responsiveness</h2>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                            We ensured the platform is easily accessible from any device, allowing users to book drips seamlessly while maintaining a consistent experience across all screen sizes.
                        </p>
                    </motion.section>

                    {/* Macbook Version */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67a4ae8e85d92a257c92c5ca_Recharge-IV-macbook-version.jpg"
                            alt="Macbook Version"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>

                    {/* Final Image */}
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <img
                            src="/src/assets/Detailsimg/67d68acd83c0ed0c6c7555bd_fff.jpg"
                            alt="Final Preview"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </motion.section>
                </main>
            </div>
        </div>
    );
};

export default CaseStudyLayout;