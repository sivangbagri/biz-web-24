import React from 'react';

import asthaImg from '../assets/images/astha_shetty.png';
import aryanImg from '../assets/images/aryan_sharma.jpeg';
import hrishitImg from '../assets/images/hrishit_yelchuri.png';


const MeetTheHelm: React.FC = () => {
    const members = [
        {
            name: 'Astha Shetty',
            role: 'Secretary',
            description: 'A visionary leader with a knack for strategic thinking and innovation.',
            image: asthaImg,
            linkedin: "https://linkedin.com/in/aastha-shetty-4bb85824a",
            instagram : "https://www.instagram.com/aastha09_02?igsh=MXRhZHZ2d3c3NWduYw==",
        },
        {
            name: 'Aryan Sharma',
            role: 'General Secretary',
            description: 'Passionate about fostering teamwork and ensuring smooth operations.',
            image: aryanImg,
            linkedin: "https://linkedin.com/in/aryan-sharma-100841255",
            instagram: "https://www.instagram.com/aryan_sharma2907?igsh=dmh4MDFuc2wyYzFq",
        },
        {
            name: 'Hrishit Yelchuri',
            role: 'General Secretary',
            description: 'Committed to driving growth and creating impactful initiatives.',
            image: hrishitImg,
            linkedin: "https://linkedin.com/in/hrishit-yelchuri-66837824a",
            instagram : "https://www.instagram.com/dripp.hrishit?igsh=MXFrcTA5bXl6MWkwaA==",
        },
    ];

    return (
        <div className="p-20 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Meet the Helm</h1>
            <p className="text-lg text-center mb-12 text-gray-600">
                Meet the visionary minds driving the Business Club IIT (BHU). Our team comprises dynamic leaders with a passion for fostering innovation, teamwork, and growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105  duration-300"
                    >
                        <div className="bg-gradient-to-tr from-blue-50 to-gray-100">
                            <div className="w-40 h-40 mx-auto rounded-full border-4 border-white overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                    style={{ aspectRatio: '1 / 1' }}
                                />
                            </div>

                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                            <p className="text-sm font-semibold mb-4">{member.role}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                        <div className="p-4 bg-gray-100 flex justify-center gap-4">
                            <a
                                href={member.linkedin}
                                className="hover:text-indigo-800 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={member.instagram}
                                className="hover:text-indigo-800 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetTheHelm;