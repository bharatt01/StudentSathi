import React from 'react';
import { BookOpen, Search, MapPin, SlidersHorizontal } from 'lucide-react';

const InstituteHero = () => {
  return (
    <section className="bg-[#2D2D2D] pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#2D5016] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#F4D03F] opacity-5 -rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#2D5016] p-2 border-2 border-white rotate-[-3deg]">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-[#F4D03F] text-xs font-black uppercase tracking-[0.3em]">Browse Institutes</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Crack Your <span className="text-[#F4D03F]">Dream Exam</span> For Less
        </h1>
        <p className="text-[#999] text-lg max-w-2xl mb-10 font-medium">
          Browse 350+ top coaching institutes for IIT-JEE, NEET, UPSC, CAT, and more. Save ₹5,000 - ₹10,000 on course fees when you enroll through studentsathi.
        </p>

        {/* Search Bar */}
        <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-3 shadow-[6px_6px_0px_0px_#000] max-w-3xl">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              <input
                type="text"
                placeholder="Search institute by name or exam..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] placeholder-[#999] text-sm font-bold focus:outline-none"
              />
            </div>
            <div className="hidden sm:block relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              <select className="pl-12 pr-8 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] text-sm font-bold focus:outline-none appearance-none cursor-pointer">
                <option>All Cities</option>
                <option>Delhi</option>
                <option>Kota</option>
                <option>Hyderabad</option>
                <option>Jaipur</option>
                <option>Pune</option>
              </select>
            </div>
            <button className="bg-[#2D5016] hover:bg-[#1E3A10] text-white px-6 py-4 font-black uppercase tracking-wide text-sm border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] hover:shadow-[1px_1px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden md:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteHero;