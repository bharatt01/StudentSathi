import React from 'react';

const CTASection = () => {
  return (
    <section className="py-28 bg-[#C41E3A] relative overflow-hidden border-y-2 border-[#2D2D2D]">
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-[#F4D03F] border-2 border-[#2D2D2D] rotate-12"></div>
      <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-white/10 border border-white/20 rotate-[-8deg]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
          Ready to Save on Your<br /><span className="text-[#F4D03F]">Education?</span>
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Join thousands of students who have saved lakhs on their education fees. 
          Get started today and claim your discount.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-8 py-5 text-[#2D2D2D] placeholder-[#999] focus:outline-none bg-[#F5F1EB] border-2 border-[#2D2D2D] font-bold text-sm shadow-[4px_4px_0px_0px_#2D2D2D]"
          />
          <button className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white px-10 py-5 font-black uppercase tracking-widest transition-all border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]">
            Get Started
          </button>
        </div>

        <p className="text-white/50 text-sm mt-8 font-medium">
          No spam. Unsubscribe anytime. Join 50,000+ students.
        </p>
      </div>
    </section>
  );
};

export default CTASection;