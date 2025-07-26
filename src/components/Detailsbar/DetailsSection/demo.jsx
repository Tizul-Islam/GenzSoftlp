import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import './DetailsSection.css';


const CaseStudyLayout = () => {
    return (
        <div className=" bg-white text-black px-4">
         <div className=" mx-70 p-10 ">
         <h1 className="text-6xl font-bold mb-6">Recharge IV</h1>
         </div>

            <div className="flex  min-h-screen mx-auto max-w-[1200px]  gap-30 ">
                {/* Fixed Sidebar */}
                
               
               
                <aside className="md:w-1/4 lg:w-1/6 gap-10  flex flex-col justify-between mt-6 ">
                    <div  className=" w-full  ">
                       <div className="bg-[rgb(245,246,247)] p-6  sticky top-0 h-110">
                        <div className="mb-4">
                            <h2 className="text-sm text-gray-500 m-1">Company</h2>
                            <p className="font-medium text-sm">  Recharge IV</p>
                        </div>
                        <hr className="m-2" />
                        <div className="mb-4">
                            <h2 className="text-sm text-gray-500 m-1"> Category</h2>
                            <p className="font-medium text-sm">Web Design</p>
                        </div>
                        <hr className="m-2" />
                        <div className="mb-4">
                            <h2 className="text-sm text-gray-500 m-1">Timeline</h2>
                            <p className="font-medium text-sm">3 Months</p>
                        </div>
                        <hr className="m-2" />
                        <div>
                            <h2 className="text-base text-gray-500 mb-2">Services We Provided</h2>
                            <div className="flex flex-wrap gap-4">
                                {["User Research", "UI Design", "Development"].map((service, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white px-3 py-1 rounded-full text-sm"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </div>
                        <h2>Share this Case Study:</h2>
                        <div className="mt-6 flex gap-4">
                           
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp].map((Icon, idx) => (
                            <a href="#" key={idx} className="text-gray-600 hover:text-black">
                                <Icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                    </div>

                    {/* Social Share Icons */}
                  
                </aside>
             

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                
                    <section>
                        
                        <div className="mb-10">
                            <img
                                src="../../../../public/img/67d685ed5a4273da6785671e_Frame 1984077426 (3).jpg"
                                alt="Laptop Preview"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Add your text and image sections here like before */}
                        {/* You can paste the rest of the content from your version */}



                        <h2 className="text-5xl font-bold mb-6">About the Project</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Recharge IV provides convenient door-to-door drip therapy services, offering wellness treatments in the comfort of clients' homes.

                            We designed the entire website for Recharge IV, incorporating engaging 3D elements and micro-interactions to enhance the user experience.
                            This thoughtful design not only streamlines the booking process but also reflects the ease and comfort of the services
                        </p>
                        {/* Add more content here */}
                        <div className="mb-10">
                            <img
                                src="../../../../public/img/67a4b008388e1d85acd1b2b9_Recharge-IV-icon-ilustration.jpg"
                                alt="Laptop Preview"
                                className=" w-full object-cover"
                            />
                        </div>


                        <h2 className="text-5xl font-bold mb-6">Objectives</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            The client wanted a website for Recharge IV that makes booking door-to-door
                            drip therapies effortless. They emphasized the importance of keeping the design consistent even when adding new drip and wellness products.
                        </p>
                        <h2 className="text-5xl font-bold mb-6">Requirements</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            The drip booking should be straightforward and swift, avoiding unnecessary steps for users.
                            Additionally, they want the ability to update the
                            site with new content easily, minimizing the need for frequent designer involvement.</p>
                        <h2 className="text-5xl font-bold mb-6">Solutions</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            We designed a modern website for Recharge IV, featuring engaging 3D product images and smooth micro-interactions to create a swift and
                            intuitive booking experience for users.</p>


                        <div className="mb-10">
                            <img
                                src="../../../../public/img/67a4afa374eae0ccbd984379_Recharge-IV-macbook-view.jpg"
                                alt="Laptop Preview"
                                className="mb-6 w-full object-cover"
                            />
                        </div>
                        <div className="mb-10 double">
                            <div className="">
                                <img
                                    src="../../../../public/img/67a4afb04ac72d9337378558_Recharge-IV-mobile-version.jpg"
                                    alt="Laptop Preview"
                                    className="mb-6 w-full object-cover"
                                />
                            </div>
                            <div className="">
                                <img
                                    src="../../../../public/img/67a4afba4f9b1345b29f5244_Recharge-IV-mobile-view.jpg"
                                    alt="Laptop Preview"
                                    className="mb-6 w-full object-cover"
                                /></div>
                        </div>


                        <h2 className="text-5xl font-bold mb-6">Style Guide</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            The style guide for Recharge IV features a bold color pallet. This combination was
                            chosen to convey an energetic and vibrant vibe,
                            reflecting the dynamic nature of the drip therapy services. </p>

                        <div className="">
                            <div className="double">
                                <div className="">
                                    <img
                                        src="../../../../public/img/67a4afd4ab5cb5debe143d79_Recharge-IV-typography.jpg"
                                        alt="Laptop Preview"
                                        className="mb-6 w-full object-cover"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="../../../../public/img/67a4afdcbd473222fe097ba1_Recharge-IV-color.jpg"
                                        alt="Laptop Preview"
                                        className="mb-6 w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <img
                                    src="../../../../public/img/67a4afe6e76b98fe05364b1f_Recharge-IV-style-image-ezgif.com-avif-to-jpg-converter.jpg"
                                    alt="Laptop Preview"
                                    className="mb-10 w-full object-cover"
                                />
                            </div>
                            <div className="double">
                                <div className=""> <img
                                    src="../../../../public/img/67a4aff3bd473222fe098cae_Recharge-IV-bottol-image.jpg"
                                    alt="Laptop Preview"
                                    className="mb-6 w-full object-cover"
                                /></div>
                                <div className=""> <img
                                    src="../../../../public/img/67a4affa2b4cfc3406b55a88_Recharge-IV-run-image.jpg"
                                    alt="Laptop Preview"
                                    className=" w-full object-cover"
                                /></div>
                            </div>

                        </div>


                        <h2 className="text-5xl font-bold mb-6">Icons and Illustrations</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            The website required vibrant icons and illustrations to capture users'
                            attention and complement the overall design. We created dynamic visuals
                            that embody the energetic nature of the website.
                        </p>
                        <div className="">
                            <div className="">
                                <img
                                    src="../../../../public/img/67a4b008388e1d85acd1b2b9_Recharge-IV-icon-ilustration.jpg"
                                    alt="Laptop Preview"
                                    className="mb-10 mt-6 w-full object-cover"
                                />
                            </div>
                            <div className="double">
                                <div className="">
                                    <img
                                        src="../../../../public/img/67a4b015c15da70c2c834cec_Recharge-IV-mobile-responsive.jpg"
                                        alt="Laptop Preview"
                                        className="mb-6 w-full object-cover"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="../../../../public/img/67a4b01c4f9b1345b29fc580_Recharge-IV-ios-version.jpg"
                                        alt="Laptop Preview"
                                        className="mb-6 w-full object-cover"
                                    />
                                </div>
                            </div>


                            <div className=""> <img
                                src="../../../../public/img/67a4b0280cd95fc19d5c0397_Recharge-IV-responsive-view.jpg"
                                alt="Laptop Preview"
                                className="mb-6 w-full object-cover"
                            /></div>



                        </div>


                        <h2 className="text-5xl font-bold   mb-6">Responsiveness</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            We ensured the platform is easily accessible from any device, allowing users to book drips seamlessly while maintaining a consistent experience across all screen sizes.
                        </p>
                        <div className="">
                            <div className="">
                                <img
                                    src="../../../../public/img/67a4ae8e85d92a257c92c5ca_Recharge-IV-macbook-version.jpg"
                                    alt="Laptop Preview"
                                    className=" mb-10 w-full object-cover"
                                />
                            </div>
                            <div className="">
                                <img
                                    src="../../../../public/img/67d68acd83c0ed0c6c7555bd_fff.jpg"
                                    alt="Laptop Preview"
                                    className="mb-6 w-full object-cover"
                                />
                            </div>
                        </div>

                    </section>
                </main>
                </div>
           
        </div>
    );
};

export default CaseStudyLayout;
