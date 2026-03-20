"use client"
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How much do solar panels cost?",
      answer: "The cost of solar panels depends on the size of your system and the specific products you choose. We offer a free consultation to provide you with a detailed quote based on your needs."
    },
    {
      question: "How long does installation take?",
      answer: "A typical residential installation takes 1-2 days. We handle everything from start to finish, so you can sit back and relax."
    },
    {
      question: "Do I need planning permission?",
      answer: "In most cases, you do not need planning permission for solar panels in the UK. However, there are some exceptions, which we can advise you on during our consultation."
    },
    {
        question: "What is the lifespan of solar panels?",
        answer: "Our solar panels are guaranteed for 25 years, but they can last much longer. We use only the highest-quality products to ensure your system performs for decades to come."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
