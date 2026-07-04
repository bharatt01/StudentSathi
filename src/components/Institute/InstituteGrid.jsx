import React from 'react';
import InstituteCard from './InstituteCard';

const institutesData = [
  {
    id: 1,
    name: 'Aakash Institute',
    location: 'South Extension, New Delhi',
    type: 'NEET',
    originalFee: '₹1,20,000',
    discountedFee: '₹1,10,000',
    discount: '₹10,000',
    rating: 4.9,
    reviews: 512,
    students: '5,000+',
    successRate: '92%',
    batches: 24,
    imageColor: 'bg-[#2D5016]/10',
    tags: ['Foundation', 'Crash Course', 'Test Series'],
    featured: true,
    founded: 1988,
  },
  {
    id: 2,
    name: 'Allen Career Institute',
    location: 'Kota, Rajasthan',
    type: 'IIT-JEE',
    originalFee: '₹1,50,000',
    discountedFee: '₹1,40,000',
    discount: '₹10,000',
    rating: 4.8,
    reviews: 678,
    students: '12,000+',
    successRate: '89%',
    batches: 36,
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['JEE Main', 'JEE Advanced', 'Olympiad'],
    featured: true,
    founded: 1988,
  },
  {
    id: 3,
    name: 'Vajiram & Ravi',
    location: 'Karol Bagh, New Delhi',
    type: 'UPSC',
    originalFee: '₹1,80,000',
    discountedFee: '₹1,72,000',
    discount: '₹8,000',
    rating: 4.9,
    reviews: 445,
    students: '3,000+',
    successRate: '75%',
    batches: 18,
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Prelims', 'Mains', 'Interview'],
    featured: true,
    founded: 1976,
  },
  {
    id: 4,
    name: 'TIME Institute',
    location: 'Himayatnagar, Hyderabad',
    type: 'CAT/MBA',
    originalFee: '₹65,000',
    discountedFee: '₹58,000',
    discount: '₹7,000',
    rating: 4.6,
    reviews: 334,
    students: '2,500+',
    successRate: '82%',
    batches: 15,
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['CAT', 'XAT', 'SNAP'],
    featured: false,
    founded: 1992,
  },
  {
    id: 5,
    name: 'Resonance Eduventures',
    location: 'Kota, Rajasthan',
    type: 'IIT-JEE',
    originalFee: '₹1,35,000',
    discountedFee: '₹1,27,000',
    discount: '₹8,000',
    rating: 4.5,
    reviews: 289,
    students: '8,000+',
    successRate: '85%',
    batches: 28,
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['JEE Main', 'JEE Advanced', 'KVPY'],
    featured: false,
    founded: 2001,
  },
  {
    id: 6,
    name: 'Drishti IAS',
    location: 'Mukherjee Nagar, Delhi',
    type: 'UPSC',
    originalFee: '₹1,45,000',
    discountedFee: '₹1,38,000',
    discount: '₹7,000',
    rating: 4.7,
    reviews: 312,
    students: '4,500+',
    successRate: '70%',
    batches: 20,
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Hindi Medium', 'English Medium', 'CSAT'],
    featured: false,
    founded: 1999,
  },
  {
    id: 7,
    name: 'Career Launcher',
    location: 'Connaught Place, Delhi',
    type: 'CAT/MBA',
    originalFee: '₹72,000',
    discountedFee: '₹65,000',
    discount: '₹7,000',
    rating: 4.4,
    reviews: 198,
    students: '1,800+',
    successRate: '78%',
    batches: 12,
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['CAT', 'GMAT', 'GRE'],
    featured: false,
    founded: 1995,
  },
  {
    id: 8,
    name: 'Narayana Institute',
    location: 'Madhuban Chowk, Delhi',
    type: 'NEET',
    originalFee: '₹1,10,000',
    discountedFee: '₹1,02,000',
    discount: '₹8,000',
    rating: 4.6,
    reviews: 267,
    students: '6,500+',
    successRate: '88%',
    batches: 22,
    imageColor: 'bg-[#2D5016]/10',
    tags: ['NEET', 'AIIMS', 'JIPMER'],
    featured: false,
    founded: 1979,
  },
  {
    id: 9,
    name: 'IBT Institute',
    location: 'Laxmi Nagar, Delhi',
    type: 'Banking',
    originalFee: '₹35,000',
    discountedFee: '₹30,000',
    discount: '₹5,000',
    rating: 4.3,
    reviews: 156,
    students: '1,200+',
    successRate: '72%',
    batches: 10,
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['IBPS', 'SBI PO', 'SSC'],
    featured: false,
    founded: 2009,
  },
];

const InstituteGrid = () => {
  return (
    <section className="py-12 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tight">
            Showing <span className="text-[#2D5016]">{institutesData.length}</span> Institutes
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#666] uppercase">View:</span>
            <button className="w-8 h-8 bg-[#2D2D2D] text-white border border-[#2D2D2D] flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button className="w-8 h-8 bg-white text-[#2D2D2D] border border-[#2D2D2D] flex items-center justify-center hover:bg-[#E8E2D8]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutesData.map((institute) => (
            <InstituteCard key={institute.id} institute={institute} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
          <button className="px-4 py-2 bg-white border-2 border-[#2D2D2D] text-xs font-black uppercase hover:bg-[#E8E2D8] transition-colors">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 flex items-center justify-center text-xs font-black border-2 transition-colors ${
                page === 1
                  ? 'bg-[#2D5016] text-white border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]'
                  : 'bg-white text-[#2D2D2D] border-[#2D2D2D] hover:bg-[#E8E2D8]'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-white border-2 border-[#2D2D2D] text-xs font-black uppercase hover:bg-[#E8E2D8] transition-colors">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstituteGrid;