import React, { useState } from 'react';
import { Calculator, ArrowRight, IndianRupee } from 'lucide-react';

const SavingsCalculator = () => {
  const [category, setCategory] = useState('college');
  const [originalAmount, setOriginalAmount] = useState(100000);

  const categories = [
    { id: 'college', label: 'College Fee', min: 50000, max: 500000, step: 10000, avgDiscount: 8 },
    { id: 'hostel', label: 'Hostel Rent (Annual)', min: 60000, max: 300000, step: 5000, avgDiscount: 12 },
    { id: 'pg', label: 'PG Rent (Annual)', min: 72000, max: 360000, step: 6000, avgDiscount: 10 },
    { id: 'coaching', label: 'Coaching Fee', min: 30000, max: 200000, step: 5000, avgDiscount: 7 },
  ];

  const currentCat = categories.find(c => c.id === category);
  const savings = Math.round(originalAmount * (currentCat.avgDiscount / 100));
  const discountedAmount = originalAmount - savings;

  return (
    <section className="py-24 bg-[#2D2D2D] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#C41E3A] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#F4D03F] opacity-10 -rotate-12"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#000]">
            Calculate Your Savings
          </span>
          <h2 className="text-5xl font-black text-white uppercase tracking-tight mb-4">
            See How Much <span className="text-[#F4D03F]">You'll Save</span>
          </h2>
          <p className="text-[#999] text-lg max-w-2xl mx-auto font-medium">
            Use our calculator to estimate your savings across colleges, hostels, PGs, and coaching institutes.
          </p>
        </div>

        <div className="bg-[#F5F1EB] border-4 border-[#2D2D2D] shadow-[12px_12px_0px_0px_#000] p-8 md:p-12">
          {/* Category Selection */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategory(cat.id);
                  setOriginalAmount(cat.min);
                }}
                className={`px-6 py-3 text-sm font-black uppercase tracking-wide border-2 transition-all ${
                  category === cat.id
                    ? 'bg-[#C41E3A] text-white border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D]'
                    : 'bg-white text-[#2D2D2D] border-[#2D2D2D] hover:bg-[#E8E2D8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-black text-[#2D2D2D] uppercase tracking-wide">
                Original Amount
              </label>
              <div className="flex items-center gap-2 bg-[#E8E2D8] border-2 border-[#2D2D2D] px-4 py-2">
                <IndianRupee className="w-4 h-4 text-[#2D2D2D]" />
                <span className="text-lg font-black text-[#2D2D2D]">{originalAmount.toLocaleString()}</span>
              </div>
            </div>
            <input
              type="range"
              min={currentCat.min}
              max={currentCat.max}
              step={currentCat.step}
              value={originalAmount}
              onChange={(e) => setOriginalAmount(parseInt(e.target.value))}
              className="w-full h-3 bg-[#E8E2D8] border-2 border-[#2D2D2D] appearance-none cursor-pointer accent-[#C41E3A]"
            />
            <div className="flex justify-between text-xs font-bold text-[#666] mt-2">
              <span>₹{currentCat.min.toLocaleString()}</span>
              <span>₹{currentCat.max.toLocaleString()}</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#2D2D2D] p-6 text-center shadow-[4px_4px_0px_0px_#2D2D2D]">
              <p className="text-xs font-black uppercase text-[#666] tracking-wide mb-2">Original Fee</p>
              <p className="text-3xl font-black text-[#2D2D2D]">₹{originalAmount.toLocaleString()}</p>
            </div>
            <div className="bg-[#C41E3A] border-2 border-[#2D2D2D] p-6 text-center shadow-[4px_4px_0px_0px_#000]">
              <p className="text-xs font-black uppercase text-white/80 tracking-wide mb-2">You Save</p>
              <p className="text-3xl font-black text-white">₹{savings.toLocaleString()}</p>
              <p className="text-xs text-white/80 font-bold mt-1">({currentCat.avgDiscount}% off)</p>
            </div>
            <div className="bg-[#2D5016] border-2 border-[#2D2D2D] p-6 text-center shadow-[4px_4px_0px_0px_#000]">
              <p className="text-xs font-black uppercase text-white/80 tracking-wide mb-2">Final Fee</p>
              <p className="text-3xl font-black text-white">₹{discountedAmount.toLocaleString()}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <button className="bg-[#2D2D2D] hover:bg-[#C41E3A] text-white px-10 py-4 font-black uppercase tracking-widest border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-3">
              Start Saving Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;