import React from 'react';
import { Search, Percent, Shield, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Compare',
      description: 'Find colleges, hostels, PGs, or coaching centers by location or name. Compare fees and ratings.',
      bg: 'bg-[#C41E3A]',
    },
    {
      icon: Percent,
      title: 'Get Exclusive Discount',
      description: 'We negotiate with institutions to get you ₹5,000 - ₹10,000 off on admission fees.',
      bg: 'bg-[#F4D03F]',
      textDark: true,
    },
    {
      icon: Shield,
      title: 'Secure Admission',
      description: 'Apply through us and get guaranteed admission with discounted fees. No hidden charges.',
      bg: 'bg-[#2D5016]',
    },
    {
      icon: TrendingUp,
      title: 'Start Learning',
      description: 'Begin your academic journey while having saved thousands on your fees.',
      bg: 'bg-[#2D2D2D]',
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="bg-[#2D2D2D] text-white px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6">
            Simple Process
          </span>
          <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto text-lg font-medium">
            Getting discount on your education has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isDark = !step.textDark;
            return (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[70%] w-[60%] h-[3px] bg-[#2D2D2D]">
                    <div className="absolute right-0 -top-[5px] w-3 h-3 bg-[#C41E3A] border-2 border-[#2D2D2D]"></div>
                  </div>
                )}
                
                <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-8 shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300">
                  <div className={`${step.bg} w-16 h-16 flex items-center justify-center mb-6 border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] ${step.textDark ? 'text-[#2D2D2D]' : 'text-white'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#F4D03F] border-2 border-[#2D2D2D] flex items-center justify-center text-sm font-black text-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-black text-[#2D2D2D] uppercase tracking-tight mb-3">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed text-sm font-medium">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;