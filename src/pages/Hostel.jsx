import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HostelHero from '../components/hostel/HostelHero';
import HostelFilterBar from '../components/hostel/HostelFilterBar';
import FeaturedHostel from '../components/hostel/FeaturedHostel';
import HostelGrid from '../components/hostel/HostelGrid';
import HostelSidebar from '../components/hostel/HostelSidebar';
import HostelComparison from '../components/hostel/HostelComparison';
import HostelCTA from '../components/hostel/HostelCTA';

const HostelPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans">

      <HostelHero />
      <HostelFilterBar />
      <FeaturedHostel />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on lg */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <HostelSidebar />
          </div>
          
          {/* Grid */}
          <div className="flex-1">
            <HostelGrid />
          </div>
        </div>
      </div>

      <HostelComparison />
      <HostelCTA />
     
    </div>
  );
};

export default HostelPage;