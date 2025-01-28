import React from 'react';
import { FaTrophy, FaAward, FaUsers } from 'react-icons/fa';

const OurAchievements: React.FC = () => {
  const achievements = [
    {
      title: 'Outstanding Inter-IIT Performances',
      description:
        'Consistently achieving top positions and showcasing excellence at Inter-IIT competitions.',
      icon: <FaTrophy size={40} className="text-yellow-500" />,
    },
    {
      title: 'Wins at National Contests',
      description:
        'Victories at prestigious contests like MICA PMx and ICC Challenge highlight our competitive edge.',
      icon: <FaAward size={40} className="text-blue-500" />,
    },
    {
      title: 'Hosting Successful Events',
      description:
        'Organized highly engaging events with participants from across the country.',
      icon: <FaUsers size={40} className="text-red-500" />,
    },
  ];

  const speakers = [
    'Mr. Rohit Thomas Koshy - Director at EY India',
    'Mr. Vivek Aggarwal - Former VP at Goldman Sachs',
    'Mr. Nitesh Sinha - VP of Product at Zepto',
    'Mr. Bipin Saha - PARTNER, Titan Capital',
    'Mr. Anurag Verma - PM at MakeMyTrip',
    'Mr. Arpit Beniwal - Head of Product, PokerBaazi',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-black">
      {/* Header Section */}
      <header className="py-16 text-center bg-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold">Our Achievements</h1>
        <p className="mt-4 text-lg font-medium max-w-3xl mx-auto">
          We take pride in our accomplishments that reflect our dedication,
          teamwork, and passion for excellence.
        </p>
      </header>

      {/* Achievements Section */}
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
              <div className="flex items-center justify-center mb-6">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">{achievement.title}</h3>
              <p className="text-gray-600 text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
          Speakers List
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6">
          {speakers.map((speaker, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300"
            >
              <span className="text-indigo-500 font-bold text-lg">{index + 1}.</span>
              <span className="text-gray-700 text-lg">{speaker}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OurAchievements;