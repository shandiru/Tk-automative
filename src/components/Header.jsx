import React, { useState } from "react";
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube, Instagram, ShoppingCart, ArrowUpRight } from "lucide-react";

const AnimatedLink = ({ text, href, hasDropdown }) => (
  <a href={href} className="group relative overflow-hidden h-6 flex items-center gap-1 cursor-pointer">
    <div className="relative h-6 overflow-hidden">
      <span className="flex items-center text-white font-bold uppercase tracking-wider text-sm transition-transform duration-300 group-hover:-translate-y-full">
        {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
      </span>
      <span className="flex items-center text-[#F21B23] font-bold uppercase tracking-wider text-sm absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
        {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
      </span>
    </div>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/logo.png" 
              alt="Woshico Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <AnimatedLink text="Home" href="/" />
            <AnimatedLink text="Pages" href="/pages"  />
            <AnimatedLink text="Services" href="/services" />
            <AnimatedLink text="Our Blog" href="/blog" />
            <AnimatedLink text="Contact" href="/contact" />
          </div>

          {/* Right Side: Socials & Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white">
              <Facebook size={18} className="hover:text-[#F21B23] cursor-pointer transition-colors" />
              <Twitter size={18} className="hover:text-[#F21B23] cursor-pointer transition-colors" />
              <Youtube size={18} className="hover:text-[#F21B23] cursor-pointer transition-colors" />
              <Instagram size={18} className="hover:text-[#F21B23] cursor-pointer transition-colors" />
            </div>

            {/* Cart Icon with Badge */}
            

            {/* CTA Button */}
            <a
              href="/contact"
              className="flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold text-sm hover:bg-[#F21B23] hover:text-white transition-all duration-300"
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
          <div className="lg:hidden bg-black border-t border-white/10 py-6 space-y-4 px-6 animate-in slide-in-from-top">
            <a href="/" className="block text-white font-bold uppercase">Home</a>
            <a href="/pages" className="block text-white font-bold uppercase">Pages</a>
            <a href="/services" className="block text-white font-bold uppercase">Services</a>
            <a href="/contact" className="block text-white font-bold uppercase">Contact</a>
            <div className="pt-4 flex space-x-6">
               <Facebook size={20} className="text-white" />
               <Instagram size={20} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;