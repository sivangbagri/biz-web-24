import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/event/${event.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer 
                 transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-fit object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{event.name}</h2>
        <p className="text-gray-600 mb-4 h-12 overflow-hidden">{event.summary}</p>
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="text-green-600 font-semibold">{event.prizeMoney}</span>
          <button 
            className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800"
            onClick={(e) => {
              e.stopPropagation();
              window.open(event.registrationLink, '_blank');
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 