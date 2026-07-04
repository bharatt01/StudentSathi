import React from 'react';
import { Shield, BadgeCheck, Clock, Users, Wallet, Phone } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Verified Institutions',
      description: 'Every college, hostel, PG, and coaching center is physically verified by our team before listing.',
      color: 'bg-[#C41E3A]',
    },
    {
      icon: BadgeCheck,
      title: 'Guaranteed Discounts',
      description: 'We have signed MOUs with partner institutions. Your discount is guaranteed, not promised.',
      color: 'bg-[#2D5016]',
    },
    {
      icon: Clock,
      title: '48-Hour Admission',
      description: 'From application to confirmation, we ensure your seat is secured within 48 working hours.',
      color: 'bg-[#8B6914]',
    },
    {
      icon: Users,
      title: '50,000+ Students',
      description: 'Join the growing community of students who have saved crores through studentsathi.',
      color: 'bg-[#2D2D2D]',
    },
    {
      icon: Wallet,
      title: 'Zero Hidden Charges',
      description: 'We earn from institutions, not students. You never pay a single rupee extra to studentsathi.',
      color: 'bg-[#C41E3A]',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Stuck somewhere? Our counselors are available round the clock to help you out.',
      color: 'bg-[#2D5016]',
    },
  ];

  return (
    <section className="py-24 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-[#2D5016] text-white px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
            Why Trust Us
          </span>
          <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight mb-4">
            Built for Students,<br />Not for Profit
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto font-medium">
            We started studentsathi because we were tired of seeing students overpay for education. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-8 shadow-[6px_6px_0px_0px_#2D2D2D] hover:shadow-[3px_3px_0px_0px_#2D2D2D] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 group">
                <div className={`${badge.color} w-16 h-16 flex items-center justify-center mb-6 border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] group-hover:shadow-[2px_2px_0px_0px_#2D2D2D] group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#2D2D2D] uppercase tracking-tight mb-3">
                  {badge.title}
                </h3>
                <p className="text-[#666] leading-relaxed font-medium">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;