import React from 'react';
import HostelCard from './HostelCard';

const hostelsData = [
  {
    id: 1,
    name: 'Scholar\'s Nest Hostel',
    location: 'Near IIT Delhi Gate, Hauz Khas',
    distance: '0.5 km',
    type: 'Boys',
    originalRent: '₹12,000',
    discountedRent: '₹10,500',
    discount: '₹1,500',
    rating: 4.7,
    reviews: 312,
    beds: '8',
    amenities: ['WiFi', 'Food', 'Security', 'Hot Water'],
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Single', 'Double', 'Triple'],
    featured: true,
  },
  {
    id: 2,
    name: 'Girls Paradise PG',
    location: 'Kamla Nagar, Near DU North',
    distance: '0.3 km',
    type: 'Girls',
    originalRent: '₹15,000',
    discountedRent: '₹13,000',
    discount: '₹2,000',
    rating: 4.9,
    reviews: 445,
    beds: '5',
    amenities: ['WiFi', 'Food', 'Security', 'AC'],
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['Single', 'Double'],
    featured: true,
  },
  {
    id: 3,
    name: 'Student Square Hostel',
    location: 'Rohini Sector 15, Near DTU',
    distance: '1.2 km',
    type: 'Co-ed',
    originalRent: '₹10,000',
    discountedRent: '₹8,500',
    discount: '₹1,500',
    rating: 4.5,
    reviews: 198,
    beds: '12',
    amenities: ['WiFi', 'Security', 'Hot Water'],
    imageColor: 'bg-[#2D5016]/10',
    tags: ['Double', 'Triple', 'Dorm'],
    featured: false,
  },
  {
    id: 4,
    name: 'Campus Living Hostel',
    location: 'Dwarka Sector 10, Near IPU',
    distance: '0.8 km',
    type: 'Boys',
    originalRent: '₹11,000',
    discountedRent: '₹9,800',
    discount: '₹1,200',
    rating: 4.4,
    reviews: 156,
    beds: '15',
    amenities: ['WiFi', 'Food', 'Security'],
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['Single', 'Double'],
    featured: false,
  },
  {
    id: 5,
    name: 'Royal Stay for Girls',
    location: 'Greater Noida, Near Amity',
    distance: '1.5 km',
    type: 'Girls',
    originalRent: '₹14,000',
    discountedRent: '₹12,000',
    discount: '₹2,000',
    rating: 4.6,
    reviews: 267,
    beds: '6',
    amenities: ['WiFi', 'Food', 'Security', 'AC', 'Hot Water'],
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['Single', 'Double', 'AC Rooms'],
    featured: false,
  },
  {
    id: 6,
    name: 'Budget Bunk Hostel',
    location: 'Munirka, Near JNU',
    distance: '0.4 km',
    type: 'Co-ed',
    originalRent: '₹8,000',
    discountedRent: '₹6,500',
    discount: '₹1,500',
    rating: 4.2,
    reviews: 89,
    beds: '20',
    amenities: ['WiFi', 'Security'],
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['Dorm', 'Triple', 'Budget'],
    featured: false,
  },
  {
    id: 7,
    name: 'Elite Student Homes',
    location: 'Vasant Kunj, Near IIFT',
    distance: '0.6 km',
    type: 'Boys',
    originalRent: '₹18,000',
    discountedRent: '₹16,000',
    discount: '₹2,000',
    rating: 4.8,
    reviews: 178,
    beds: '4',
    amenities: ['WiFi', 'Food', 'Security', 'AC', 'Hot Water'],
    imageColor: 'bg-[#8B6914]/10',
    tags: ['Single', 'Luxury', 'AC'],
    featured: true,
  },
  {
    id: 8,
    name: 'Working Women\'s PG',
    location: 'Sector 62, Noida',
    distance: '2.0 km',
    type: 'Girls',
    originalRent: '₹13,000',
    discountedRent: '₹11,500',
    discount: '₹1,500',
    rating: 4.5,
    reviews: 134,
    beds: '10',
    amenities: ['WiFi', 'Security', 'Hot Water', 'AC'],
    imageColor: 'bg-[#2D5016]/10',
    tags: ['Working', 'Single', 'Furnished'],
    featured: false,
  },
  {
    id: 9,
    name: 'Study Hub Hostel',
    location: 'Lajpat Nagar, Near Coaching Hub',
    distance: '0.2 km',
    type: 'Co-ed',
    originalRent: '₹9,500',
    discountedRent: '₹8,000',
    discount: '₹1,500',
    rating: 4.3,
    reviews: 112,
    beds: '18',
    amenities: ['WiFi', 'Food', 'Security'],
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['Study Room', 'Double', 'Triple'],
    featured: false,
  },
];

const HostelGrid = () => {
  return (
    <section className="py-12 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#2D2D2D] uppercase tracking-tight">
            Showing <span className="text-[#8B6914]">{hostelsData.length}</span> Hostels
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
          {hostelsData.map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
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
                  ? 'bg-[#8B6914] text-white border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]'
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

export default HostelGrid;