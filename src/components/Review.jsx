import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const testimonials = [
    {
      id: 1,
      number: "01.",
      name: "Cassie Carleton",
      location: "CLIENT, USA",
      quote: "My SUV had been through some rough weather and was looking very dull when I brought it in. The team took their time and really transformed it. The exterior shine was flawless interior cleaning!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      number: "02.",
      name: "Ronald Benson",
      location: "CLIENT, UK",
      quote: "My car always looks brand new when I visit, even after months of visiting here! The group is amiable, prompt, and professional. If you want your motor vehicle to shine, I highly recommend it!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      number: "03.",
      name: "Daniel Reed",
      location: "CLIENT, FRANCE",
      quote: "This is the best vehicle wash in the area, out of all the ones I've tried. I continue to visit because of their great finish, quick service, and attention to detail. I am yet to see my car look better!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="relative bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-white font-bold tracking-wider uppercase text-sm">
              People Trusting us!
            </span>
          </div>
        </div>

        {/* Main Content - Quote, Text and Image in Same Row */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-start mb-16 md:mb-20 lg:mb-24">
          
          {/* Large Quote Icon - Left */}
          <div className="flex-shrink-0 -mt-4 animate-fade-in">
            <div className="text-[140px] md:text-[180px] lg:text-[200px] xl:text-[220px] leading-none font-serif text-red-500/20">
              "
            </div>
          </div>

          {/* Center Content - Quote Text */}
          <div className="flex-1 pt-0 lg:pt-6 xl:pt-8 animate-slide-up">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-snug">
              "{testimonials[activeIndex].quote}"
            </p>
          </div>

          {/* Right - Client Image */}
          <div className="flex-shrink-0 animate-fade-in-delay">
            <img 
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-64 h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-96 rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Section - Client Names & Rating */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Client Names - Left (3 columns) */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-500 group ${
                  activeIndex === index ? 'opacity-100' : 'opacity-60'
                } hover:opacity-100`}
              >
                <div className="space-y-3">
                  <div className="text-red-500 font-bold text-base md:text-lg">
                    {testimonial.number}
                  </div>
                  <div className="space-y-2 border-t border-gray-700 pt-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-white transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-xs tracking-[0.15em] uppercase">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Section - Right */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4 animate-fade-in-delay">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-red-500">
                4.9
              </div>
              <div className="flex flex-wrap gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-white text-lg md:text-xl font-bold">
              30000+ People Trusting us!
            </p>
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}