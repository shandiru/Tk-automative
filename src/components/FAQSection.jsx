import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsLeft = [
    {
      question: "What is an ECU?",
      answer: "A vehicles brain is the ECU (engine control unit) this tells the vehicle what to do at any given time and condition from various inputs and sensors on the engine. From the factory the manufacturers must make compromises to allow for everywhere that vehicle will be sold, meaning, varying climates, fuel qualities, laws, and warranties, for this reason there is often a lot of leeway in both performance and economy to be had."
    },
    {
      question: "Is it safe?",
      answer: "A remap is completely safe providing it is performed by the correct people who have a strong understanding of vehicle workings and limitations. At TK Automotive we optimize the operating conditions for your vehicle and not beyond them. Each vehicle has varying limits, which is why it is important to ensure the vehicle is in good condition before a remap is carried out."
    },
    {
      question: "Do I need to notify my insurance?",
      answer: "We advise all our customers that it is their responsibility to notify their respective insurance companies, as it is technically a vehicle modification."
    },
    {
      question: "What will it do to my fuel consumption?",
      answer: "It is a common misconception that fuel economy will suffer greatly after having a remap carried out. This simply is not true. The fuel saving comes from an increase in low/ mid torque that a remap can provide. In real world terms the vehicle will have a greater pull at lighter throttle input."
    }
  ];

  const faqsRight = [
    {
      question: "Why Do I want a remap?",
      answer: "Each individual is different. Some strive for maximum power, other for maximum fuel efficiency, others just want a smoother drive with less gear changes. Typically, a remap offers a sharper throttle response, better drivability, greater power and torque and a reduction in fuel consumption."
    },
    {
      question: "Why choose you over cheaper alternatives?",
      answer: "Power claims are just that; often numbers sell, but we offer a fair and reliable service. Our remaps are designed to work with the vehicle in question, ensuring we never push beyond mechanical limitations or sacrifice reliability for a peak BHP number."
    },
    {
      question: "Is it just about the peak BHP number?",
      answer: "No. Peak HP alone does not tell the story. Often peak hp is high in the rev range, but even a fast road car spends most time at low/mid rpms. Concentrating on this area greatly improves overall drivability, which you don't see from a peak number."
    },
    {
      question: "Do you inspect the vehicle first?",
      answer: "Yes. A diagnostics test and a brief vehicle inspection is carried out prior to any remapping to ensure the vehicle is in a suitable condition for the work to be carried out."
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
          {/* Subtitle - Color changed to Brand Blue */}
          <div className="text-[#062da3] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6">
            Engine Remapping Expertise
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl uppercase tracking-tighter">
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
                className="border border-white/10 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold uppercase transition-colors duration-300 ${openIndex === index ? 'text-[#062da3]' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-[#062da3]" />
                    ) : (
                      <Plus className="w-6 h-6 text-white group-hover:text-[#062da3]" />
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
                key={index + 4}
                className="border border-white/10 animate-slide-up group"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <button
                  onClick={() => toggleAccordion(index + 4)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold uppercase transition-colors duration-300 ${openIndex === index + 4 ? 'text-[#062da3]' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index + 4 ? (
                      <Minus className="w-6 h-6 text-[#062da3]" />
                    ) : (
                      <Plus className="w-6 h-6 text-white group-hover:text-[#062da3]" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index + 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out both; }
      `}</style>
    </section>
  );
}