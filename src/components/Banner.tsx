import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: 'https://iili.io/BrEFXlj.png',
    title: 'Comfortable & Affordable Stay',
    subtitle: 'Starting at ₹499 per day',
  },
  {
    id: 2,
    image: 'https://iili.io/BrE5dxa.png',
    title: 'AC Rooms with Free Wifi',
    subtitle: 'Premium amenities for guests',
  },
  {
    id: 3,
    image: 'https://iili.io/BrEKmhP.png',
    title: 'Near Cantt Railway Station',
    subtitle: 'Prime location in Varanasi',
  },
  {
    id: 4,
    image: 'https://iili.io/BrEfsnt.png',
    title: 'Safe & Secure Homestay',
    subtitle: 'Your family’s favorite PG',
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // 3 seconds as requested
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full h-[180px] md:h-[400px] overflow-hidden bg-gray-100 mt-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full relative rounded-2xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
            <img
              src={banners[index].image}
              alt={banners[index].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 text-white">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl md:text-5xl font-display font-bold leading-tight"
              >
                {banners[index].title}
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-sm md:text-lg mt-2"
              >
                {banners[index].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {banners.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'bg-white w-4' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons for Desktop */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
