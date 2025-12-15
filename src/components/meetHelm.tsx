import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import bhoomiImg from "../assets/images/bhoomi_sharma.jpeg";
import adityaImg from "../assets/images/aditya_namdeo.jpeg";
import sagnikImg from "../assets/images/sagnik_giri.jpeg";

const MeetTheHelm: React.FC = () => {
  const members = [
    {
      name: "Bhoomi Sharma",
      role: "Secretary",
      description:
        "A visionary leader with a knack for strategic thinking and innovation.",
      image: bhoomiImg,
      linkedin: "https://www.linkedin.com/in/bhoomi-sharma-16395736a",
      instagram:
        "https://www.instagram.com/bhoomi_3045",
    },
    {
      name: "Aditya Namdeo",
      role: "Joint Secretary",
      description:
        "Passionate about fostering teamwork and ensuring smooth operations.",
      image: adityaImg,
      linkedin: "https://www.linkedin.com/in/aditya-namdeo-922aaa27b",
      instagram:
        "https://www.instagram.com/aditya_dakait",
    },
    {
      name: "Sagnik Giri",
      role: "Joint Secretary",
      description:
        "Committed to driving growth and creating impactful initiatives.",
      image: sagnikImg,
      linkedin: "https://www.linkedin.com/in/sagnik-giri-5a8494287",
      instagram:
        "https://www.instagram.com/sagnik4268",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Meet the Helm
      </h1>
      <p className="text-lg text-center mb-12 text-gray-200">
        Meet the visionary minds driving the Business Club IIT (BHU). Our team
        comprises dynamic leaders with a passion for fostering innovation,
        teamwork, and growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="backdrop-blur-xl border-1 border-gray-500 shadow-gray-400 rounded-lg p-6 hover:shadow-sm hover:scale-105  duration-300"
          >
            <div>
              <div className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 mx-auto rounded-full border-4 border-white overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-white text-2xl font-bold mb-2">
                {member.name}
              </h2>
              <p className="text-white text-sm font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-200">{member.description}</p>
            </div>
            <div className="p-4 text-white backdrop-blur-3xl flex justify-center gap-8">
              <a
                href={member.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href={member.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheHelm;
