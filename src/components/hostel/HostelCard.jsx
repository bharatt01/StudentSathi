import React from "react";
import {
  MapPin,
  Star,
  Wifi,
  Utensils,
  Shield,
  Droplets,
  Wind,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HostelCard = ({ hostel }) => {
  const navigate = useNavigate();

  if (!hostel) return null;

  const {
    id,
    name = "Hostel Name",
    location = "Location",
    distance = "Nearby",
    type = "Hostel",
    originalRent = "₹0",
    discountedRent = "₹0",
    discount = "₹0",
    rating = "4.5",
    reviews = "0",
    beds = "0",
    amenities = [],
    imageColor = "bg-slate-200",
    tags = [],
    featured = false,
  } = hostel;

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "WiFi":
        return <Wifi className="w-4 h-4" />;

      case "Food":
        return <Utensils className="w-4 h-4" />;

      case "Security":
        return <Shield className="w-4 h-4" />;

      case "Hot Water":
        return <Droplets className="w-4 h-4" />;

      case "AC":
        return <Wind className="w-4 h-4" />;

      default:
        return null;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Boys":
        return "bg-[#2D5016] text-white";

      case "Girls":
        return "bg-[#C41E3A] text-white";

      case "Co-ed":
        return "bg-[#8B6914] text-white";

      default:
        return "bg-[#2D2D2D] text-white";
    }
  };

  return (
    <div
      className={`bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 group relative ${
        featured ? "ring-2 ring-[#F4D03F]" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-3 -right-3 bg-[#F4D03F] text-[#2D2D2D] px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D] z-10">
          Featured
        </div>
      )}

      <div
        className={`h-52 ${imageColor} relative border-b-2 border-[#2D2D2D]`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#F5F1EB] p-6 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D]">
            <Home className="w-10 h-10 text-[#2D2D2D]" />
          </div>
        </div>

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-[#8B6914] text-white px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
            Save {discount}
          </span>

          <span
            className={`px-3 py-1 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D] ${getTypeColor(
              type
            )}`}
          >
            {type}
          </span>
        </div>

        <button className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-[#2D2D2D] flex items-center justify-center shadow-[2px_2px_0px_0px_#2D2D2D] hover:bg-[#C41E3A] hover:text-white transition-colors group/heart">
          <Heart className="w-5 h-5 group-hover/heart:fill-white" />
        </button>

        <div className="absolute bottom-4 left-4 bg-[#2D2D2D] text-white px-3 py-1 text-xs font-black uppercase border-2 border-white shadow-[2px_2px_0px_0px_#2D2D2D] flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {distance}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 text-[#F4D03F] fill-[#F4D03F]" />

          <span className="text-sm font-black text-[#2D2D2D]">
            {rating}
          </span>

          <span className="text-xs text-[#666] font-medium">
            ({reviews} reviews)
          </span>
        </div>

        <h3 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight mb-1 group-hover:text-[#8B6914] transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-[#666] text-sm mb-4 font-medium">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        <div className="bg-[#E8E2D8] border border-[#2D2D2D] px-3 py-2 mb-4 flex items-center justify-between">
          <span className="text-xs font-bold text-[#2D2D2D] uppercase">
            Beds Available
          </span>

          <span className="text-sm font-black text-[#2D5016]">
            {beds}
          </span>
        </div>

        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {amenities.map((amenity, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-white text-[#2D2D2D] px-2 py-1 text-[10px] font-black uppercase border border-[#2D2D2D]"
              >
                {getAmenityIcon(amenity)}
                {amenity}
              </span>
            ))}
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#E8E2D8] text-[#2D2D2D] px-2 py-1 text-[10px] font-black uppercase border border-[#2D2D2D]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="border-t-2 border-[#2D2D2D] pt-4">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-[#999] line-through font-bold">
                Market Rent: {originalRent}
              </p>

              <p className="text-2xl font-black text-[#8B6914]">
                {discountedRent}
              </p>

              <p className="text-xs text-[#2D5016] font-bold">
                You save {discount}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-[#2D2D2D] hover:bg-[#8B6914] text-white py-3 font-black uppercase tracking-widest text-xs transition-colors border-2 border-[#2D2D2D] flex items-center justify-center gap-2">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate(`/listing/${id}`)}
              className="px-4 py-3 bg-white border-2 border-[#2D2D2D] font-black uppercase text-xs hover:bg-[#E8E2D8] transition-colors"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;