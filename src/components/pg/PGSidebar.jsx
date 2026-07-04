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

const PGSidebar = () => {
  const [rentRange, setRentRange] = useState([0, 20000]);

  const locations = ['Koramangala', 'Indiranagar', 'Hauz Khas', 'Kamla Nagar', 'Sector 62 Noida', 'Cyber City', 'Laxmi Nagar'];
  const types = ['Boys', 'Girls', 'Co-ed'];
  const amenities = ['WiFi', 'Food', 'AC', 'Hot Water', 'Security', 'Laundry'];
  const sharing = ['Single', 'Double', 'Triple'];
  const discounts = ['₹1,200/mo', '₹1,500/mo', '₹2,000/mo'];

  return (
    <aside className="bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#2D2D2D]">
        <Filter className="w-5 h-5 text-[#C41E3A]" />
        <h3 className="text-lg font-black uppercase tracking-tight text-[#2D2D2D]">Filters</h3>
      </div>

      {/* Location Filter */}
      <FilterSection title="Area / Locality">
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

      {/* Rent Range */}
      <FilterSection title="Monthly Rent">
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-black text-[#666]">
            <span>₹0</span>
            <span>₹20,000</span>
          </div>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={rentRange[1]}
            onChange={(e) => setRentRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-[#E8E2D8] border border-[#2D2D2D] appearance-none cursor-pointer accent-[#C41E3A]"
          />
          <div className="bg-[#E8E2D8] border border-[#2D2D2D] px-3 py-2 text-center">
            <span className="text-sm font-black text-[#2D2D2D]">Up to ₹{rentRange[1].toLocaleString()}/mo</span>
          </div>
        </div>
      </FilterSection>

      {/* PG Type */}
      <FilterSection title="PG Type">
        <div className="space-y-2">
          {types.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Amenities */}
      <FilterSection title="Amenities">
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{amenity}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Room Sharing */}
      <FilterSection title="Room Sharing">
        <div className="space-y-2">
          {sharing.map((share) => (
            <label key={share} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-5 h-5 bg-white border-2 border-[#2D2D2D] peer-checked:bg-[#C41E3A] peer-checked:border-[#C41E3A] transition-colors"></div>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#2D2D2D] group-hover:text-[#C41E3A] transition-colors">{share}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Monthly Discount */}
      <FilterSection title="Monthly Discount">
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

export default PGSidebar;