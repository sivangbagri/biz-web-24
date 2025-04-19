import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import ReactMarkdown from 'react-markdown';
import { Event } from '../../types/event';

const EventDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id) as Event;
  const [copied, setCopied] = useState(false);

  if (!event) return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-2xl text-gray-600">Event not found</div>
    </div>
  );

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide pop-up after 2 seconds
  };

  return (
    <div className="min-h-screen py-15" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}>
      <div className="max-w-6xl mx-auto p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-100 hover:text-gray-400 flex items-center"
        >
          <span className="mr-2">←</span> Back to Events
        </button>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-2/5 p-6 bg-gray-50">
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-fit object-cover rounded-lg shadow-md mb-6"
              />
              
              <div className="space-y-4">
                <button
                  onClick={() => window.open(event.registrationLink, '_blank')}
                  className="w-full bg-black text-white px-6 py-3 rounded-lg 
                            hover:bg-gray-800 transition duration-300 font-semibold"
                >
                  Register Now
                </button>
                
                <button
                  onClick={() => window.open(event.problemStatementLink, '_blank')}
                  className="w-full border-2 border-black text-black px-6 py-3 rounded-lg 
                            hover:bg-gray-100 transition duration-300 font-semibold"
                >
                  Problem Statement
                </button>
              </div>

              <div className="mt-6 border-t pt-6">
                <h3 className="font-semibold text-gray-700 mb-4">Contact Organizers:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {event.contacts.length > 0 ? (
                    event.contacts.map((contact, index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="font-medium">{contact.name}</p>
                        {contact.email && (
                          <a href={`mailto:${contact.email}`} className="text-sm text-blue-600 hover:underline">
                            {contact.email}
                          </a>
                        )}
                        <p 
                          className="text-sm text-gray-600 cursor-pointer transition duration-300 
                                     hover:text-green-600"
                          onClick={() => handleCopy(contact.phone)}
                        >
                          📞 {contact.phone}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No contact information available.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-3/5 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.name}</h1>
              
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-2">
                  Prize Pool: {event.prizeMoney}
                </h2>
                <div className="prose prose-headings:font-bold prose-headings:text-gray-900 
                              prose-p:text-gray-600 prose-strong:text-gray-900 
                              prose-ul:text-gray-600 prose-li:my-0 max-w-none">
                  <ReactMarkdown>{event.description}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        {copied && (
          <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded shadow-md transition-transform transform scale-100 animate-bounce">
            Phone number copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage; 