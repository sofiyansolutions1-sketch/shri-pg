import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function CallButton() {
  return (
    <motion.a
      href="tel:+919451113566"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-44 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors md:bottom-28 md:right-8"
      aria-label="Call Shri Sarvad"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-blue-600"></span>
      </span>
    </motion.a>
  );
}
