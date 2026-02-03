import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutUsSection() {
  const [counters, setCounters] = useState({
    bookings: 0,
    models: 0,
    clients: 0,
    daily: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      bookings: 2.5,
      models: 300,
      clients: 99,
      daily: 50
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        bookings: Math.min(targets.bookings * progress, targets.bookings),
        models: Math.floor(targets.models * progress),
        clients: Math.floor(targets.clients * progress),
        daily: Math.floor(targets.daily * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20" id='about'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-24">

          {/* Left Side - About Us Label */}
          <div className="lg:min-w-[120px] animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="bg-brand/10 px-4 py-1.5 rounded-full text-brand font-bold tracking-[0.2em] uppercase text-xs border border-brand/20 whitespace-nowrap">
                About Us
              </span>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="flex-1 space-y-12 md:space-y-16">
            {/* Heading - Updated Content */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Discover the passion and expertise behind TK Automotive, your premier destination for <span className="text-brand">reliable mechanical solutions</span> and unmatched engineering.
              </h2>
            </div>

            
            

            {/* Bottom Section - Our Commitment Content */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 pt-8 border-t border-white/10 animate-fade-in-delay">
              <div className="max-w-2xl">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  We combine cutting-edge diagnostic technology with skilled craftsmanship and years of experience. Our mission is to provide every driver with reliable, efficient, and honest automotive service through transparent practices and expert solutions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
}