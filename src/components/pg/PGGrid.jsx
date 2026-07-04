import React from 'react';
import PGCard from './PGCard';

const pgsData = [
  {
    id: 1,
    name: 'Comfort Stay PG',
    location: 'Koramangala 5th Block, Bangalore',
    distance: '0.3 km from metro',
    type: 'Boys',
    originalRent: '₹14,000',
    discountedRent: '₹12,000',
    discount: '₹2,000',
    rating: 4.6,
    reviews: 234,
    beds: '6',
    amenities: ['WiFi', 'Food', 'Security', 'Hot Water', 'Laundry'],
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['Single', 'Double', 'Furnished'],
    featured: true,
    owner: 'Mr. Sharma',
  },
  {
    id: 2,
    name: 'Girls Haven PG',
    location: 'Indiranagar 12th Main, Bangalore',
    distance: '0.5 km from college',
    type: 'Girls',
    originalRent: '₹16,000',
    discountedRent: '₹14,000',
    discount: '₹2,000',
    rating: 4.8,
    reviews: 389,
    beds: '4',
    amenities: ['WiFi', 'Food', 'Security', 'AC', 'Laundry'],
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['Single', 'AC Rooms', 'Homely'],
    featured: true,
    owner: 'Mrs. Gupta',
  },
  {
    id: 3,
    name: 'Urban Nest PG',
    location: 'Hauz Khas, New Delhi',
    distance: '0.8 km from IIT',
    type: 'Co-ed',
    originalRent: '₹12,000',
    discountedRent: '₹10,500',
    discount: '₹1,500',
    rating: 4.4,
    reviews: 167,
    beds: '10',
    amenities: ['WiFi', 'Security', 'Hot Water'],
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Double', 'Triple', 'Budget'],
    featured: false,
    owner: 'Mr. Khan',
  },
  {
    id: 4,
    name: 'Royal Residency PG',
    location: 'Kamla Nagar, Delhi',
    distance: '0.2 km from DU',
    type: 'Girls',
    originalRent: '₹15,000',
    discountedRent: '₹13,500',
    discount: '₹1,500',
    rating: 4.7,
    reviews: 278,
    beds: '3',
    amenities: ['WiFi', 'Food', 'Security', 'AC', 'Hot Water', 'Laundry'],
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['Single', 'Luxury', 'Furnished'],
    featured: true,
    owner: 'Mrs. Verma',
  },
  {
    id: 5,
    name: 'Student Hub PG',
    location: 'Sector 62, Noida',
    distance: '1.0 km from office',
    type: 'Boys',
    originalRent: '₹10,000',
    discountedRent: '₹8,500',
    discount: '₹1,500',
    rating: 4.3,
    reviews: 145,
    beds: '12',
    amenities: ['WiFi', 'Food', 'Security'],
    imageColor: 'bg-[#2D5016]/10',
    tags: ['Working', 'Double', 'Triple'],
    featured: false,
    owner: 'Mr. Singh',
  },
  {
    id: 6,
    name: 'Cozy Corner PG',
    location: 'Koramangala 1st Block, Bangalore',
    distance: '0.4 km from bus stop',
    type: 'Girls',
    originalRent: '₹13,000',
    discountedRent: '₹11,500',
    discount: '₹1,500',
    rating: 4.5,
    reviews: 198,
    beds: '5',
    amenities: ['WiFi', 'Security', 'Hot Water', 'Laundry'],
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['Single', 'Homely', 'Safe'],
    featured: false,
    owner: 'Mrs. Reddy',
  },
  {
    id: 7,
    name: 'Metro PG Homes',
    location: 'Rajouri Garden, Delhi',
    distance: '0.1 km from metro',
    type: 'Co-ed',
    originalRent: '₹11,000',
    discountedRent: '₹9,800',
    discount: '₹1,200',
    rating: 4.2,
    reviews: 112,
    beds: '8',
    amenities: ['WiFi', 'Security', 'Hot Water'],
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['Budget', 'Double', 'Triple'],
    featured: false,
    owner: 'Mr. Yadav',
  },
  {
    id: 8,
    name: 'Elite PG for Working',
    location: 'Cyber City, Gurgaon',
    distance: '0.5 km from office',
    type: 'Co-ed',
    originalRent: '₹18,000',
    discountedRent: '₹16,000',
    discount: '₹2,000',
    rating: 4.9,
    reviews: 456,
    beds: '2',
    amenities: ['WiFi', 'Food', 'Security', 'AC', 'Hot Water', 'Laundry'],
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Working', 'Single', 'Premium'],
    featured: true,
    owner: 'Mr. Kapoor',
  },
  {
    id: 9,
    name: 'Budget Bliss PG',
    location: 'Laxmi Nagar, Delhi',
    distance: '0.6 km from coaching',
    type: 'Boys',
    originalRent: '₹8,000',
    discountedRent: '₹6,800',
    discount: '₹1,200',
    rating: 4.1,
    reviews: 89,
    beds: '15',
    amenities: ['WiFi', 'Security'],
    imageColor: 'bg-[#2D5016]/10',
    tags: ['Budget', 'Triple', 'Dorm'],
    featured: false,
    owner: 'Mr. Mishra',
  },
];

const PGGrid = () => {
  return (
    <section className="py-12 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tight">
            Showing <span className="text-[#C41E3A]">{pgsData.length}</span> PGs
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
          {pgsData.map((pg) => (
            <PGCard key={pg.id} pg={pg} />
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
                  ? 'bg-[#C41E3A] text-white border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]'
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

export default PGGrid;