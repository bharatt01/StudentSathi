import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b-2 border-[#2D2D2D] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-sm font-black uppercase tracking-wide text-[#2D2D2D] hover:text-[#2D5016] transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

const InstituteSidebar = () => {
  const [feeRange, setFeeRange] = useState([0, 200000]);

  const cities = ['Delhi', 'Kota', 'Hyderabad', 'Jaipur', 'Pune', 'Bangalore'];
  const exams = ['IIT-JEE', 'NEET', 'UPSC', 'CAT/MBA', 'Banking', 'CA/CS', 'SSC'];
  const modes = ['Classroom', 'Online', 'Hybrid'];
  const successRates = ['Above 90%', '80-90%', '70-80%', 'Below 70%'];
  const discounts = ['₹5,000', '₹7,000', '₹8,000', '₹10,000'];

  return (
    <aside className="bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#2D2D2D]">
        <Filter className="w-5 h-5 text-[#2D5016]" />
        <h3 className="text-lg font-black uppercase tracking-tight text-[#2D2D2D]">Filters</h3>
      </div>

      {/* City Filter */}
      <FilterSection title="City">
        <div className="space-y-2">
          {cities.map((city) => (
            <label key={city} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#2D5016] peer-checked:border-[#2D5016] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#2D5016] transition-colors">{city}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Fee Range */}
      <FilterSection title="Course Fee">
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-black text-[#666]">
            <span>₹0</span>
            <span>₹2,00,000</span>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={feeRange[1]}
            onChange={(e) => setFeeRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-[#E8E2D8] border border-[#2D2D2D] appearance-none cursor-pointer accent-[#2D5016]"
          />
          <div className="bg-[#E8E2D8] border border-[#2D2D2D] px-3 py-2 text-center">
            <span className="text-sm font-black text-[#2D2D2D]">Up to ₹{feeRange[1].toLocaleString()}</span>
          </div>
        </div>
      </FilterSection>

      {/* Exam Type */}
      <FilterSection title="Exam Preparation">
        <div className="space-y-2">
          {exams.map((exam) => (
            <label key={exam} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#2D5016] peer-checked:border-[#2D5016] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#2D5016] transition-colors">{exam}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Mode */}
      <FilterSection title="Teaching Mode">
        <div className="space-y-2">
          {modes.map((mode) => (
            <label key={mode} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#2D5016] peer-checked:border-[#2D5016] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#2D5016] transition-colors">{mode}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Success Rate */}
      <FilterSection title="Success Rate">
        <div className="space-y-2">
          {successRates.map((rate) => (
            <label key={rate} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#2D5016] peer-checked:border-[#2D5016] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#2D5016] transition-colors">{rate}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Discount Amount */}
      <FilterSection title="Discount on Fee">
        <div className="flex flex-wrap gap-2">
          {discounts.map((d) => (
            <button
              key={d}
              className="px-3 py-1.5 bg-white border-2 border-[#2D2D2D] text-xs font-black uppercase hover:bg-[#2D5016] hover:text-white hover:border-[#2D5016] transition-colors"
            >
              {d}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Apply Button */}
      <button className="w-full mt-6 bg-[#2D5016] text-white py-4 font-black uppercase tracking-widest border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
        Apply Filters
      </button>

      <button className="w-full mt-3 bg-white text-[#2D2D2D] py-3 font-black uppercase tracking-widest border-2 border-[#2D2D2D] hover:bg-[#E8E2D8] transition-colors text-xs">
        Reset All
      </button>
    </aside>
  );
};

export default InstituteSidebar;