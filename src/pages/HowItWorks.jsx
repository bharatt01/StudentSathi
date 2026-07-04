import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProcessHero from '../components/howitworks/ProcessHero';
import ProcessSteps from '../components/howitworks/ProcessSteps';
import SavingsCalculator from '../components/howitworks/SavingsCalculator';
import TrustBadges from '../components/howitworks/TrustBadges';
import ProcessFAQ from '../components/howitworks/ProcessFAQ';
import SuccessStories from '../components/howitworks/SuccessStories';
import ProcessCTA from '../components/howitworks/ProcessCTA';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F1EB] font-sans">
     
      <ProcessHero />
      <ProcessSteps />
      <SavingsCalculator />
      <TrustBadges />
      <ProcessFAQ />
      <SuccessStories />
      <ProcessCTA />
    </div>
  );
};

export default HowItWorksPage;