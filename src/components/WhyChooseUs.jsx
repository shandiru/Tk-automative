import React from 'react';
import { Wrench, Gauge, Cpu, ShieldCheck } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Cpu className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Deep mechanical understanding"
    },
    {
      icon: <Wrench className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Strong diagnostic skills"
    },
    {
      icon: <Gauge className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Hands-on experience & continuous learning"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Attention to detail & safety awareness"
    }
  ];

  return (
    <section className="relative bg-black py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="text-[25vw] md:text-[18vw] lg:text-[15vw] font-black text-white tracking-tighter uppercase">
          TK Automotive
        </div>
      </div>

      {/* Brand Accent - Original Blue */}
      <div className="absolute left-0 top-0 w-1.5 h-32 bg-gradient-to-b from-brand via-brand/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          
          {/* Left Side - Your Specific Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="text-brand text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Proven in Motorsport
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter">
              Performance Tuning <span className="text-brand">Built on Experience</span>
            </h2>

            <div className="space-y-5 pt-2">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                TK Automotive is a dedicated two-man team—Alex and myself. We focus on mechanical precision over high-volume turnaround, providing a Specialised service strictly by appointment.
              </p>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Our expertise is <strong>Proven in Motorsport</strong>. I have Specialised in tuning engines and performance setups for <strong>Rally, Hillclimbs, Sprints, Track Days, Targa Rally, and Drifting</strong>. 
              </p>

             

              <div className="flex items-center gap-4 text-brand font-bold uppercase tracking-widest text-sm pt-2">
                <span className="h-px w-8 bg-brand"></span>
                Workshop Only • Strictly By Appointment
              </div>
            </div>
          </div>

          {/* Right Side - Cleaned up with correct Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2 tracking-tight group-hover:text-brand transition-colors">
                      {feature.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-brand/30 group-hover:w-20 group-hover:bg-brand transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}