import React from 'react';
import { Search, MapPin, ChevronDown, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3b82f6] text-white p-1.5 md:p-2 md:px-8 shadow-md">
      <div className="max-w-7xl mx-auto space-y-1 md:space-y-2">
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            <div className="text-xs md:text-sm font-medium">
              <div className="flex items-center gap-1">
                <span className="whitespace-nowrap">Cantt, Varanasi</span>
                <ChevronDown className="w-3 h-3" />
                <span className="ml-1 md:ml-3 px-1.5 py-0.5 rounded bg-yellow-400 text-blue-900 font-black text-[8px] md:text-[10px] tracking-tight uppercase shadow-sm border border-yellow-200">Shri Sarvad PG</span>
              </div>
              <p className="text-[10px] opacity-80 hidden md:block">Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="hidden lg:flex items-center px-3 py-1.5 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 border border-white/20 font-black text-[10px] uppercase tracking-wider text-white shadow-inner">
               Shri Sarvad PG
             </span>
             <button 
               onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'gallery' }))}
               className="hidden md:block text-sm font-bold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
             >
               Gallery
             </button>
             <button 
               onClick={() => window.dispatchEvent(new CustomEvent('changeTab', { detail: 'inquiry' }))}
               className="hidden md:block text-sm font-bold bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-white/90 transition-all"
             >
               Inquiry
             </button>
             <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
               <ShoppingCart className="w-5 h-5 text-white" />
             </div>
          </div>
        </div>

        {/* Search Bar - Urban Company Style */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for 'AC rooms', 'Wifi', etc."
            className="w-full bg-white text-gray-800 py-1.5 md:py-2 pl-12 pr-4 rounded-xl shadow-lg border-none focus:ring-2 focus:ring-white transition-all text-xs md:text-base font-medium placeholder:text-gray-400"
          />
        </div>
      </div>
    </nav>
  );
}
