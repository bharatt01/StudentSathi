import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PGHero from '../components/pg/PGHero';
import PGFilterBar from '../components/pg/PGFilterBar';
import FeaturedPG from '../components/pg/FeaturedPG';
import PGGrid from '../components/pg/PGGrid';
import PGSidebar from '../components/pg/PGSidebar';
import PGComparison from '../components/pg/PGComparison';
import PGCTA from '../components/pg/PGCTA';

const PGPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans">

      <PGHero />
      <PGFilterBar />
      <FeaturedPG />
      
      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on lg */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <PGSidebar />
          </div>
          
          {/* Grid */}
          <div className="flex-1">
            <PGGrid />
          </div>
        </div>
      </div>

      <PGComparison />
      <PGCTA />
     
    </div>
  );
};

export default PGPage;