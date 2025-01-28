import React from "react";
import { FaTrophy, FaAward, FaUsers } from "react-icons/fa";
import image1 from "../assets/images/rohitkoshy.jfif";
import image3 from "../assets/images/niteshsinha.jpg";
import image4 from "../assets/images/bipinsaha.jfif";
import image5 from "../assets/images/anuragverma.png";
import image6 from "../assets/images/arpitbeniwal.png";
import image2 from "../assets/images/vivekagarwal.png";

const OurAchievements: React.FC = () => {
  const achievements = [
    {
      title: "Outstanding Inter-IIT Performances",
      description:
        "Consistently achieving top positions and showcasing excellence at Inter-IIT competitions.",
      icon: <FaTrophy size={40} className="text-yellow-500" />,
    },
    {
      title: "Wins at National Contests",
      description:
        "Victories at prestigious contests like MICA PMx and ICC Challenge highlight our competitive edge.",
      icon: <FaAward size={40} className="text-blue-500" />,
    },
    {
      title: "Hosting Successful Events",
      description:
        "Organized highly engaging events with participants from across the country.",
      icon: <FaUsers size={40} className="text-red-500" />,
    },
  ];

  const image = [image1, image2, image3, image4, image5, image6 ];

  const speakers = [
    "Mr. Rohit Thomas Koshy - Director at EY India",
    "Mr. Vivek Aggarwal - Former VP at Goldman Sachs",
    "Mr. Nitesh Sinha - VP of Product at Zepto",
    "Mr. Bipin Saha - PARTNER, Titan Capital",
    "Mr. Anurag Verma - Director - PM at MakeMyTrip",
    "Mr. Arpit Beniwal - Head of Product, PokerBaazi",
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-gray-200 text-black">
      <header className="py-16 text-center bg-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold">Our Achievements</h1>
        <p className="mt-4 text-lg font-medium max-w-3xl mx-auto">
          We take pride in our accomplishments that reflect our dedication,
          teamwork, and passion for excellence.
        </p>
      </header>
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What We’ve Achieved
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-center">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
          Speakers List
        </h2>
        <ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:max-w-[70vw]">
          {speakers.map((speaker, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg transition duration-300 min-h-[350px] max-w-[280px] mx-auto hover:scale-105 cursor-default"
              style={{
                backgroundImage: `url(${image[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-opacity-40 rounded-lg"></div>
              <div className="z-10 flex flex-col justify-between h-full w-full">
                <span className="text-white font-bold text-xl w-[60px] h-[60px] bg-black relative -left-[24px] -top-[24px] rounded-b-full pt-[12px] text-center rounded-tl-lg">
                  {index + 1}
                </span>
                <span className="text-white text-sm text-center mt-auto bg-black bg-opacity-50 p-2 rounded-lg">
                  {speaker}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OurAchievements;