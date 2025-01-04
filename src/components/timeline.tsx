import React from "react";

interface Event {
  title: string;
  month: string;
  description: string;
}

const events: Event[] = [
  {
    title: "Freshers' Introduction",
    month: "August",
    description: "A session to welcome and introduce newcomers to the club's vision, activities, and structure.",
  },
  {
    title: "Casebook Launch",
    month: "October",
    description: "Launch of our comprehensive casebook, a curated resource offering insights into consulting frameworks, business strategies, and real-world examples.",
  },
  {
    title: "Datacrux Bootcamp",
    month: "December",
    description: "A hands-on bootcamp focused on data analytics tools and techniques, providing practical training for internships and projects.",
  },
  {
    title: "B.A.S.H. (Business Associates' Special Hours)",
    month: "January",
    description: "Our flagship event featuring high-stakes competitions in portfolio management, product management, and more.",
  },
  {
    title: "Technex Riqueza",
    month: "February-March",
    description: "An engaging event held during Technex, focusing on finance, entrepreneurship, and innovative ideas.",
  },
  {
    title: "Live Projects",
    month: "February-March",
    description: "Industry-sponsored live projects offering students the opportunity to apply theoretical knowledge to real-world challenges.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Timeline</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Explore our meticulously planned events throughout the academic year:
      </p>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-700 bg-gray-100 hover:scale-105 transition-transform duration-500 shadow-md p-4 rounded-md"
          >
            <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
            <p className="text-sm text-blue-500 italic">{event.month}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;