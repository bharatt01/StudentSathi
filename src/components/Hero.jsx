import React, { useState } from 'react';
import { GraduationCap, Home, Building2, BookOpen, MapPin, Search, Percent, Award } from 'lucide-react';

const HeroSection = () => {
  const [searchType, setSearchType] = useState('college');
  const [searchQuery, setSearchQuery] = useState('');

  const searchTypes = [
    { id: 'college', label: 'Colleges', icon: GraduationCap },
    { id: 'hostel', label: 'Hostels', icon: Home },
    { id: 'pg', label: 'PGs', icon: Building2 },
    { id: 'coaching', label: 'Coaching', icon: BookOpen },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[#2D2D2D] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#C41E3A] rounded-full opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-[#F4D03F] rounded-full opacity-5 blur-[80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 bg-[#F4D03F] px-4 py-2 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D]">
              <span className="flex h-2.5 w-2.5 bg-[#C41E3A]"></span>
              <span className="text-[#2D2D2D] text-xs font-black uppercase tracking-widest">
                Trusted by 50,000+ Students
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase">
                Save <span className="text-[#F4D03F] underline decoration-[#C41E3A] decoration-4 underline-offset-8">₹5K - ₹10K</span> on Your College Fees
              </h1>
              <p className="text-lg text-[#B0B0B0] max-w-lg leading-relaxed">
                Find the best colleges, hostels, PGs, and coaching centers near you. 
                Get exclusive discounts when you apply through us.
              </p>
            </div>

            <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-3 shadow-[8px_8px_0px_0px_#2D2D2D] max-w-xl">
              <div className="flex gap-1 p-1 bg-[#E8E2D8] border border-[#2D2D2D] mb-3">
                {searchTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSearchType(type.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-black uppercase tracking-wide transition-all border-2 ${
                        searchType === type.id
                          ? 'bg-[#C41E3A] text-white border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]'
                          : 'bg-[#F5F1EB] text-[#2D2D2D] border-transparent hover:border-[#2D2D2D]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{type.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-2 p-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2D2D]" />
                  <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] placeholder-[#999] text-sm font-bold focus:outline-none focus:ring-0"
                  />
                </div>
                <button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-8 py-4 font-black uppercase tracking-wide text-sm border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            <div className="flex gap-10 pt-4">
              <div>
                <p className="text-4xl font-black text-white">500+</p>
                <p className="text-[#F4D03F] text-xs font-bold uppercase tracking-widest mt-1">Partner Colleges</p>
              </div>
              <div className="w-px bg-[#555]"></div>
              <div>
                <p className="text-4xl font-black text-white">₹5Cr+</p>
                <p className="text-[#F4D03F] text-xs font-bold uppercase tracking-widest mt-1">Student Savings</p>
              </div>
              <div className="w-px bg-[#555]"></div>
              <div>
                <p className="text-4xl font-black text-white">98%</p>
                <p className="text-[#F4D03F] text-xs font-bold uppercase tracking-widest mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-[#F5F1EB] border-4 border-[#2D2D2D] p-8 shadow-[12px_12px_0px_0px_#2D2D2D] rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#C41E3A] border-2 border-[#2D2D2D] flex items-center justify-center shadow-[3px_3px_0px_0px_#2D2D2D]">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#2D2D2D] text-lg uppercase tracking-tight">Delhi University</h3>
                    <p className="text-sm text-[#666] font-bold">North Campus, Delhi</p>
                  </div>
                </div>
                <span className="bg-[#2D5016] text-white px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D]">
                  UGC Approved
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#666] font-bold uppercase text-xs tracking-wide">Course Fee</span>
                  <span className="line-through text-[#999] font-bold">₹1,00,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2D2D2D] font-black uppercase text-xs tracking-wide">With Our Discount</span>
                  <span className="text-3xl font-black text-[#C41E3A]">₹92,000</span>
                </div>
                <div className="bg-[#F4D03F] border-2 border-[#2D2D2D] p-4 flex items-center gap-3 shadow-[3px_3px_0px_0px_#2D2D2D]">
                  <Percent className="w-6 h-6 text-[#2D2D2D]" />
                  <span className="text-[#2D2D2D] font-black uppercase text-sm">
                    You Save ₹8,000 (8% Off)
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#2D2D2D] text-white py-4 font-black uppercase tracking-widest hover:bg-[#C41E3A] transition-colors border-2 border-[#2D2D2D]">
                Claim Discount
              </button>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#F4D03F] border-2 border-[#2D2D2D] p-5 flex items-center gap-4 shadow-[6px_6px_0px_0px_#2D2D2D] animate-bounce">
              <div className="bg-white p-2 border-2 border-[#2D2D2D]">
                <Award className="w-7 h-7 text-[#C41E3A]" />
              </div>
              <div>
                <p className="font-black text-[#2D2D2D] uppercase text-sm tracking-wide">Best Price</p>
                <p className="text-xs text-[#2D2D2D] font-bold">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;