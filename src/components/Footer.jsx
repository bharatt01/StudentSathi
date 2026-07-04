import React from 'react';
import { GraduationCap, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'For Students': ['Find Colleges', 'Find Hostels', 'Find PGs', 'Coaching Centers', 'Scholarships'],
    'Company': ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
    'Support': ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
  };

  return (
    <footer className="bg-[#2D2D2D] text-[#999] py-20 border-t-2 border-[#444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#C41E3A] p-3 border-2 border-white rotate-[-3deg]">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">StudentSathi</h3>
              </div>
            </div>
            <p className="text-[#999] mb-8 max-w-sm leading-relaxed font-medium">
              Helping students find the best educational institutions while saving money 
              on admission fees. Your future, made affordable.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#444] border border-[#555] flex items-center justify-center hover:bg-[#C41E3A] transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="w-12 h-12 bg-[#444] border border-[#555] flex items-center justify-center hover:bg-[#C41E3A] transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#999] hover:text-[#F4D03F] transition-colors text-sm font-medium flex items-center gap-1 group">
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#444] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-sm font-medium">
            © 2026 StudentSathi. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-[#666] font-medium">
            <a href="#" className="hover:text-[#F4D03F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F4D03F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F4D03F] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;