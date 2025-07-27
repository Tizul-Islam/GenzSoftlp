import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import MemberModal from './MemberModal'; // Adjust the path as needed

const ExpertTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const teamMembers = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            title: "CHIEF TECHNOLOGY OFFICER",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            joinDate: "January 2018",
            bio: "Ph.D. in Computer Science with 15+ years of experience in AI research and development. Leads our technical strategy and innovation initiatives."
        },
        {
            id: 2,
            name: "James Chen",
            title: "DIRECTOR OF ENGINEERING",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            joinDate: "March 2019",
            bio: "Former Google engineer specializing in scalable systems architecture. Oversees all engineering teams and technical operations."
        },
        {
            id: 3,
            name: "Priya Patel",
            title: "HEAD OF PRODUCT",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            joinDate: "June 2020",
            bio: "Product management expert with a background in UX design. Drives product vision and customer-centric development."
        }
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedMember(null);
    };

    return (
        <div className="py-16 bg-white relative">
            {/* Modal for Member Details */}
           
            {showModal && (
                <MemberModal 
                    member={selectedMember} 
                    onClose={closeModal} 
                />
            )}
           

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Executive Leadership
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Meet the visionary leaders shaping our company's future
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="text-center group relative"
                        >
                            {/* Team Member Card */}
                            <div className="relative overflow-hidden">
                                {/* Image Container with Centered Icon */}
                                <div 
                                    className="mx-auto h-80 w-60 bg-gray-200 mb-6 flex items-center justify-center transition-all duration-300 group-hover:opacity-90 relative bg-cover bg-center"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                >
                                    {/* Overlay for better text visibility */}
                                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                    
                                    {/* Centered Icon with Hover Effect */}
                                    <div 
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                        onClick={() => handleMemberClick(member)}
                                    >
                                        <div className="p-4 rounded-full transition-all duration-300 transform group-hover:scale-110">
                                            <FontAwesomeIcon 
                                                icon={faArrowUpRightFromSquare} 
                                                className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-30 -m-2 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Member Details */}
                                <div className="px-4">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-md text-blue-600 font-medium mt-2">
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertTeam;