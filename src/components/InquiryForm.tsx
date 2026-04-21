import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare, User, Phone, FileText } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '', // Added room type
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL in a professional way
    const welcome = `*Business Inquiry - Shri Sarvad PG*`;
    const details = `Name: ${formData.name}%0APhone: ${formData.phone}%0ARoom Type: ${formData.roomType || 'General Inquiry'}`;
    const userMessage = `Message: ${formData.message}`;
    
    const text = `${welcome}%0A%0A${details}%0A%0A${userMessage}%0A%0ASent via Shri Sarvad Website`;
    const whatsappUrl = `https://wa.me/919451113566?text=${text}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-blue-50 text-blue-600 rounded-3xl mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900">Make an Inquiry</h2>
          <p className="text-gray-500 mt-2">Fill the form below and we'll reply on WhatsApp instantly.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Mobile Number
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your contact number"
                className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Select Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="">General Inquiry</option>
              <option value="Single Sharing Room">Single Sharing Room</option>
              <option value="Double Sharing Room">Double Sharing Room</option>
              <option value="Triple Sharing Room">Triple Sharing Room</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Message / Specific Requirements
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your expected move-in date..."
              className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"
          >
            Submit Inquiry <Send className="w-5 h-5" />
          </motion.button>
        </form>
      </div>
    </section>
  );
}
