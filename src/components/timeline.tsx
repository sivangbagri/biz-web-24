import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Users, BookOpen, Database, Trophy, Lightbulb, Briefcase } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      id: 1,
      title: "Freshers' Introduction",
      month: "August",
      description: "A session to welcome and introduce newcomers to the club's vision, activities, and structure.",
      icon: <Users className="w-6 h-6" />,
      color: "#00A9FF"
    },
    {
      id: 2,
      title: "Casebook Launch",
      month: "October",
      description: "Launch of our comprehensive casebook, a curated resource offering insights into consulting frameworks, business strategies, and real-world examples.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#00A9FF"
    },
    {
      id: 3,
      title: "Datacrux Bootcamp",
      month: "December",
      description: "A hands-on bootcamp focused on data analytics tools and techniques, providing practical training for internships and projects.",
      icon: <Database className="w-6 h-6" />,
      color: "#00A9FF"
    },
    {
      id: 4,
      title: "B.A.S.H.",
      month: "January",
      description: "Our flagship event featuring high-stakes competitions in portfolio management, product management, and more.",
      icon: <Trophy className="w-6 h-6" />,
      color: "#00A9FF"
    },
    {
      id: 5,
      title: "Technex Riqueza",
      month: "February-March",
      description: "An engaging event held during Technex, focusing on finance, entrepreneurship, and innovative ideas.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#00A9FF"
    },
    {
      id: 6,
      title: "Live Projects",
      month: "February-March",
      description: "Industry-sponsored live projects offering students the opportunity to apply theoretical knowledge to real-world challenges.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#00A9FF"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-500">
          Timeline
        </h1>
        <p className="text-center text-gray-600 text-xl mb-12 max-w-2xl mx-auto">
          Explore our meticulously planned events throughout the academic year
        </p>
        
        <VerticalTimeline>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.month}
              dateClassName="text-blue-600 text-lg"
              contentStyle={{
                background: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
              iconStyle={{
                background: event.color,
                color: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              icon={event.icon}
              className="hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="group cursor-pointer">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {event.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;