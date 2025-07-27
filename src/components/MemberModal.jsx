import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MemberModal = ({ member, }) => {
   


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    
                    
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div className="h-80 w-full bg-gray-200 bg-cover bg-center rounded-lg" 
                             style={{ backgroundImage: `url(${member.image})` }}>
                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                            <p className="text-blue-600 font-medium text-xl mb-4">{member.title}</p>
                            <p className="text-gray-500 mb-4">Member since {member.joinDate}</p>
                            <p className="text-gray-700 mb-6">{member.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default MemberModal;