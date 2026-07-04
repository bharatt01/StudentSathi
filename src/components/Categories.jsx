import React from 'react';
import { GraduationCap, Home, Building2, BookOpen, ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: 'Colleges & Universities',
      description: 'Find top-rated colleges with up to 10% fee waiver',
      icon: GraduationCap,
      count: '500+',
      bg: 'bg-[#C41E3A]',
      href: '#colleges',
    },
    {
      title: 'Hostels',
      description: 'Secure accommodation with exclusive deals',
      icon: Home,
      count: '1,200+',
      bg: 'bg-[#2D5016]',
      href: '#hostels',
    },
    {
      title: 'Paying Guests (PG)',
      description: 'Affordable PGs near your college',
      icon: Building2,
      count: '800+',
      bg: 'bg-[#F4D03F]',
      textDark: true,
      href: '#pgs',
    },
    {
      title: 'Coaching Centers',
      description: 'Best institutes for competitive exams',
      icon: BookOpen,
      count: '350+',
      bg: 'bg-[#2D2D2D]',
      href: '#coaching',
    },
  ];

  return (
    <section className="py-28 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="bg-[#C41E3A] text-white px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
              Browse Categories
            </span>
            <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight">
              What Are You<br />Looking For?
            </h2>
          </div>
          <button className="flex items-center gap-3 text-[#2D2D2D] font-black uppercase tracking-widest text-sm hover:gap-5 transition-all group">
            View All 
            <span className="bg-[#2D2D2D] text-white p-2 border-2 border-[#2D2D2D] group-hover:bg-[#C41E3A] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const textColor = cat.textDark ? 'text-[#2D2D2D]' : 'text-white';
            return (
              <a
                key={index}
                href={cat.href}
                className="group relative overflow-hidden aspect-[4/5] cursor-pointer border-2 border-[#2D2D2D] shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300"
              >
                <div className={`absolute inset-0 ${cat.bg} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="absolute top-8 left-8">
                  <div className="bg-white/20 border-2 border-white/30 p-3 backdrop-blur-sm">
                    <Icon className={`w-8 h-8 ${textColor}`} />
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                  <span className={`bg-white/20 border-2 border-white/30 ${textColor} px-3 py-1 text-sm font-black`}>
                    {cat.count}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className={`text-2xl font-black ${textColor} mb-3 uppercase tracking-tight`}>
                    {cat.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 font-medium">
                    {cat.description}
                  </p>
                  <div className={`flex items-center gap-2 ${textColor} font-black text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0`}>
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;