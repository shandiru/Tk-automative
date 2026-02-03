import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
const PHONE = import.meta.env.VITE_PHONE_NUMBER;
const PHONE_TEL = import.meta.env.VITE_PHONE_TEL;

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black pt-30">
      {/* Background Video with Deep Blue Overlay */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/fall.png"
          onError={(e) => (e.currentTarget.style.display = "none")}
        >
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-brand/20 to-black/95"></div>
      </div>

      {/* Blue Accent Stripe (#062da3) */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 lg:w-6 bg-brand shadow-[0_0_40px_rgba(6,45,163,0.5)]"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-12 md:py-16">

        {/* Top Content - Now Aligned Left */}
        <div className="flex justify-start px-8 md:px-16 lg:px-24">
          <div className="max-w-xl lg:max-w-2xl space-y-8 sm:space-y-6 text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full animate-fade-in">
              <Star className="w-4 h-4 text-brand fill-brand" />
              <span className="text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
                Expert Mechanical Care
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
              Professional <span className="text-brand">automotive services</span> engineered for precision and performance.
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-lg animate-fade-in-delay">
              Expert mechanical repairs, tuning, and diagnostics for all vehicle types. Experience the precision and expertise behind TK Automotive.
            </p>

            {/* CTA Buttons - Side by Side */}
            <div className="pt-4 flex flex-row items-center justify-start gap-3 animate-fade-in-delay">
              <button
                onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-4 md:px-8 py-4 bg-brand hover:bg-white text-white hover:text-brand font-bold rounded-sm transition-all duration-300 flex items-center gap-2 shadow-[0_10px_30px_rgba(6,45,163,0.3)] shrink-0"
              >
                <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-tighter whitespace-nowrap">Explore Services</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              <a
                href={PHONE_TEL}
                className="group px-4 md:px-8 py-4 border-2 border-brand bg-transparent hover:bg-brand text-white font-bold rounded-sm transition-all duration-300 flex items-center gap-2 shrink-0"
              >
                <svg
                  className="w-4 h-4 md:w-5 h-5 text-brand group-hover:text-white transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-tighter whitespace-nowrap">Call Us Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Large Title (Now Aligned Left) */}
        <div className="w-full px-8 md:px-16 lg:px-24 pb-12">
          <div className="text-left">
            <h1 className="text-[10vw] font-black text-white leading-none tracking-tighter animate-slide-up-slow uppercase"
              style={{
                letterSpacing: '-0.05em',
                textShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}>
              Tk <span className="text-brand">.</span> Automotive
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}