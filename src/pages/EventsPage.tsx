import { FC } from 'react';
import EventCard from '@/components/EventCard';
import { events } from '../data/events.ts';

const EventsPage: FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-black mb-4">BASH 2025</h1>
          <p className="text-gray-700 text-xl">
            Engage. Innovate. Dominate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 