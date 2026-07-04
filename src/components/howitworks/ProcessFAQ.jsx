import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const ProcessFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is studentsathi really free for students?',
      answer: 'Absolutely. studentsathi is 100% free for students. We earn a commission from partner institutions when you enroll through us. You never pay us anything — in fact, you save money by using our platform.',
    },
    {
      question: 'How is the discount applied? Do I pay studentsathi?',
      answer: 'No, you never pay studentsathi. The discount is applied directly at the institution when you pay your fees. Just show your studentsathi discount code at the admission counter and pay the reduced amount.',
    },
    {
      question: 'Are these real discounts or just inflated prices shown lower?',
      answer: 'These are genuine discounts negotiated directly with institution owners. The "original fee" shown is the actual fee charged to walk-in students. We verify this regularly through mystery shopping.',
    },
    {
      question: 'What if the institution denies the discount?',
      answer: 'This rarely happens, but if it does, call our helpline immediately at +91 98765 43210. We have legally binding agreements with all partners and will resolve the issue within 24 hours — guaranteed.',
    },
    {
      question: 'Can I get discount on hostel/ PG rent every month?',
      answer: 'Yes! Unlike college fees which are one-time, hostel and PG discounts apply every month for the entire duration of your stay. That means ₹1,500 off every month for 12 months = ₹18,000 total savings.',
    },
    {
      question: 'Do I need to inform the institution before visiting?',
      answer: 'Yes, we recommend applying through our platform first. This ensures your discount is registered in the institution\'s system before you arrive. Walk-ins without prior application may not get the discount.',
    },
    {
      question: 'Is there any eligibility criteria for the discount?',
      answer: 'No special eligibility. Any student who applies through studentsathi gets the discount. However, some high-demand institutions may have limited discounted seats per month — so apply early.',
    },
    {
      question: 'What documents do I need to carry?',
      answer: 'Generally: ID proof (Aadhar/PAN), marksheets of last qualifying exam, passport photos, and your studentsathi discount code. Specific requirements vary by institution and will be shared by your counselor.',
    },
  ];

  return (
    <section className="py-24 bg-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4D03F] px-4 py-2 border-2 border-[#2D2D2D] shadow-[3px_3px_0px_0px_#2D2D2D] mb-6">
            <HelpCircle className="w-5 h-5 text-[#2D2D2D]" />
            <span className="text-[#2D2D2D] text-xs font-black uppercase tracking-widest">Got Questions?</span>
          </div>
          <h2 className="text-5xl font-black text-[#2D2D2D] uppercase tracking-tight mb-4">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-[#666] text-lg font-medium">
            Everything you need to know before you start saving.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F5F1EB] border-2 border-[#2D2D2D] shadow-[4px_4px_0px_0px_#2D2D2D] transition-all duration-300 ${openIndex === index ? 'ring-2 ring-[#C41E3A]' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-black text-[#2D2D2D] uppercase tracking-tight pr-4">
                  {faq.question}
                </span>
                <ChevronDown className={`w-6 h-6 text-[#C41E3A] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t-2 border-[#E8E2D8] pt-4">
                  <p className="text-[#666] leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFAQ;