import React from 'react';
import { ArrowRight, GraduationCap, Home, Building2, BookOpen } from 'lucide-react';

const ProcessCTA = () => {
  const quickLinks = [
    { icon: GraduationCap, label: 'Find Colleges', href: '/colleges', color: 'bg-[#C41E3A]' },
    { icon: Home, label: 'Find Hostels', href: '/hostels', color: 'bg-[#8B6914]' },
    { icon: Building2, label: 'Find PGs', href: '/pgs', color: 'bg-[#C41E3A]' },
    { icon: BookOpen, label: 'Find Coaching', href: '/institutes', color: 'bg-[#2D5016]' },
  ];

  return (
    <section className="py-24 bg-[#F5F1EB] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-5xl md:text-6xl font-black text-[#2D2D2D] uppercase tracking-tight mb-6 leading-tight">
          Ready to Start <span className="text-[#C41E3A]">Saving?</span>
        </h2>
        <p className="text-[#666] text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Join 50,000+ students who have already saved crores. Your education shouldn't cost more than it needs to.
        </p>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="bg-white border-2 border-[#2D2D2D] p-6 shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <div className={`${link.color} w-12 h-12 flex items-center justify-center mx-auto mb-3 border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-black text-[#2D2D2D] uppercase tracking-wide group-hover:text-[#C41E3A] transition-colors">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="bg-[#2D2D2D] border-4 border-[#2D2D2D] shadow-[8px_8px_0px_0px_#C41E3A] p-8 md:p-12 inline-block">
          <p className="text-[#F4D03F] text-sm font-black uppercase tracking-widest mb-4">
            Still Have Questions?
          </p>
          <p className="text-white text-lg mb-6 font-medium">
            Call us anytime. We actually pick up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-8 py-4 font-black uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
              Call +91 98765 43210 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-[#2D2D2D] px-8 py-4 font-black uppercase tracking-widest border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCTA;