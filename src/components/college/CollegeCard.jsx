import React from 'react';
import { MapPin, Star, BadgeCheck, Users, BookOpen, ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  const navigate = useNavigate();
     if (!college) return null;
const {
  name = "College Name",
  location = "Location",
  type = "College",

  originalFee = "₹0",
  discountedFee = "₹0",
  discount = "₹0",

  rating = 4.5,
  reviews = 0,

  students = "0+",
  courses = 0,

  accreditation = "Approved",

  imageColor = "bg-[#C41E3A]/10",

  tags = [],

  featured = false,
} = college;
  return (
    <div className={`bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 group relative ${featured ? 'ring-2 ring-[#F4D03F]' : ''}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-[#F4D03F] text-[#2D2D2D] px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D] z-10">
          Featured
        </div>
      )}

      {/* Image Area */}
      <div className={`h-48 ${imageColor} relative border-b-2 border-[#2D2D2D]`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#F5F1EB] p-6 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D]">
            <BookOpen className="w-10 h-10 text-[#2D2D2D]" />
          </div>
        </div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#C41E3A] text-white px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
            Save {discount}
          </span>
          {accreditation && (
            <span className="bg-[#2D5016] text-white px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D] flex items-center gap-1">
              <BadgeCheck className="w-3 h-3" /> {accreditation}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-[#2D2D2D] flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2D2D] hover:bg-[#C41E3A] hover:text-white transition-colors group/heart">
          <Heart className="w-5 h-5 group-hover/heart:fill-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating & Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-[#F4D03F] fill-[#F4D03F]" />
            <span className="text-sm font-black text-[#2D2D2D]">{rating}</span>
            <span className="text-xs text-[#666] font-medium">({reviews})</span>
          </div>
          <span className="bg-[#E8E2D8] text-[#2D2D2D] px-2 py-1 text-[10px] font-black uppercase border border-[#2D2D2D]">
            {type}
          </span>
        </div>

        {/* Name & Location */}
        <h3 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight mb-1 group-hover:text-[#C41E3A] transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-[#666] text-sm mb-4 font-medium">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-4 text-xs font-bold text-[#666]">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {students} Students
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {courses} Courses
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span key={i} className="bg-[#E8E2D8] text-[#2D2D2D] px-2 py-1 text-[10px] font-black uppercase border border-[#2D2D2D]">
              {tag}
            </span>
          ))}
        </div>

        {/* Fee Section */}
        <div className="border-t-2 border-[#2D2D2D] pt-4">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-[#999] line-through font-bold">Annual Fee: {originalFee}</p>
              <p className="text-2xl font-black text-[#C41E3A]">{discountedFee}</p>
              <p className="text-xs text-[#2D5016] font-bold">You save {discount}/year</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-[#2D2D2D] hover:bg-[#C41E3A] text-white py-3 font-black uppercase tracking-widest text-xs transition-colors border-2 border-[#2D2D2D] flex items-center justify-center gap-2">
              Get Discount <ArrowRight className="w-4 h-4" />
            </button>
         <button
  onClick={() =>
    navigate(`/listing/${college.id}`)
  }
  className="px-4 py-3 bg-white border-2 border-[#2D2D2D]"
>
  Details
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;