import React from 'react';
import { GraduationCap, Home, Building2, BookOpen, MapPin, Star, ArrowRight } from 'lucide-react';

const PopularListings = () => {
  const listings = [
    {
      name: 'Delhi Technological University',
      location: 'Rohini, Delhi',
      type: 'College',
      originalFee: '₹1,25,000',
      discountedFee: '₹1,15,000',
      discount: '₹10,000',
      rating: 4.8,
      reviews: 234,
      accent: '#C41E3A',
      tags: ['Engineering', 'NAAC A++'],
    },
    {
      name: 'Scholar\'s Hostel',
      location: 'Near IIT Delhi',
      type: 'Hostel',
      originalFee: '₹8,000/mo',
      discountedFee: '₹7,000/mo',
      discount: '₹1,000/mo',
      rating: 4.6,
      reviews: 189,
      accent: '#2D5016',
      tags: ['WiFi', 'AC Rooms'],
    },
    {
      name: 'Aakash Institute',
      location: 'South Extension, Delhi',
      type: 'Coaching',
      originalFee: '₹85,000',
      discountedFee: '₹80,000',
      discount: '₹5,000',
      rating: 4.9,
      reviews: 512,
      accent: '#F4D03F',
      textDark: true,
      tags: ['IIT-JEE', 'Medical'],
    },
    {
      name: 'Comfort PG',
      location: 'Koramangala, Bangalore',
      type: 'PG',
      originalFee: '₹12,000/mo',
      discountedFee: '₹10,500/mo',
      discount: '₹1,500/mo',
      rating: 4.5,
      reviews: 128,
      accent: '#2D2D2D',
      tags: ['Food Included', 'Laundry'],
    },
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'College': return <GraduationCap className="w-12 h-12 text-[#C41E3A]" />;
      case 'Hostel': return <Home className="w-12 h-12 text-[#2D5016]" />;
      case 'Coaching': return <BookOpen className="w-12 h-12 text-[#2D2D2D]" />;
      case 'PG': return <Building2 className="w-12 h-12 text-[#2D2D2D]" />;
      default: return null;
    }
  };

  return (
    <section className="py-28 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="bg-[#2D5016] text-white px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
            Featured Deals
          </span>
          <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight mb-6">
            Popular With Best<br />Discounts
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto text-lg font-medium">
            Handpicked listings with maximum savings for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((item, index) => (
            <div key={index} className="bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 group">
              <div className="h-52 bg-[#D4CFC7] relative flex items-center justify-center border-b-2 border-[#2D2D2D]">
                <div className="bg-[#F5F1EB] p-6 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D]">
                  {getTypeIcon(item.type)}
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F5F1EB] text-[#2D2D2D] px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
                    {item.type}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-[#C41E3A] text-white px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
                  SAVE {item.discount}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-4 h-4 text-[#F4D03F] fill-[#F4D03F]" />
                  <span className="text-sm font-black text-[#2D2D2D]">{item.rating}</span>
                  <span className="text-sm text-[#666] font-medium">({item.reviews} reviews)</span>
                </div>

                <h3 className="text-lg font-black text-[#2D2D2D] mb-2 uppercase tracking-tight group-hover:text-[#C41E3A] transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-[#666] text-sm mb-5 font-medium">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-[#E8E2D8] text-[#2D2D2D] px-3 py-1.5 text-xs font-bold uppercase border border-[#2D2D2D]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t-2 border-[#2D2D2D] pt-5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs text-[#999] line-through font-bold">{item.originalFee}</p>
                      <p className="text-2xl font-black text-[#C41E3A]">{item.discountedFee}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#2D5016] font-black uppercase bg-[#2D5016]/10 px-3 py-1 border border-[#2D5016]">
                        Save {item.discount}
                      </p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#2D2D2D] hover:bg-[#C41E3A] text-white py-4 font-black uppercase tracking-widest transition-colors border-2 border-[#2D2D2D] flex items-center justify-center gap-2 group/btn">
                    Get Discount 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularListings;