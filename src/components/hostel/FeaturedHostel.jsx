import React from 'react';
import { Home, Star, MapPin, ArrowRight, BadgeCheck, TrendingUp, Wifi, Utensils, Shield, Wind } from 'lucide-react';

const FeaturedHostel = () => {
  return (
    <section className="py-16 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#F4D03F] px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
            Featured
          </div>
          <h2 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tight">Hostel of the Month</h2>
        </div>

        <div className="bg-[#2D2D2D] border-2 border-[#2D2D2D] shadow-[8px_8px_0px_0px_#8B6914] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Image Area */}
            <div className="bg-[#8B6914]/10 h-80 lg:h-auto relative flex items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#2D2D2D]">
              <div className="bg-[#F5F1EB] p-10 border-4 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#000]">
                <Home className="w-16 h-16 text-[#8B6914]" />
              </div>
              <div className="absolute top-6 left-6 bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Most Booked
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-[#F4D03F]" />
                <span className="text-[#F4D03F] text-xs font-black uppercase tracking-widest">Verified by studentsathi Team</span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-3">
                Scholar's Nest Hostel
              </h3>
              <div className="flex items-center gap-2 text-[#999] mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Hauz Khas, 0.5 km from IIT Delhi</span>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-[#F4D03F] fill-[#F4D03F]" />
                  <span className="text-white font-black">4.9</span>
                  <span className="text-[#666] text-sm">(312 reviews)</span>
                </div>
                <div className="w-px h-6 bg-[#444]"></div>
                <span className="text-[#999] text-sm font-medium">Boys Hostel</span>
                <div className="w-px h-6 bg-[#444]"></div>
                <span className="text-[#999] text-sm font-medium">24 beds left</span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['WiFi', 'Food', 'Security', 'AC', 'Hot Water'].map((amenity) => (
                  <span key={amenity} className="bg-white/10 border border-white/20 text-white px-3 py-1.5 text-xs font-bold uppercase flex items-center gap-1">
                    {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                    {amenity === 'Food' && <Utensils className="w-3 h-3" />}
                    {amenity === 'Security' && <Shield className="w-3 h-3" />}
                    {amenity === 'AC' && <Wind className="w-3 h-3" />}
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="bg-[#F4D03F]/10 border border-[#F4D03F]/30 p-6 mb-8">
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <p className="text-[#999] text-sm line-through font-bold">Market Rent: ₹12,000/mo</p>
                    <p className="text-4xl font-black text-[#F4D03F]">₹10,500<span className="text-lg">/mo</span></p>
                  </div>
                  <div className="bg-[#8B6914] text-white px-4 py-2 text-sm font-black uppercase border-2 border-[#F4D03F] shadow-[3px_3px_0px_0px_#F4D03F]">
                    Save ₹1,500/mo
                  </div>
                </div>
                <p className="text-[#F4D03F]/70 text-xs font-bold uppercase tracking-wide">That's ₹18,000 saved in a year!</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#8B6914] hover:bg-[#6B5310] text-white py-4 font-black uppercase tracking-widest border-2 border-[#F5F1EB] shadow-[4px_4px_0px_0px_#F5F1EB] hover:shadow-[2px_2px_0px_0px_#F5F1EB] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                  Book Now <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-4 bg-transparent text-white font-black uppercase tracking-widest border-2 border-[#444] hover:border-[#F5F1EB] transition-colors text-xs">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHostel;