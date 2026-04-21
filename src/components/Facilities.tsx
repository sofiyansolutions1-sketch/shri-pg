import React from 'react';
import { Wifi, Home, BadgeIndianRupee, Zap, Fan, MapPin, Phone, MessageSquare, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const coreFacilities = [
  { id: 'wifi', name: 'Free WiFi', icon: Wifi, color: 'bg-blue-50 text-blue-600', desc: 'High speed internet' },
  { id: 'family', name: 'Family Stay', icon: Home, color: 'bg-green-50 text-green-600', desc: 'Space for everyone' },
  { id: 'price', name: 'Affordable', icon: BadgeIndianRupee, color: 'bg-amber-50 text-amber-600', desc: 'Best price in Cantt' },
  { id: 'ac', name: 'AC Rooms', icon: Fan, color: 'bg-cyan-50 text-cyan-600', desc: 'Stay cool all year' },
  { id: 'amenities', name: 'Amenities', icon: Zap, color: 'bg-purple-50 text-purple-600', desc: 'Multiple facilities' },
  { id: 'location', name: 'Prime Location', icon: MapPin, color: 'bg-rose-50 text-rose-600', desc: 'Near Railway Station' },
];

export default function Facilities() {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900">Explore our facilities</h2>
        <button className="text-blue-600 text-sm font-semibold hover:underline">View all</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {coreFacilities.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer text-center group"
          >
            <div className={`p-4 rounded-xl mb-3 transition-transform group-hover:scale-110 ${item.color}`}>
              <item.icon className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold text-gray-800">{item.name}</p>
            <p className="text-[10px] text-gray-500 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
