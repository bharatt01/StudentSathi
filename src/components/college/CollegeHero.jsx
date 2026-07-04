import React from 'react';
import { GraduationCap, Search, MapPin, SlidersHorizontal } from 'lucide-react';

const CollegeHero = () => {
  return (
    <section className="bg-[#2D2D2D] pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#C41E3A] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#F4D03F] opacity-5 -rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#C41E3A] p-2 border-2 border-white rotate-[-3deg]">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-[#F4D03F] text-xs font-black uppercase tracking-[0.3em]">Browse Colleges</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Find Your <span className="text-[#F4D03F]">Perfect College</span>
        </h1>
        <p className="text-[#999] text-lg max-w-2xl mb-10 font-medium">
          Browse 500+ partner colleges and universities. Save ₹5,000 - ₹10,000 on admission fees when you apply through StudentSathi.
        </p>

        {/* Search Bar */}
        <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-3 shadow-[6px_6px_0px_0px_#000] max-w-3xl">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              <input
                type="text"
                placeholder="Search college by name..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] placeholder-[#999] text-sm font-bold focus:outline-none"
              />
            </div>
            <div className="hidden sm:block relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              <select className="pl-12 pr-8 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] text-sm font-bold focus:outline-none appearance-none cursor-pointer">
                <option>All Locations</option>
                <option>Delhi NCR</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Pune</option>
              </select>
            </div>
            <button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-6 py-4 font-black uppercase tracking-wide text-sm border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] hover:shadow-[1px_1px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden md:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHero;