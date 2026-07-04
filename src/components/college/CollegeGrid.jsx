import React, { useEffect, useState } from 'react';
import { getEntities } from '../../services/firebaseServices';
import CollegeCard from './CollegeCard';

const collegesData = [
  {
    id: 1,
    name: 'Delhi Technological University',
    location: 'Rohini, Delhi',
    type: 'Engineering',
    originalFee: '₹1,25,000',
    discountedFee: '₹1,15,000',
    discount: '₹10,000',
    rating: 4.8,
    reviews: 234,
    students: '8,500+',
    courses: 42,
    accreditation: 'NAAC A++',
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['B.Tech', 'M.Tech', 'PhD'],
    featured: true,
  },
  {
    id: 2,
    name: 'Indraprastha University',
    location: 'Dwarka, Delhi',
    type: 'Engineering',
    originalFee: '₹95,000',
    discountedFee: '₹87,000',
    discount: '₹8,000',
    rating: 4.5,
    reviews: 189,
    students: '12,000+',
    courses: 56,
    accreditation: 'NAAC A',
    imageColor: 'bg-[#2D5016]/10',
    tags: ['B.Tech', 'BCA', 'MBA'],
    featured: false,
  },
  {
    id: 3,
    name: 'Jamia Millia Islamia',
    location: 'Jamia Nagar, Delhi',
    type: 'Engineering',
    originalFee: '₹72,000',
    discountedFee: '₹65,000',
    discount: '₹7,000',
    rating: 4.7,
    reviews: 312,
    students: '15,000+',
    courses: 38,
    accreditation: 'NAAC A++',
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['B.Tech', 'B.Arch', 'Law'],
    featured: true,
  },
  {
    id: 4,
    name: 'Netaji Subhas University',
    location: 'Dwarka, Delhi',
    type: 'Engineering',
    originalFee: '₹1,10,000',
    discountedFee: '₹1,02,000',
    discount: '₹8,000',
    rating: 4.3,
    reviews: 156,
    students: '6,000+',
    courses: 28,
    accreditation: 'NAAC A',
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['B.Tech', 'BBA', 'BCA'],
    featured: false,
  },
  {
    id: 5,
    name: 'Maharaja Agrasen Institute',
    location: 'Rohini, Delhi',
    type: 'Engineering',
    originalFee: '₹1,35,000',
    discountedFee: '₹1,25,000',
    discount: '₹10,000',
    rating: 4.6,
    reviews: 198,
    students: '4,500+',
    courses: 22,
    accreditation: 'NAAC A+',
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['B.Tech', 'MBA', 'MCA'],
    featured: false,
  },
  {
    id: 6,
    name: 'Bharati Vidyapeeth',
    location: 'Paschim Vihar, Delhi',
    type: 'Medical',
    originalFee: '₹2,50,000',
    discountedFee: '₹2,40,000',
    discount: '₹10,000',
    rating: 4.9,
    reviews: 445,
    students: '3,200+',
    courses: 18,
    accreditation: 'NAAC A++',
    imageColor: 'bg-[#2D5016]/10',
    tags: ['MBBS', 'BDS', 'Nursing'],
    featured: true,
  },
  {
    id: 7,
    name: 'Amity University',
    location: 'Noida, UP',
    type: 'Management',
    originalFee: '₹1,80,000',
    discountedFee: '₹1,70,000',
    discount: '₹10,000',
    rating: 4.4,
    reviews: 567,
    students: '25,000+',
    courses: 85,
    accreditation: 'NAAC A+',
    imageColor: 'bg-[#F4D03F]/20',
    tags: ['BBA', 'MBA', 'Law'],
    featured: false,
  },
  {
    id: 8,
    name: 'Shiv Nadar University',
    location: 'Greater Noida, UP',
    type: 'Arts & Science',
    originalFee: '₹2,20,000',
    discountedFee: '₹2,12,000',
    discount: '₹8,000',
    rating: 4.7,
    reviews: 234,
    students: '5,000+',
    courses: 32,
    accreditation: 'NAAC A',
    imageColor: 'bg-[#2D2D2D]/10',
    tags: ['B.Sc', 'BA', 'Research'],
    featured: false,
  },
  {
    id: 9,
    name: 'National Law University',
    location: 'Dwarka, Delhi',
    type: 'Law',
    originalFee: '₹1,65,000',
    discountedFee: '₹1,57,000',
    discount: '₹8,000',
    rating: 4.8,
    reviews: 178,
    students: '2,000+',
    courses: 12,
    accreditation: 'NAAC A++',
    imageColor: 'bg-[#C41E3A]/10',
    tags: ['LLB', 'LLM', 'BA LLB'],
    featured: false,
  },
];

const CollegeGrid = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadColleges();
  }, []);

  const loadColleges = async () => {
    try {
      const data = await getEntities("college");
      setColleges(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading Colleges...
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#2D2D2D] uppercase">
            Showing{" "}
            <span className="text-[#C41E3A]">
              {colleges.length}
            </span>{" "}
            Colleges
          </h2>
        </div>

        {colleges.length === 0 ? (
          <div className="text-center py-20 text-xl">
            No Colleges Found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default CollegeGrid;