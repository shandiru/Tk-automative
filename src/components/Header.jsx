import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ---------- Animated Desktop Link ---------- */
const AnimatedLink = ({ text, href, hasDropdown, children, onClick }) => (
  <div className="group relative">
    <button
      onClick={() => onClick(href)}
      className="relative overflow-hidden h-6 flex items-center gap-1 bg-transparent cursor-pointer"
    >
      <div className="relative h-6 overflow-hidden">
        <span className="flex items-center text-white font-bold uppercase tracking-wider text-sm transition-transform duration-300 group-hover:-translate-y-full">
          {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
        </span>
        <span className="flex items-center text-[#062da3] font-bold uppercase tracking-wider text-sm absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
          {text} {hasDropdown && <ChevronDown size={14} className="ml-1" />}
        </span>
      </div>
    </button>
    {children}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // 🔥 NEW
  const navigate = useNavigate();



  const handleNav = (href) => {
    setIsOpen(false);
    setIsServicesOpen(false);

    if (href.startsWith("#")) {
      navigate(`/${href}`); // /#about
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div onClick={() => handleNav("/")} className="cursor-pointer">
            <img src="/logo.jpg" className="h-14 rounded-full" />
          </div>

          {/* ---------- Desktop Menu ---------- */}
          <div className="hidden lg:flex space-x-10">
            <AnimatedLink text="Home" href="/" onClick={handleNav} />
            <AnimatedLink text="About" href="#about" onClick={handleNav} />

              <AnimatedLink text="Service" href="#service" onClick={handleNav} />

            <AnimatedLink text="Reviews" href="#reviews" onClick={handleNav} />
            <AnimatedLink text="Gallery" href="#gallery" onClick={handleNav} />
          </div>

          {/* ---------- Desktop CTA ---------- */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="https://web.facebook.com/tkautomotiveiom/?_rdc=1&_rdr#" target="_blank" rel="noreferrer">
              <Facebook size={18} className="text-white" />
            </a>
            <button
              onClick={() => handleNav("#contact")}
              className="bg-white px-6 py-3 rounded-full font-bold"
            >
              GET IN TOUCH 
            </button>
          </div>

          {/* ---------- Mobile Toggle ---------- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-8 space-y-6">

          <button
            onClick={() => handleNav("/")}
            className="block text-white text-2xl font-bold uppercase"
          >
            Home
          </button>

          <button
            onClick={() => handleNav("#about")}
            className="block text-white text-2xl font-bold uppercase"
          >
            About
          </button>
             
          <button
            onClick={() => handleNav("#service")}
            className="block text-white text-2xl font-bold uppercase"
          >
            Service
          </button>

          
          <button
            onClick={() => handleNav("#reviews")}
            className="block text-white text-2xl font-bold uppercase"
          >
            Reviews
          </button>

          <button
            onClick={() => handleNav("#gallery")}
            className="block text-white text-2xl font-bold uppercase"
          >
            Gallery
          </button>

          <button
            onClick={() => handleNav("#contact")}
            className="w-full bg-[#062da3] text-white py-5 rounded-xl font-bold uppercase tracking-widest"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
