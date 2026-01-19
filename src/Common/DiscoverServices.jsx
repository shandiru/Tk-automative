import React, { useState } from 'react';
import { discoverServicesData } from '../Data/Diagnostics/data';
import { Plus, ArrowRight } from 'lucide-react';

const DiscoverServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Title and All Services Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black max-w-md">
            {discoverServicesData.mainTitle}
          </h2>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#FDF567] hover:text-black transition-all duration-300">
            {discoverServicesData.buttonText}
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {discoverServicesData.categories.map((category, catIdx) => (
            <div key={catIdx}>
              <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-100">
                {category.name}
              </h6>
              
              <div className="space-y-4">
                {category.services.map((service, serIdx) => {
                  const uniqueId = `${catIdx}-${serIdx}`;
                  const isOpen = activeIndex === uniqueId;

                  return (
                    <div key={serIdx} className="border-b border-gray-100 last:border-0 overflow-hidden transition-all duration-500">
                      {/* Accordion Toggle */}
                      <div 
                        onClick={() => toggleAccordion(uniqueId)}
                        className="flex items-center justify-between py-6 cursor-pointer group"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 flex-shrink-0">
                            <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-gray-600 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white rotate-45' : 'bg-[#FDF567] text-black'}`}>
                          <Plus size={20} />
                        </div>
                      </div>

                      {/* Accordion Content */}
                      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-18 ml-[72px]">
                          <p className="text-gray-500 mb-4 leading-relaxed max-w-lg">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.problems.map((prob, pIdx) => (
                              <li key={pIdx} className="text-sm text-gray-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" /> {prob}
                              </li>
                            ))}
                          </ul>
                          <a href={service.link} className="inline-flex items-center gap-2 font-bold text-black border-b-2 border-black/10 hover:border-black transition-all">
                            Explore service <ArrowRight size={16} />
                          </a>
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