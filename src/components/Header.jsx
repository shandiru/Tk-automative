import React, { useState } from "react";
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube, Instagram, ArrowUpRight } from "lucide-react";

const AnimatedLink = ({ text, href, hasDropdown, children }) => (
  <div className="group relative">
    <a href={href} className="relative overflow-hidden h-6 flex items-center gap-1 cursor-pointer">
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

  // Your Service Routes
  const services = [
    { name: "Diagnostics", href: "/diagnostics" },
    { name: "DPF / EGR / AdBlue", href: "/dpf-egr-adblue-solutions" },
    { name: "ECU Remapping", href: "/ecu-remapping-tuning" },
    { name: "Mechanical Repairs", href: "/mechanical-repairs" },
    { name: "Rolling Road Dyno", href: "/rolling-road-wheel-dyno" },
    { name: "Motorsport Prep", href: "/motorsport-rally-preparation" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="Woshico Logo" className="h-12 w-auto object-contain rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <AnimatedLink text="Home" href="/" />
            
            {/* Services Dropdown - Brand Blue hover */}
            <AnimatedLink text="Services" href="#" hasDropdown>
              <div className="absolute top-full -left-4 mt-2 w-72 bg-[#0A0A0A] border border-white/10 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-6 py-3 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#062da3] hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </AnimatedLink>

            <AnimatedLink text="Our Blog" href="/blog" />
            <AnimatedLink text="Contact" href="/contact" />
          </div>

          {/* Right Side: Socials & Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white">
              <Facebook size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
              <Twitter size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
              <Youtube size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
              <Instagram size={18} className="hover:text-[#062da3] cursor-pointer transition-colors" />
            </div>

            <a
              href="/contact"
              className="flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold text-sm hover:bg-[#062da3] hover:text-white transition-all duration-300"
            >
              GET IN TOUCH <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 py-6 space-y-4 px-6">
            <a href="/" className="block text-white font-bold uppercase">Home</a>
            
            <div className="space-y-3">
              <p className="text-[#062da3] text-[10px] font-black uppercase tracking-widest">Our Services</p>
              {services.map((service, index) => (
                <a key={index} href={service.href} className="block text-gray-400 text-sm font-bold uppercase pl-4">
                  {service.name}
                </a>
              ))}
            </div>

            <a href="/blog" className="block text-white font-bold uppercase">Our Blog</a>
            <a href="/contact" className="block text-white font-bold uppercase">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;