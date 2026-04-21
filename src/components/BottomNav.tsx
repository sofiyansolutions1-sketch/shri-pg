import React from 'react';
import { Home, Calendar, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'book', label: 'Book', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'inquiry', label: 'Inquiry', icon: MessageSquare },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-6 py-2 pb-6 md:hidden">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-300",
              activeTab === tab.id ? "text-blue-600 scale-110" : "text-gray-400"
            )}
          >
            <tab.icon className={cn("w-6 h-6", activeTab === tab.id ? "fill-blue-50" : "")} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
