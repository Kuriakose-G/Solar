"use client"
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much do solar panels cost?",
      answer: "The cost of solar panels depends on the size of your system and the specific products you choose. We offer a free consultation to provide you with a detailed quote based on your needs. Most residential systems range from £5,000 to £12,000 before financing options."
    },
    {
      question: "How long does installation take?",
      answer: "A typical residential installation takes 1-2 days. We handle everything from start to finish, so you can sit back and relax. Commercial installations may take longer depending on the system size."
    },
    {
      question: "Do I need planning permission?",
      answer: "In most cases, you do not need planning permission for solar panels in the UK. However, there are some exceptions, which we can advise you on during our consultation. Listed buildings and certain areas may have restrictions."
    },
    {
        question: "What is the lifespan of solar panels?",
        answer: "Our solar panels are guaranteed for 25 years, but they can last much longer (often 30-40 years). We use only the highest-quality products to ensure your system performs for decades to come."
    },
    {
      question: "What financing options are available?",
      answer: "We offer several financing options including cash payment, traditional loans, and leasing arrangements. Many customers also benefit from government incentives and renewable energy grants. We'll help you explore all options."
    },
    {
      question: "How much can I save with solar panels?",
      answer: "Most customers save between 50-70% on their electricity bills annually. Your savings depend on your current usage, roof orientation, location, and system size. Our calculator provides a personalized estimate."
    },
    {
      question: "What happens during cloudy days or winter?",
      answer: "Solar panels still generate electricity on cloudy days, though at reduced efficiency. UK systems are designed to handle cloudy conditions. Most customers generate 80% of their annual electricity in summer and 20% in winter."
    },
    {
      question: "Do I need a battery system?",
      answer: "Not necessarily. Grid-tied systems (without batteries) are most cost-effective and are eligible for export tariff payments. Batteries are recommended if you want energy independence or have frequent power outages in your area."
    },
    {
      question: "What maintenance is required?",
      answer: "Solar panels require minimal maintenance. We recommend occasional cleaning (2-3 times yearly) and we offer comprehensive maintenance packages. Most systems require professional inspection every 5-7 years."
    },
    {
      question: "Will solar panels affect my home value?",
      answer: "Studies show that homes with solar panels sell for 3-4% more than comparable homes. Solar panels are attractive to buyers and demonstrate energy efficiency and environmental responsibility."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-green-500/20 rounded-lg overflow-hidden bg-gray-900 shadow-lg shadow-black/30">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-950 text-white hover:bg-green-500/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-left text-green-300">{faq.question}</h3>
                <FaChevronDown 
                  className={`text-green-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={16}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-black/70 border-t border-green-500/30">
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
