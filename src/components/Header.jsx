import React, { useState } from "react";
import { Menu, X, ChevronDown, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const AnimatedLink = ({ text, href, hasDropdown, children }) => (
  <div className="group relative">
    <a 
      href={href} 
      className="relative overflow-hidden h-6 flex items-center gap-1 cursor-pointer"
      onClick={(e) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <div className="relative h-6 overflow-hidden">
        <span className="flex items-center text-white font-bold uppercase tracking-wider text-sm transition-transform duration-300 group-hover:-translate-y-full">
          {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
        </span>
        <span className="flex items-center text-[#062da3] font-bold uppercase tracking-wider text-sm absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
          {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
        </span>
      </div>
    </a>
    {children}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated to point to your page sections
  const services = [
    { name: "Diagnostics", href: "#services" },
    { name: "ECU Remapping", href: "#services" },
    { name: "Mechanical Repairs", href: "#services" },
    { name: "Performance Prep", href: "#services" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <img src="/logo.jpg" alt="TK Automotive Logo" className="h-14 w-auto object-contain rounded-full border border-white/10" />
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <AnimatedLink text="Home" href="#hero" />
            <AnimatedLink text="About" href="#about" />
            
            {/* Services Dropdown */}
            <AnimatedLink text="Services" href="#services" hasDropdown>
              <div className="absolute top-full -left-4 mt-2 w-72 bg-[#0A0A0A] border border-white/10 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                    }}
                    className="block px-6 py-3 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#062da3] transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </AnimatedLink>

            <AnimatedLink text="Reviews" href="#reviews" />
            <AnimatedLink text="Gallery" href="#gallery" />
          </div>

          {/* Right Side: Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white/50">
              <Facebook size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
              <Instagram size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold text-sm hover:bg-[#062da3] hover:text-white transition-all duration-300 group"
            >
              GET IN TOUCH <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-t border-white/10 py-8 space-y-6 px-6 h-screen">
            <button onClick={() => scrollToSection('#hero')} className="block text-white text-2xl font-bold uppercase">Home</button>
            <button onClick={() => scrollToSection('#about')} className="block text-white text-2xl font-bold uppercase">About</button>
            
            <div className="space-y-4">
              <p className="text-[#062da3] text-[10px] font-black uppercase tracking-[0.2em]">Our Services</p>
              {services.map((service, index) => (
                <button key={index} onClick={() => scrollToSection(service.href)} className="block text-gray-400 text-lg font-bold uppercase pl-4">
                  {service.name}
                </button>
              ))}
            </div>

            <button onClick={() => scrollToSection('#reviews')} className="block text-white text-2xl font-bold uppercase">Reviews</button>
            <button onClick={() => scrollToSection('#gallery')} className="block text-white text-2xl font-bold uppercase">Gallery</button>
            <button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[#062da3] text-white py-5 rounded-xl font-bold uppercase tracking-widest"
            >
                Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;