import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Navigation } from 'lucide-react';

export default function ContactAndLocation() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.310464619969!2d82.9845323!3d25.3273117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzM4LjMiTiA4MsKwNTknMDQuMyJF!5e0!3m2!1sen!2sin!4v1650000000000";

  return (
    <section id="contact" className="py-12 bg-gray-50 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900">Reach Us</h2>
              <p className="text-gray-500 mt-2">Get in touch for group bookings or special inquiries.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+919451113566" className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Mobile</p>
                  <p className="font-bold text-gray-800">94511 13566</p>
                </div>
              </a>

              <a href="https://wa.me/919451113566" className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-gray-800">94511 13566</p>
                </div>
              </a>

              <a href="mailto:shrisarvad123@gmail.com" className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group sm:col-span-2">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="font-bold text-gray-800 truncate">shrisarvad123@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 text-gray-400 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Address</p>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    S 21/1.16 L3A, Vijay Nagar Colony, Pared Kothi, Varanasi, Uttar Pradesh 221002<br/>
                    <span className="text-blue-600 font-bold">(Near HOTEL GAUTAM GRAND)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location / Google Maps */}
          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.310464619969!2d82.9845323!3d25.3273117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db598444a17%3A0xc3f9a76e837a77a9!2sCantt%20Railway%20Station%20Varanasi!5e0!3m2!1sen!2sin!4v1713685590000!5m2!1sen!2sin"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
               <a 
                href="https://maps.google.com/?q=Pared+Kothi+Cantt+Varanasi" 
                target="_blank" 
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg"
               >
                 <Navigation className="w-4 h-4" /> Get Directions
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
