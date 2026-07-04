import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b-2 border-[#2D2D2D] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-sm font-black uppercase tracking-wide text-[#2D2D2D] hover:text-[#C41E3A] transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

const CollegeSidebar = () => {
  const [feeRange, setFeeRange] = useState([0, 300000]);

  const locations = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata'];
  const courses = ['B.Tech', 'MBBS', 'BBA', 'MBA', 'LLB', 'B.Sc', 'BCA', 'B.Arch'];
  const accreditations = ['NAAC A++', 'NAAC A+', 'NAAC A', 'NBA', 'UGC'];
  const discounts = ['₹5,000', '₹8,000', '₹10,000'];

  return (
    <aside className="bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#2D2D2D]">
        <Filter className="w-5 h-5 text-[#C41E3A]" />
        <h3 className="text-lg font-black uppercase tracking-tight text-[#2D2D2D]">Filters</h3>
      </div>

      {/* Location Filter */}
      <FilterSection title="Location">
        <div className="space-y-2">
          {locations.map((loc) => (
            <label key={loc} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{loc}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Fee Range */}
      <FilterSection title="Annual Fee Range">
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-black text-[#666]">
            <span>₹0</span>
            <span>₹3,00,000</span>
          </div>
          <input
            type="range"
            min="0"
            max="300000"
            step="10000"
            value={feeRange[1]}
            onChange={(e) => setFeeRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-[#E8E2D8] border border-[#2D2D2D] appearance-none cursor-pointer accent-[#C41E3A]"
          />
          <div className="bg-[#E8E2D8] border border-[#2D2D2D] px-3 py-2 text-center">
            <span className="text-sm font-black text-[#2D2D2D]">Up to ₹{feeRange[1].toLocaleString()}</span>
          </div>
        </div>
      </FilterSection>

      {/* Courses */}
      <FilterSection title="Courses Offered">
        <div className="space-y-2">
          {courses.map((course) => (
            <label key={course} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{course}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Accreditation */}
      <FilterSection title="Accreditation">
        <div className="space-y-2">
          {accreditations.map((acc) => (
            <label key={acc} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{acc}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Discount Amount */}
      <FilterSection title="Discount Amount">
        <div className="flex flex-wrap gap-2">
          {discounts.map((d) => (
            <button
              key={d}
              className="px-3 py-1.5 bg-white border-2 border-[#2D2D2D] text-xs font-black uppercase hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-colors"
            >
              {d}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Apply Button */}
      <button className="w-full mt-6 bg-[#C41E3A] text-white py-4 font-black uppercase tracking-widest border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
        Apply Filters
      </button>

      <button className="w-full mt-3 bg-white text-[#2D2D2D] py-3 font-black uppercase tracking-widest border-2 border-[#2D2D2D] hover:bg-[#E8E2D8] transition-colors text-xs">
        Reset All
      </button>
    </aside>
  );
};

export default CollegeSidebar;