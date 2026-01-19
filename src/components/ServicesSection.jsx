
import React, { useState } from "react";

const services = [
  { id: 1, title: "Panel Beating", subtitle: "Precision Restoration", image: "/Panel.png" },
  { id: 2, title: "Paint Resprays", subtitle: "Premium Finish", image: "/Paint.png" },
  { id: 3, title: "Dent & Scratch Repair", subtitle: "Fast Turnaround", image: "/Dent.png" },
  { id: 4, title: "Accident Repairs", subtitle: "Complete Solutions", image: "/Accident.png" },
  { id: 5, title: "Insurance Jobs", subtitle: "Claim Assistance", image: "/Insurance.png" },
  { id: 6, title: "Detailing", subtitle: "High-End Polish", image: "/Detailing.png" },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      className="relative bg-[#000000] py-16 px-6 md:px-12  text-white"
      id="service"
    >
      {/* 🔥 Background Glow (Red tones only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* GRID WRAPPER */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase">
            Our Professional Services{" "}
            <span className="text-[#D70C09]">Since 2012</span>
          </h2>

          <p className="mt-4 text-[#C0C0C0] max-w-md leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit 
            sem vel sapien convallis, et facilisis arcu porta. Duis nec augue 
            vel justo placerat fermentum. Integer sit amet malesuada lorem.
          </p>

          <button className="mt-8 bg-[#D70C09] text-white font-bold px-6 py-3 rounded-md uppercase hover:bg-[#868386] transition-all text-sm sm:text-base">
            Read More
          </button>
        </div>

        {/* RIGHT SERVICES LIST */}
        <div className="flex flex-col gap-8 relative">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center transition-all duration-300 ease-out border-b border-[#1C1C1C] pb-6"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* TEXT */}
              <div>
                <h3
                  className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id ? "text-[#D70C09]" : "text-white"
                  }`}
                >
                  <span
                    className={`mr-2 sm:mr-3 text-[22px] sm:text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id ? "text-[#D70C09]" : "text-[#868386]"
                    }`}
                  >
                    {service.id}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-xs sm:text-sm mt-1 transition-colors ${
                    hoveredId === service.id ? "text-[#D70C09]" : "text-[#C0C0C0]"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full sm:w-[280px] h-[160px] sm:h-[170px] mt-4 sm:mt-0 relative overflow-hidden rounded-sm [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-out transform ${
                    hoveredId === service.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-5 scale-95"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
