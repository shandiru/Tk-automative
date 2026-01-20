import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video with Deep Blue Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.prod.website-files.com/68a54cc1e7d85352c9523604%2F690060d7d84437e2d567275f_slider-video-transcode.mp4" type="video/mp4" />
        </video>
        {/* Adjusted gradient to use brand blue #062da3 for a cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#062da3]/20 to-black/90"></div>
      </div>

      {/* Blue Accent Stripe (#062da3) */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 lg:w-6 bg-[#062da3] shadow-[0_0_40px_rgba(6,45,163,0.5)]"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-12 md:py-16">
        
        {/* Top Right Content */}
        <div className="flex justify-end px-6 md:px-12 lg:px-20">
          <div className="max-w-xl lg:max-w-2xl space-y-6">
            {/* Premium Car Care Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full animate-fade-in">
              <Star className="w-4 h-4 text-[#062da3] fill-[#062da3]" />
              <span className="text-xs md:text-sm font-semibold text-white tracking-widest uppercase">
                Premium Car Care
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-slide-up">
              Premium <span className="text-[#062da3]">car wash</span> services designed for today's busy drivers.
            </h2>

            {/* CTA Button */}
            <div className="pt-4 animate-fade-in-delay">
              <button className="group relative px-8 py-4 bg-[#062da3] hover:bg-white text-white hover:text-[#062da3] font-bold rounded-sm transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(6,45,163,0.3)]">
                <span className="relative z-10 text-sm md:text-base uppercase tracking-tighter">Try Eco Wash</span>
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

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up-slow {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.5s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s both; }
        .animate-slide-up-slow { animation: slide-up-slow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
      `}</style>
    </div>
  );
}