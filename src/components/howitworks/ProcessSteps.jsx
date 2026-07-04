import React from 'react';
import { Search, Percent, Shield, GraduationCap, CheckCircle, ArrowRight, Clock, Phone, MapPin, Star, Wallet, FileCheck, Bell } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Search & Compare',
      color: 'bg-[#C41E3A]',
      textColor: 'text-[#C41E3A]',
      borderColor: 'border-[#C41E3A]',
      description: 'Browse 500+ colleges, 1,200+ hostels, 800+ PGs, and 350+ coaching institutes. Filter by location, budget, ratings, and amenities.',
      details: [
        { icon: MapPin, text: 'Search by city, college name, or landmark' },
        { icon: Star, text: 'Compare ratings and real student reviews' },
        { icon: Wallet, text: 'See original vs discounted fees upfront' },
      ],
      tip: 'Pro Tip: Use the "Near My College" filter to find hostels and PGs within walking distance.',
      image: 'bg-[#C41E3A]/10',
    },
    {
      number: '02',
      icon: Percent,
      title: 'Claim Your Discount',
      color: 'bg-[#8B6914]',
      textColor: 'text-[#8B6914]',
      borderColor: 'border-[#8B6914]',
      description: 'Click "Get Discount" on any listing. We have pre-negotiated exclusive deals with partner institutions just for studentsathi users.',
      details: [
        { icon: FileCheck, text: 'No hidden charges. What you see is what you pay' },
        { icon: Bell, text: 'Instant discount code sent to your phone' },
        { icon: Clock, text: 'Valid for 7 days — enough time to decide' },
      ],
      tip: 'Pro Tip: Featured listings have the highest discounts. Look for the yellow badge!',
      image: 'bg-[#8B6914]/10',
    },
    {
      number: '03',
      icon: Shield,
      title: 'Apply Through Us',
      color: 'bg-[#2D5016]',
      textColor: 'text-[#2D5016]',
      borderColor: 'border-[#2D5016]',
      description: 'Submit your application directly through studentsathi. Our team handles the paperwork and coordinates with the institution.',
      details: [
        { icon: Phone, text: 'Dedicated counselor assigned to you' },
        { icon: CheckCircle, text: 'Document verification support included' },
        { icon: Clock, text: 'Admission confirmation within 48 hours' },
      ],
      tip: 'Pro Tip: Keep your ID proof and marksheets ready for faster processing.',
      image: 'bg-[#2D5016]/10',
    },
    {
      number: '04',
      icon: GraduationCap,
      title: 'Start & Save',
      color: 'bg-[#2D2D2D]',
      textColor: 'text-[#2D2D2D]',
      borderColor: 'border-[#2D2D2D]',
      description: 'Pay the discounted fee directly to the institution. The discount is applied instantly — no waiting, no cashback drama.',
      details: [
        { icon: Wallet, text: 'Pay discounted fee at the counter' },
        { icon: FileCheck, text: 'Get official receipt with discounted amount' },
        { icon: Star, text: 'Rate your experience & help other students' },
      ],
      tip: 'Pro Tip: Refer friends and earn ₹500 cashback when they save too!',
      image: 'bg-[#2D2D2D]/10',
    },
  ];

  return (
    <section className="py-24 bg-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={`${isEven ? 'lg:order-2' : ''}`}>
                  <div className={`${step.image} border-4 border-[#2D2D2D] p-12 relative shadow-[8px_8px_0px_0px_#2D2D2D]`}>
                    <div className="bg-[#F5F1EB] p-8 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000] inline-block">
                      <Icon className={`w-16 h-16 ${step.textColor}`} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-6 -left-6 ${step.color} text-white w-16 h-16 flex items-center justify-center text-2xl font-black border-4 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000]`}>
                      {step.number}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#F4D03F] border-2 border-[#2D2D2D] rotate-12"></div>
                    <div className="absolute top-4 right-12 w-6 h-6 bg-white border-2 border-[#2D2D2D] -rotate-6"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${step.color} px-3 py-1 text-xs font-black uppercase text-white border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]`}>
                      Step {step.number}
                    </div>
                    <div className={`w-12 h-0.5 ${step.color}`}></div>
                  </div>

                  <h2 className={`text-4xl font-black text-[#2D2D2D] uppercase tracking-tight mb-6 ${step.textColor}`}>
                    {step.title}
                  </h2>

                  <p className="text-[#4A3728] text-lg leading-relaxed mb-8 font-medium">
                    {step.description}
                  </p>

                  {/* Detail Points */}
                  <div className="space-y-4 mb-8">
                    {step.details.map((detail, i) => {
                      const DetailIcon = detail.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 bg-[#F5F1EB] border-2 border-[#2D2D2D] p-4 shadow-[3px_3px_0px_0px_#2D2D2D]">
                          <div className={`${step.color} p-2 border-2 border-[#2D2D2D] flex-shrink-0`}>
                            <DetailIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold text-[#2D2D2D]">{detail.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pro Tip */}
                  <div className={`bg-[#F4D03F]/20 border-l-4 ${step.borderColor} p-4`}>
                    <p className="text-sm font-bold text-[#2D2D2D]">
                      <span className={`${step.textColor} uppercase tracking-wide`}>💡 {step.tip.split(':')[0]}:</span>
                      {step.tip.split(':')[1]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;