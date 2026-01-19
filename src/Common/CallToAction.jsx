import React from 'react';
import { ctaData } from '../Data/Diagnostics/data';
import { Check, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const { titlePart1, titlePart2, buttonText, buttonLink, image, features } = ctaData;

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] shadow-xl">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side: Text and Features */}
          <div className="lg:w-1/2 bg-[#FDF567] p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
              <span className="text-gray-600 opacity-70">{titlePart1}</span>
              <br />
              <span className="text-black">{titlePart2}</span>
            </h2>

            {/* Request Button */}
            <div className="mb-12">
              <a 
                href={buttonLink}
                className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold group hover:bg-gray-800 transition-all duration-300"
              >
                {buttonText}
                <div className="w-8 h-8 bg-[#FDF567] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} className="text-black" />
                </div>
              </a>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Check size={18} className="text-black font-bold" />
                  </div>
                  <span className="text-black font-medium tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src={image} 
              alt="Towing Service" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;