import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Patel',
      role: 'B.Tech Student',
      college: 'NIT Trichy',
      savings: '₹10,000',
      bg: 'bg-[#C41E3A]/10',
      text: 'I was skeptical at first, but I actually saved ₹10,000 on my college fees. The admission process was seamless and the team guided me throughout.',
    },
    {
      name: 'Arjun Kumar',
      role: 'Medical Aspirant',
      college: 'Aakash Institute',
      savings: '₹8,000',
      bg: 'bg-[#F4D03F]/20',
      text: 'Got a great discount on my coaching fees. The best part is there are no hidden charges. What you see is what you get.',
    },
    {
      name: 'Sneha Gupta',
      role: 'MBA Student',
      college: 'IIM Bangalore',
      savings: '₹10,000',
      bg: 'bg-[#2D5016]/10',
      text: 'Found a perfect PG near my college and saved ₹1,500 per month. The location is perfect and the discount was applied instantly.',
    },
  ];

  return (
    <section className="py-28 bg-[#2D2D2D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#2D2D2D]">
            Testimonials
          </span>
          <h2 className="text-5xl font-black uppercase tracking-tight mb-6">
            Students Love Our <span className="text-[#F4D03F]">Service</span>
          </h2>
          <p className="text-[#999] max-w-2xl mx-auto text-lg font-medium">
            Don't just take our word for it. Here's what students say about their savings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-10 shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300">
              <Quote className="w-10 h-10 text-[#C41E3A] mb-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${testimonial.bg} border-2 border-[#2D2D2D] flex items-center justify-center text-[#2D2D2D] font-black text-2xl shadow-[2px_2px_0px_0px_#2D2D2D]`}>
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-[#2D2D2D] text-lg uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-[#C41E3A] text-sm font-bold">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="bg-[#2D5016] text-white px-4 py-2 text-xs font-black uppercase border-2 border-[#2D2D2D] shadow-[2px_2px_0px_0px_#2D2D2D]">
                  Saved {testimonial.savings}
                </span>
              </div>

              <p className="text-[#666] leading-relaxed mb-8 text-sm font-medium">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-[#F4D03F] fill-[#F4D03F]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;