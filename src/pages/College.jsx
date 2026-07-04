import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollegeHero from '../components/college/CollegeHero';
import CollegeFilterBar from '../components/college/CollegeFilterBar';
import FeaturedCollege from '../components/college/FeaturedCollege';
import CollegeGrid from '../components/college/CollegeGrid';
import CollegeSidebar from '../components/college/CollegeSidebar';
import CollegeComparison from '../components/college/CollegeComparison';
import CollegeCTA from '../components/college/CollegeCTA';

const CollegePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans">
      <Navbar />
      <CollegeHero />
      <CollegeFilterBar />
      <FeaturedCollege />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on lg */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <CollegeSidebar />
          </div>
          
          {/* Grid */}
          <div className="flex-1">
            <CollegeGrid />
          </div>
        </div>
      </div>

      <CollegeComparison />
      <CollegeCTA />
      <Footer />
    </div>
  );
};

export default CollegePage;