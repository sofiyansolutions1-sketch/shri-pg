/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import RoomCategories from './components/RoomCategories';
import Facilities from './components/Facilities';
import HomeGalleryShowcase from './components/HomeGalleryShowcase';
import Gallery from './components/Gallery';
import BookingModule from './components/BookingModule';
import InquiryForm from './components/InquiryForm';
import ContactAndLocation from './components/ContactAndLocation';
import BottomNav from './components/BottomNav';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  React.useEffect(() => {
    const handleTabChange = (e: any) => setActiveTab(e.detail);
    window.addEventListener('changeTab', handleTabChange);
    return () => window.removeEventListener('changeTab', handleTabChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />
      
      <main className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Above Header Facility Bar */}
              <div className="px-4 md:px-8 mt-4">
                <div className="bg-blue-600/5 border border-blue-100 rounded-2xl p-3 flex flex-wrap items-center justify-center gap-4 md:gap-8 overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    AC & Non-AC Rooms
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    24/7 RO Water
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    High Speed WiFi
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    Daily Cleaning
                  </div>
                </div>
              </div>

              <Banner />
              
              {/* Below Header Room Selection */}
              <RoomCategories />

              <Facilities />
              <HomeGalleryShowcase />
              
              {/* Trust Section */}
              <section className="px-4 md:px-8 py-12">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">Shri Sarvad PG & Homestay</h2>
                    <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                      Experience the hospitality of Kashi with modern amenities and a home-like environment. Located in the heart of Cantt, Varanasi, we offer safe and affordable stays for families, groups, and individuals.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-10">
                      <button 
                        onClick={() => setActiveTab('book')}
                        className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
                      >
                        Book Now
                      </button>
                      <button 
                        onClick={() => setActiveTab('inquiry')}
                        className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20"
                      >
                        Inquiry
                      </button>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
                </div>
              </section>

              <ContactAndLocation />
            </motion.div>
          )}

          {activeTab === 'book' && (
            <motion.div
              key="book"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <BookingModule />
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <Gallery />
            </motion.div>
          )}

          {activeTab === 'inquiry' && (
            <motion.div
              key="inquiry"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <InquiryForm />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-6"
            >
              <ContactAndLocation />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Desktop */}
      <footer className="hidden md:block bg-white border-t border-gray-200 pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-gray-900">Shri Sarvad PG</h3>
              <p className="mt-4 text-gray-500 max-w-md">
                Your second home in Varanasi. Premium hostelry services with a focus on hygiene, comfort, and affordability.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-blue-600 transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('book')} className="hover:text-blue-600 transition-colors">Book a Stay</button></li>
                <li><button onClick={() => setActiveTab('gallery')} className="hover:text-blue-600 transition-colors">Gallery</button></li>
                <li><button onClick={() => setActiveTab('inquiry')} className="hover:text-blue-600 transition-colors">Inquiry</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-blue-600 transition-colors">Location</button></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Kashi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Office</h4>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-blue-600" /> S 21/1.16 L3A, Vijay Nagar Colony, Pared Kothi, Varanasi</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-600" /> +91 94511 13566</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600" /> shrisarvad123@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Shri Sarvad PG Varanasi. All rights reserved.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <CallButton />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

