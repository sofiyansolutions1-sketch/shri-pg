import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Star } from 'lucide-react';

const rooms = [
  {
    id: 'single',
    name: 'Single Sharing',
    image: 'https://iili.io/BrE5dxa.png',
    tag: 'Private'
  },
  {
    id: 'single-v2',
    name: 'Premium Single',
    image: 'https://iili.io/BrhZ9RI.png',
    tag: 'Safe'
  },
  {
    id: 'double',
    name: 'Double Sharing',
    image: 'https://iili.io/BrhbzbI.png',
    tag: 'Popular'
  }
];

export default function RoomCategories() {
  const handleBookNow = () => {
    window.dispatchEvent(new CustomEvent('changeTab', { detail: 'inquiry' }));
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-display font-bold text-gray-900">Select Your Room</h2>
          <p className="text-gray-500 text-xs md:text-base">Modern living spaces for students & professionals</p>
        </div>

        {/* Side Scrolling Container for Mobile */}
        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex-shrink-0 w-[240px] md:w-full bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
            >
              <div className="relative h-32 md:h-48">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600/90 text-white px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {room.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-bold text-sm md:text-lg text-gray-900">{room.name}</h3>
                <button 
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
