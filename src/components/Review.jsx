import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to the middle one

  const testimonials = [
    {
      id: 1,
      number: "01.",
      name: "Matthew Lewis",
      location: "CLIENT, UK",
      quote: "Remap made the car considerably more powerful throughout the rev range without sacrificing any efficiency. Tristan was very flexible with times and managed to get the exact date and time I needed. Very good for fitting aftermarket parts and advice. 10/10 will definitely come back soon.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      number: "02.",
      name: "Warren Johnstone",
      location: "CLIENT, UK",
      quote: "Tristan and his team are exceptional, fast, high quality and reasonably priced. I wouldn’t consider using another garage on the iom. Highly recommended.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    // {
    //   id: 3,
    //   number: "03.",
    //   name: "Daniel Reed",
    //   location: "CLIENT, FRANCE",
    //   quote: "This is the best vehicle wash in the area, out of all the ones I've tried. I continue to visit because of their great finish, quick service, and attention to detail. Truly unmatched quality!",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    // }
  ];

  return (
    <section className="relative bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle Blue Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23062da3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center gap-2 bg-[#062da3]/10 w-fit px-4 py-1.5 rounded-full border border-[#062da3]/30">
            <Star className="w-4 h-4 text-[#062da3] fill-[#062da3]" />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
              Client Feedback
            </span>
          </div>
        </div>

        {/* Main Content - Quote and Image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
          
          {/* Large Quote Icon - Brand Blue */}
          <div className="hidden lg:block flex-shrink-0 -mt-20 animate-fade-in">
            <div className="text-[180px] xl:text-[220px] leading-none font-serif text-[#062da3] opacity-20 select-none">
              “
            </div>
          </div>

          {/* Center Content - Quote Text */}
          <div className="flex-1 animate-slide-up transition-all duration-500">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-[1.2] tracking-tight">
              {testimonials[activeIndex].quote}
            </p>
          </div>

          {/* Right - Client Image with Blue Glow */}
          <div className="flex-shrink-0 animate-fade-in-delay relative">
            <div className="absolute -inset-4 bg-[#062da3]/20 blur-2xl rounded-full"></div>
            {/* <img 
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="relative w-64 h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-96 rounded-2xl object-cover shadow-[0_20px_50px_rgba(6,45,163,0.3)] border border-white/10"
            /> */}
          </div>
        </div>

        {/* Bottom Section - Selection & Rating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Selectable Clients */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-500 group border-t-2 pt-6 ${
                  activeIndex === index ? 'border-[#062da3] opacity-100' : 'border-gray-800 opacity-40'
                } hover:opacity-100`}
              >
                <div className="space-y-4">
                  <div className={`text-sm font-black transition-colors ${activeIndex === index ? 'text-[#062da3]' : 'text-gray-500'}`}>
                    {testimonial.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#062da3] text-[10px] font-bold tracking-[0.2em] uppercase">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Score Card - Brand Blue Background */}
          <div className="lg:col-span-4 bg-[#062da3] p-8 rounded-xl shadow-2xl animate-fade-in-delay relative overflow-hidden group">
            {/* Background decorative star */}
            <Star className="absolute -right-8 -bottom-8 w-40 h-40 text-black/10 rotate-12" />
            
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                4.9
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
                  Average Rating
                </p>
              </div>
            </div>
            <p className="relative z-10 mt-4 text-white font-bold text-lg">
              30,000+ Verified Reviews
            </p>
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

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
      `}</style>
    </section>
  );
}