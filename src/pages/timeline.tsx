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
      color: "#ffffff"
    },
    {
      id: 2,
      title: "Casebook Launch",
      month: "October",
      description: "Launch of our comprehensive casebook, a curated resource offering insights into consulting frameworks, business strategies, and real-world examples.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#ffffff"
    },
    {
      id: 3,
      title: "Datacrux Bootcamp",
      month: "December",
      description: "A hands-on bootcamp focused on data analytics tools and techniques, providing practical training for internships and projects.",
      icon: <Database className="w-6 h-6" />,
      color: "#ffffff"
    },
    {
      id: 4,
      title: "B.A.S.H.",
      month: "January",
      description: "Our flagship event featuring high-stakes competitions in portfolio management, product management, and more.",
      icon: <Trophy className="w-6 h-6" />,
      color: "#ffffff"
    },
    {
      id: 5,
      title: "Technex Riqueza",
      month: "February-March",
      description: "An engaging event held during Technex, focusing on finance, entrepreneurship, and innovative ideas.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#ffffff"
    },
    {
      id: 6,
      title: "Live Projects",
      month: "February-March",
      description: "Industry-sponsored live projects offering students the opportunity to apply theoretical knowledge to real-world challenges.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#ffffff"
    },
  ];

  return (
    <div className=" min-h-screen py-25" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}
>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">
          Timeline
        </h1>
        <p className="text-center text-gray-200 text-xl mb-12 max-w-2xl mx-auto">
          Explore our meticulously planned events throughout the academic year
        </p>
        
        <VerticalTimeline>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.month}
              dateClassName="text-gray-100 text-lg"
              contentStyle={{
                background: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '1.5rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
              iconStyle={{
                background: event.color,
                color: '#000000',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              icon={event.icon}
              className="hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="group cursor-pointer">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-200 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
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