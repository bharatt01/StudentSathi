import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstituteHero from '../components/institute/InstituteHero';
import InstituteFilterBar from '../components/institute/InstituteFilterBar';
import FeaturedInstitute from '../components/institute/FeaturedInstitute';
import InstituteGrid from '../components/institute/InstituteGrid';
import InstituteSidebar from '../components/institute/InstituteSidebar';
import InstituteComparison from '../components/institute/InstituteComparison';
import InstituteCTA from '../components/institute/InstituteCTA';

const InstitutePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans">

      <InstituteHero />
      <InstituteFilterBar />
      <FeaturedInstitute />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on lg */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <InstituteSidebar />
          </div>
          
          {/* Grid */}
          <div className="flex-1">
            <InstituteGrid />
          </div>
        </div>
      </div>

      <InstituteComparison />
      <InstituteCTA />
     
    </div>
  );
};

export default InstitutePage;