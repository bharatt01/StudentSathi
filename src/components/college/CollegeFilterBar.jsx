import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const CollegeFilterBar = () => {
  const [activeFilters, setActiveFilters] = useState(['Engineering', 'Delhi NCR']);

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const categories = [
    { name: 'All', count: 500 },
    { name: 'Engineering', count: 180 },
    { name: 'Medical', count: 95 },
    { name: 'Management', count: 120 },
    { name: 'Arts & Science', count: 65 },
    { name: 'Law', count: 40 },
  ];

  const sortOptions = ['Popularity', 'Fee: Low to High', 'Fee: High to Low', 'Rating', 'Discount %'];

  return (
    <div className="bg-[#F5F1EB] border-b-2 border-[#2D2D2D] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wide border-2 transition-all ${
                cat.name === 'All'
                  ? 'bg-[#C41E3A] text-white border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D]'
                  : 'bg-white text-[#2D2D2D] border-[#2D2D2D] hover:bg-[#E8E2D8]'
              }`}
            >
              {cat.name} <span className="text-[10px] opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Active Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase text-[#666] tracking-wide">Active:</span>
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="inline-flex items-center gap-1 bg-[#F4D03F] text-[#2D2D2D] px-3 py-1 text-xs font-bold border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]"
              >
                {filter}
                <button onClick={() => removeFilter(filter)} className="hover:text-[#C41E3A]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-[#666] tracking-wide">Sort by:</span>
            <div className="relative">
              <select className="appearance-none bg-white border-2 border-[#2D2D2D] px-4 py-2 pr-10 text-xs font-bold text-[#2D2D2D] focus:outline-none cursor-pointer shadow-[2px_2px_0px_0px_#2D2D2D]">
                {sortOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2D2D2D] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFilterBar;