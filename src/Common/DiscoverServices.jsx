import React, { useState } from 'react';
import { Plus } from 'lucide-react';

import * as IoIcons from "react-icons/io5";

const DiscoverServices = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!data) return null;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <div className="max-w-xl">
            <h3 className="text-[#062da3] uppercase tracking-[0.3em] font-bold text-xs mb-4">Our Expertise</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
              {data.mainTitle}
            </h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {data.categories.map((category, catIdx) => (
            <div key={catIdx} className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#062da3] mb-8 pb-4 border-b border-white/5">
                {category.name}
              </h6>
              
              <div className="space-y-2">
                {category.services.map((service, serIdx) => {
                  const uniqueId = `${catIdx}-${serIdx}`;
                  const isOpen = activeIndex === uniqueId;

                 
                  const IconComponent = IoIcons[service.icon];

                  return (
                    <div key={serIdx} className={`rounded-2xl transition-all duration-500 ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}>
                      
                      {/* Accordion Toggle */}
                      <div 
                        onClick={() => toggleAccordion(uniqueId)}
                        className="flex items-center justify-between p-4 md:p-6 cursor-pointer group"
                      >
                        <div className="flex items-center gap-6">
                         
                          <div className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-500 ${isOpen ? 'bg-[#062da3]' : 'bg-zinc-900 group-hover:scale-110'}`}>
                            {IconComponent ? (
                              <IconComponent 
                                size={28} 
                                className={`transition-all ${isOpen ? 'text-white' : 'text-[#062da3] opacity-80'}`} 
                              />
                            ) : (
                              <IoIcons.IoSettingsSharp size={28} className="text-gray-600" />
                            )}
                          </div>
                          
                          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#062da3]' : 'text-white'}`}>
                            {service.title}
                          </h3>
                        </div>
                        
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${isOpen ? 'bg-white border-white text-black rotate-45' : 'bg-transparent border-[#062da3] text-[#062da3]'}`}>
                          <Plus size={18} strokeWidth={3} />
                        </div>
                      </div>

                      {/* Accordion Content */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-6 md:pl-24 pr-6">
                          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                            {service.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {service.problems?.map((prob, pIdx) => (
                              <div key={pIdx} className="text-[11px] text-gray-500 uppercase font-bold flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#062da3] rounded-full animate-pulse" /> {prob}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverServices;