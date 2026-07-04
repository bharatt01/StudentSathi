import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, BookOpen } from 'lucide-react';

const InstituteCTA = () => {
  return (
    <section className="py-20 bg-[#2D2D2D] relative overflow-hidden border-t-2 border-[#444]">
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#2D5016] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#F4D03F] opacity-10 -rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
              Need Help?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
              Not Sure Which<br />Coaching to Join?
            </h2>
            <p className="text-[#999] text-lg mb-8 font-medium leading-relaxed">
              Talk to our exam experts for free. They'll analyze your preparation level and recommend the best institute and batch for your target exam.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-[#F5F1EB] px-5 py-3 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000]">
                <Phone className="w-5 h-5 text-[#2D5016]" />
                <span className="text-sm font-black text-[#2D2D2D]">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F1EB] px-5 py-3 border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000]">
                <Mail className="w-5 h-5 text-[#2D5016]" />
                <span className="text-sm font-black text-[#2D2D2D]">coaching@studentsathi.in</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-8 shadow-[8px_8px_0px_0px_#000]">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#2D5016] p-2 border-2 border-[#2D2D2D]">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-[#2D2D2D] uppercase tracking-tight">
                Get Free Career Guidance
              </h3>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] placeholder-[#999] text-sm font-bold focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] placeholder-[#999] text-sm font-bold focus:outline-none"
              />
              <select className="w-full px-5 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] text-sm font-bold focus:outline-none appearance-none cursor-pointer">
                <option>Target Exam</option>
                <option>IIT-JEE</option>
                <option>NEET</option>
                <option>UPSC</option>
                <option>CAT/MBA</option>
                <option>Banking</option>
                <option>CA/CS</option>
              </select>
              <select className="w-full px-5 py-4 bg-white border-2 border-[#2D2D2D] text-[#2D2D2D] text-sm font-bold focus:outline-none appearance-none cursor-pointer">
                <option>Current Preparation Level</option>
                <option>Just Starting</option>
                <option>6 Months Done</option>
                <option>1 Year Done</option>
                <option>Dropper / Repeater</option>
              </select>
              <button className="w-full bg-[#2D5016] hover:bg-[#1E3A10] text-white py-4 font-black uppercase tracking-widest border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] hover:shadow-[2px_2px_0px_0px_#2D2D2D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Request Free Counseling
              </button>
            </div>
            <p className="text-[#666] text-xs mt-4 text-center font-medium">
              Our exam expert will call you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteCTA;