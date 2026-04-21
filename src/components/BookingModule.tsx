import React, { useState } from 'react';
import { format, addDays, startOfToday, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, Users, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function BookingModule() {
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('Standard AC');
  const [step, setStep] = useState(1);

  const dates = Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i));

  const roomTypes = [
    { name: 'Standard AC', price: 999 },
    { name: 'Deluxe Family', price: 1499 },
    { name: 'Economy Non-AC', price: 599 },
  ];

  const handleNext = () => setStep(prev => prev + 1);

  return (
    <section id="book" className="py-12 bg-white px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-gray-900">Book Your Stay</h2>
          <p className="text-gray-500 mt-2">Secure your room at Shri Sarvad in just a few clicks</p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 hide-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 min-w-fit px-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                  step >= i ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                )}>
                  {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  step >= i ? "text-blue-600" : "text-gray-400"
                )}>
                  {i === 1 ? 'Schedule' : i === 2 ? 'Details' : 'Confirm'}
                </span>
                {i < 3 && <div className="w-8 md:w-16 h-[1px] bg-gray-200 mx-2" />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    Select Check-in Date
                  </label>
                  <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar snap-x">
                    {dates.map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date)}
                        className={cn(
                          "min-w-[80px] p-4 rounded-2xl border-2 transition-all flex flex-col items-center snap-center",
                          isSameDay(selectedDate, date)
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
                            : "bg-white border-gray-100 text-gray-600 hover:border-blue-200"
                        )}
                      >
                        <span className="text-[10px] uppercase font-bold opacity-60">{format(date, 'EEE')}</span>
                        <span className="text-xl font-bold">{format(date, 'd')}</span>
                        <span className="text-[10px] font-medium">{format(date, 'MMM')}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      Number of Guests
                    </label>
                    <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100">
                      <button 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200"
                      >-</button>
                      <span className="flex-1 text-center font-bold text-lg">{guests}</span>
                      <button 
                        onClick={() => setGuests(guests + 1)}
                        className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold hover:bg-gray-200"
                      >+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3">Room Selection</label>
                    <select 
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-white p-4 rounded-2xl border border-gray-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {roomTypes.map(t => <option key={t.name} value={t.name}>{t.name} - ₹{t.price}/day</option>)}
                    </select>
                  </div>
                </div>

                <button 
                  onClick={handleNext}
                  className="w-full mt-8 bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-lg"
                >
                  Continue to Details <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none" />
                  <input type="tel" placeholder="Mobile Number" className="w-full p-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-blue-600 outline-none" />
                </div>
                <button 
                  onClick={handleNext}
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 mt-6"
                >
                  Confirm Booking <CheckCircle2 className="w-5 h-5" />
                </button>
                <button onClick={() => setStep(1)} className="w-full text-gray-500 font-medium py-2">Go Back</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Booking Request Sent!</h3>
                <p className="text-gray-500 mt-2 mb-8">We will contact you shortly on your mobile to confirm your stay at Shri Sarvad.</p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-left space-y-2">
                  <p className="text-sm"><strong>Check-in:</strong> {format(selectedDate, 'PPP')}</p>
                  <p className="text-sm"><strong>Room:</strong> {roomType}</p>
                  <p className="text-sm"><strong>Guests:</strong> {guests}</p>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Make another booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
