import React from 'react';
import { ctaData } from '../Data/Diagnostics/data';
import { Check, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const { titlePart1, titlePart2, buttonText, buttonLink, image, features } = ctaData;

  return (
    <section className="py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] shadow-2xl border border-white/5">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side: Text and Features - Switched to Brand Blue */}
          <div className="lg:w-1/2 bg-[#062da3] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-10 uppercase tracking-tighter relative z-10">
              <span className="text-white opacity-60">{titlePart1}</span>
              <br />
              <span className="text-white">{titlePart2}</span>
            </h2>

            {/* Request Button - High Contrast White/Black */}
            <div className="mb-12 relative z-10">
              <a 
                href={buttonLink}
                className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs group hover:bg-black hover:text-white transition-all duration-500 shadow-xl"
              >
                {buttonText}
                <div className="w-8 h-8 bg-[#062da3] rounded-full flex items-center justify-center group-hover:translate-x-1 group-hover:bg-white transition-all duration-500">
                  <ArrowRight size={18} className="text-white group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>

            {/* Features List */}
            <div className="space-y-4 relative z-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/30 group-hover:bg-white transition-all duration-300">
                    <Check size={14} className="text-white group-hover:text-[#062da3] transition-colors" />
                  </div>
                  <span className="text-white font-bold uppercase tracking-tight text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="lg:w-1/2 relative min-h-[450px]">
            <img 
              src={image} 
              alt="Premium Detailing Service" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
            {/* Gradient Overlay to blend with the Blue side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#062da3]/20 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;