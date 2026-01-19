import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsLeft = [
    {
      question: "How is the car being delivered?",
      answer: "When you book a car via our website, you are prompted to enter your residence address. We take care of the full logistic process and deliver your car to your residence location at least 2 hours before your booking time."
    },
    {
      question: "What happens if i get a ticket?",
      answer: "Fast and extraordinary cars catch attention. Unfortunately, speed or parking tickets are also part of the deal sometimes. In case of a ticket, we will always charge the driver of the car at the moment of incidence."
    },
    {
      question: "Can i always reach customer service?",
      answer: "Yes, we have a 24/7 customer service desk. This means we are there for you both on the road and off the road."
    }
  ];

  const faqsRight = [
    {
      question: "How many kilometers can I drive?",
      answer: "You can drive as many kilometers as you want. For most of our cars, the first 250 kilometers are included in the rental price. After exceeding these numbers on a daily basis, you will be charged an additional 2 AED per driven kilometer. However, for sport cars such as the Ferrari Portofino, this range is 100 kilometers. The cost for the sport cars is 4 AED per extra driven kilometer."
    },
    {
      question: "Where can I return the car?",
      answer: "Your car can be returned to our location at all times. You can find our contact details at the contact page."
    },
    {
      question: "Can I also buy a car at M.I.P.?",
      answer: "It may happen that you fall in love with a car from our inventory. All cars from our inventory are also available for sale. Click the 'buy now' button in our navigation bar or get in touch with our sales department for more information."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          {/* Subtitle */}
          <div className="text-red-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6">
            RENTING WITH MIP
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {faqsLeft.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqsRight.map((faq, index) => (
              <div 
                key={index + 3}
                className="border border-white/20 animate-slide-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <button
                  onClick={() => toggleAccordion(index + 3)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index + 3 ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index + 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}