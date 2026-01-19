import React from 'react';
import { serviceDetailData } from '../Data/Diagnostics/data';
import { Check } from 'lucide-react'; // Optional icon for bullet points

const ServiceDetail = () => {
  const { mainTitle, mainDescription, benefits, process } = serviceDetailData;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {mainTitle}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {mainDescription}
          </p>
        </div>

        {/* Two Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: When you need it */}
          <div className="bg-[#f9f9f9] rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-black mb-8">{benefits.title}</h3>
            <div className="space-y-8">
              {benefits.items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <Check className="text-black w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">{item.heading}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How it works */}
          <div className="bg-[#f9f9f9] rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-black mb-8">{process.title}</h3>
            <div className="space-y-8">
              {process.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm font-bold text-black">
                    {index + 1}.
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">{step.heading}</h4>
                    <p className="text-gray-500 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;