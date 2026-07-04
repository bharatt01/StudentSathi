import React from 'react';
import { Percent, Shield, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Percent,
      title: 'Guaranteed Savings',
      description: 'We guarantee minimum ₹5,000 savings on every admission through our platform.',
    },
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All colleges, hostels, and coaching centers are physically verified by our team.',
    },
    {
      icon: Clock,
      title: 'Quick Process',
      description: 'Get admission confirmation within 48 hours of applying through us.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our counselors help you choose the best institution based on your needs.',
    },
  ];

  return (
    <section className="py-28 bg-[#F5F1EB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8E2D8] border-l-2 border-[#2D2D2D]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
              Why StudentSathi?
            </span>
            <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight mb-8 leading-tight">
              Why Students Trust Us<br />For Their Future
            </h2>
            <p className="text-[#666] text-lg mb-12 leading-relaxed font-medium">
              We have partnered with top educational institutions across India to bring you 
              exclusive discounts that you won't find anywhere else. Our mission is to make 
              quality education affordable.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E8E2D8] border-2 border-[#2D2D2D] flex items-center justify-center group-hover:bg-[#C41E3A] transition-colors duration-300 shadow-[3px_3px_0px_0px_#2D2D2D]">
                      <Icon className="w-7 h-7 text-[#2D2D2D] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight mb-2">{feature.title}</h3>
                      <p className="text-[#666] leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#C41E3A] border-4 border-[#2D2D2D] p-10 text-white shadow-[12px_12px_0px_0px_#2D2D2D] relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-[#F4D03F] border-2 border-[#2D2D2D] rotate-12"></div>
              <div className="absolute bottom-[-20px] left-[-20px] w-16 h-16 bg-white/10 border border-white/20"></div>

              <div className="flex items-center gap-5 mb-10 relative">
                <div className="w-20 h-20 bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <Users className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-4xl font-black">50,000+</p>
                  <p className="text-[#F4D03F] text-sm font-bold uppercase tracking-widest">Happy Students</p>
                </div>
              </div>

              <div className="space-y-6 relative">
                <div className="bg-white/5 border border-white/20 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 bg-[#F4D03F]/30 border-2 border-[#C41E3A]"></div>
                      ))}
                    </div>
                    <span className="text-sm text-white/70 font-bold">Joined this month</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    "I saved ₹10,000 on my engineering college fees. The process was smooth and the team was very helpful!"
                  </p>
                  <p className="text-sm font-black mt-4 text-[#F4D03F] uppercase tracking-wide">— Rahul Sharma, DTU Student</p>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#F5F1EB] text-[#2D2D2D] py-5 font-black uppercase tracking-widest hover:bg-[#E8E2D8] transition-colors border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px]">
                Join 50,000+ Students
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;