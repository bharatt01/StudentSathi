import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const ProcessHero = () => {
  return (
    <section className="bg-[#2D2D2D] pt-28 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#C41E3A] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#F4D03F] opacity-5 -rotate-12"></div>
      <div className="absolute top-40 left-1/4 w-32 h-32 bg-[#2D5016] opacity-10 rotate-45"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-3 bg-[#F4D03F] px-5 py-2 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000] mb-8">
          <Sparkles className="w-4 h-4 text-[#2D2D2D]" />
          <span className="text-[#2D2D2D] text-xs font-black uppercase tracking-[0.3em]">Simple & Transparent</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
          How <span className="text-[#F4D03F]">studentsathi</span><br />Works
        </h1>
        <p className="text-[#999] text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Getting ₹5,000 - ₹10,000 discount on your education is easier than you think. 
          Follow these 4 simple steps and start saving today.
        </p>

        <div className="flex justify-center">
          <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] px-8 py-4 shadow-[6px_6px_0px_0px_#000] inline-flex items-center gap-4">
            <span className="text-4xl font-black text-[#C41E3A]">4</span>
            <div className="text-left">
              <p className="text-sm font-black text-[#2D2D2D] uppercase tracking-wide">Simple Steps</p>
              <p className="text-xs text-[#666] font-medium">Save in under 48 hours</p>
            </div>
            <ArrowDown className="w-6 h-6 text-[#C41E3A] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;