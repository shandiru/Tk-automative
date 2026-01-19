import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden py-16 bg-black">
      {/* Background Video with Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Red Accent Stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-40 bg-gradient-to-r from-red-600 via-red-600/60 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex flex-col justify-between py-8 md:py-12 lg:py-16">
        
        {/* Top Right Content */}
        <div className="flex justify-end px-6 md:px-12 lg:px-20 pt-4 md:pt-8 lg:pt-12">
          <div className="max-w-xl lg:max-w-2xl space-y-4 md:space-y-6">
            {/* Premium Car Care Badge */}
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in">
              <Star className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-xs md:text-sm font-semibold text-white tracking-wider uppercase">
                Premium Car Care
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight animate-slide-up">
              Premium <span className="text-red-500">car wash</span> services designed for today's busy drivers.
            </h2>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4 animate-fade-in-delay">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-white text-white hover:text-black font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                <span className="relative z-10 text-sm md:text-base">Try Eco Wash</span>
                <div className="relative z-10 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom - Large Title (Centered) */}
        <div className="w-full px-6 md:px-12 lg:px-20 pb-8 md:pb-12 lg:pb-16 pt-20">
          <div className="text-center">
            <h1 className="text-[12vw] md:text-[18vw] lg:text-[12vw] font-black text-white leading-none tracking-tighter animate-slide-up-slow uppercase" style={{ letterSpacing: '-0.05em' }}>
              Prime Shine
            </h1>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes slide-up-slow {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-slow {
          animation: slide-up-slow 1s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}