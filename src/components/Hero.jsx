import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black pt-30">
      {/* Background Video with Deep Blue Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.prod.website-files.com/68a54cc1e7d85352c9523604%2F690060d7d84437e2d567275f_slider-video-transcode.mp4" type="video/mp4" />
        </video>
        {/* Adjusted gradient to use brand blue #062da3 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#062da3]/20 to-black/95"></div>
      </div>

      {/* Blue Accent Stripe (#062da3) */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 lg:w-6 bg-[#062da3] shadow-[0_0_40px_rgba(6,45,163,0.5)]"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-12 md:py-16">

        {/* Top Right Content - Updated for Automotive Services */}
        <div className="flex justify-end px-6 md:px-12 lg:px-20">
          <div className="max-w-xl lg:max-w-2xl space-y-8 sm:space-y-6 text-right lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full animate-fade-in">
              <Star className="w-4 h-4 text-[#062da3] fill-[#062da3]" />
              <span className="text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
                Expert Mechanical Care
              </span>
            </div>

            {/* Main Heading - Refreshed Content */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
              Professional <span className="text-[#062da3]">automotive services</span> engineered for precision and performance.
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-lg ml-auto lg:ml-0 animate-fade-in-delay">
              Expert mechanical repairs, tuning, and diagnostics for all vehicle types. Experience the precision and expertise behind TK Automotive.
            </p>

            {/* CTA Button - Updated Text */}
            <div className="pt-4 animate-fade-in-delay">
              <button
                onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-[#062da3] hover:bg-white text-white hover:text-[#062da3] font-bold rounded-sm transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(6,45,163,0.3)] ml-auto lg:ml-0"
              >
                <span className="relative z-10 text-sm md:text-base uppercase tracking-tighter">Explore Services</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom - Large Title (Centered) */}
        <div className="w-full px-6 pb-12">
          <div className="text-center">
            <h1 className="text-[10vw] font-black text-white leading-none tracking-tighter animate-slide-up-slow uppercase"
              style={{
                letterSpacing: '-0.05em',
                textShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
              Tk <span className="text-[#062da3]">.</span> Automotive
            </h1>
          </div>
        </div>

      </div>


    </div>
  );
}