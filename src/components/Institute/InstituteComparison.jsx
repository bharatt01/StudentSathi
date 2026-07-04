import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

const InstituteComparison = () => {
  const comparisons = [
    { feature: 'Course Fee', institute1: '₹1,10,000', institute2: '₹1,20,000', winner: 1 },
    { feature: 'Study Material', institute1: true, institute2: true, winner: 0 },
    { feature: 'Test Series', institute1: 'Unlimited', institute2: '10 Tests', winner: 1 },
    { feature: 'Doubt Sessions', institute1: 'Daily', institute2: 'Weekly', winner: 1 },
    { feature: 'Mock Interviews', institute1: true, institute2: false, winner: 1 },
    { feature: 'Success Guarantee', institute1: 'Money Back', institute2: 'None', winner: 1 },
    { feature: 'Total Savings', institute1: '₹10,000+', institute2: '₹0', winner: 1 },
  ];

  return (
    <section className="py-16 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-[#2D5016] text-white px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-4 shadow-[3px_3px_0px_0px_#2D2D2D]">
            Compare & Save
          </span>
          <h2 className="text-4xl font-black text-[#2D2D2D] uppercase tracking-tight">
            Why Enroll Through <span className="text-[#2D5016]">studentsathi?</span>
          </h2>
        </div>

        <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[8px_8px_0px_0px_#2D2D2D] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b-2 border-[#2D2D2D]">
            <div className="p-6 bg-[#E8E2D8] font-black text-[#2D2D2D] uppercase text-sm tracking-wide flex items-center">
              Feature
            </div>
            <div className="p-6 bg-[#2D5016] text-white font-black uppercase text-sm tracking-wide text-center border-l-2 border-[#2D2D2D]">
              With studentsathi
            </div>
            <div className="p-6 bg-[#2D2D2D] text-white font-black uppercase text-sm tracking-wide text-center border-l-2 border-[#2D2D2D]">
              Direct Enrollment
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div key={index} className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b-2 border-[#2D2D2D]' : ''}`}>
              <div className="p-5 bg-[#E8E2D8] font-bold text-[#2D2D2D] text-sm flex items-center">
                {row.feature}
              </div>
              <div className="p-5 bg-[#2D5016]/5 text-[#2D2D2D] font-black text-sm text-center border-l-2 border-[#2D2D2D] flex items-center justify-center gap-2">
                {typeof row.institute1 === 'boolean' ? (
                  row.institute1 ? <Check className="w-5 h-5 text-[#2D5016]" /> : <X className="w-5 h-5 text-[#C41E3A]" />
                ) : (
                  <>
                    {row.institute1}
                    {row.winner === 1 && <span className="bg-[#F4D03F] text-[#2D2D2D] px-2 py-0.5 text-[10px] uppercase">Better</span>}
                  </>
                )}
              </div>
              <div className="p-5 bg-white text-[#666] font-bold text-sm text-center border-l-2 border-[#2D2D2D] flex items-center justify-center gap-2">
                {typeof row.institute2 === 'boolean' ? (
                  row.institute2 ? <Check className="w-5 h-5 text-[#2D5016]" /> : <X className="w-5 h-5 text-[#C41E3A]" />
                ) : (
                  row.institute2
                )}
              </div>
            </div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#E8E2D8]"></div>
            <div className="p-6 bg-[#2D5016]/10 border-l-2 border-[#2D2D2D] flex justify-center">
              <button className="bg-[#2D5016] text-white px-6 py-3 font-black uppercase text-xs tracking-widest border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] hover:shadow-[1px_1px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 bg-white border-l-2 border-[#2D2D2D] flex justify-center">
              <button className="bg-[#999] text-white px-6 py-3 font-black uppercase text-xs tracking-widest border-2 border-[#2D2D2D] cursor-not-allowed">
                No Discount
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteComparison;