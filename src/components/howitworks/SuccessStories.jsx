import React from 'react';
import { Quote, Star, TrendingDown } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Rahul Sharma',
      from: 'DTU',
      saved: '₹10,000',
      on: 'College Fee',
      quote: 'I was paying the full fee at DTU until my friend told me about studentsathi. I got ₹10,000 off instantly. The process took 10 minutes.',
      color: 'bg-[#C41E3A]/10',
    },
    {
      name: 'Priya Patel',
      from: 'NIT Trichy',
      saved: '₹24,000',
      on: 'Hostel (2 Years)',
      quote: 'I saved ₹1,000 every month on my hostel rent. Over 2 years, that\'s ₹24,000. That\'s almost a semester\'s worth of savings!',
      color: 'bg-[#2D5016]/10',
    },
    {
      name: 'Arjun Kumar',
      from: 'Aakash Institute',
      saved: '₹10,000',
      on: 'NEET Coaching',
      quote: 'The coaching fee was ₹1,20,000 but through studentsathi I paid ₹1,10,000. Same teachers, same batch, same books — just cheaper.',
      color: 'bg-[#8B6914]/10',
    },
  ];

  return (
    <section className="py-24 bg-[#2D2D2D] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#C41E3A] opacity-10 rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#F4D03F] opacity-10 -rotate-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="bg-[#F4D03F] text-[#2D2D2D] px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-[#2D2D2D] inline-block mb-6 shadow-[3px_3px_0px_0px_#000]">
            Real Stories
          </span>
          <h2 className="text-5xl font-black text-white uppercase tracking-tight mb-4">
            Students Who <span className="text-[#F4D03F]">Saved Big</span>
          </h2>
          <p className="text-[#999] text-lg max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Here's how real students saved real money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-[#F5F1EB] border-2 border-[#2D2D2D] p-8 shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300">
              <Quote className="w-10 h-10 text-[#C41E3A] mb-6" />
              
              <p className="text-[#4A3728] leading-relaxed mb-8 font-medium italic">
                "{story.quote}"
              </p>

              <div className="border-t-2 border-[#2D2D2D] pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${story.color} border-2 border-[#2D2D2D] flex items-center justify-center text-[#2D2D2D] font-black text-xl shadow-[2px_2px_0px_0px_#2D2D2D]`}>
                    {story.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-[#2D2D2D] uppercase tracking-tight">{story.name}</h4>
                    <p className="text-xs text-[#666] font-bold">{story.from}</p>
                  </div>
                </div>

                <div className="bg-[#2D5016]/10 border border-[#2D5016] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-[#2D5016]" />
                    <span className="text-sm font-bold text-[#2D2D2D]">Saved {story.saved}</span>
                  </div>
                  <span className="text-xs font-black text-[#2D5016] uppercase">{story.on}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-[#F4D03F] fill-[#F4D03F]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;