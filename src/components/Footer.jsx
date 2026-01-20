import React from 'react';
import { Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';
// If you are using react-router-dom, you can import Link
// import { Link } from 'react-router-dom'; 

const UniqueFooter = () => {
  const openingHours = [
    { day: "Mon - Thu", time: "9 AM – 5 PM" },
    { day: "Friday", time: "9 AM – 5 PM" },
    { day: "Sat - Sun", time: "Closed" },
  ];

  const handleNavClick = (e, path) => {
    // If it's an ID on the same page (like #hero or #about)
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + path;
      }
    }
    // If it's a route (like /diagnostics), let the default link behavior happen
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
      {/* Background Big Text */}
      <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-black text-white/[0.02] uppercase leading-none tracking-tighter whitespace-nowrap">
          TK Automotive
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="TK Automotive Logo" className="w-full h-full  rounded-full border border-white/10" />
            
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Professional ECU remapping, advanced diagnostics, and precision mechanical solutions for the Isle of Man.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#062da3] hover:border-[#062da3] transition-all duration-300 group">
                  <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Mixed Smooth Scroll and Routes */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '#hero' },
                { name: 'About Us', path: '#about' },
                { name: 'ECU Remapping', path: '/ecu-remapping-tuning' }, // Route
                { name: 'Diagnostics', path: '/diagnostics' },           // Route
                { name: 'Contact Us', path: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-gray-400 hover:text-[#062da3] transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Location</span>
                Lower Ballacottier, Onchan IM4 5BQ,<br/>Isle of Man
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Phone</span>
                <a href="tel:01624860209" className="hover:text-white transition-colors">01624 860209</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Email</span>
                <a href="mailto:tkautomotiveiom@gmail.com" className="hover:text-white transition-colors text-[13px]">tkautomotiveiom@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Workshop Hours</h4>
            <div className="space-y-4">
              {openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">{item.day}</span>
                  <span className={`text-xs font-bold ${item.time === 'Closed' ? 'text-red-900' : 'text-white'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
              <p className="text-[10px] text-gray-500 italic mt-4 flex items-center gap-2">
                <Clock size={12} /> Appointments required for dyno & remapping.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar - All Service Routes */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            © 2026 TK Automotive. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <a href="/ecu-remapping-tuning" className="text-gray-600 hover:text-[#062da3] transition-colors">Remapping</a>
            <a href="/diagnostics" className="text-gray-600 hover:text-[#062da3] transition-colors">Diagnostics</a>
            <a href="/dpf-egr-adblue-solutions" className="text-gray-600 hover:text-[#062da3] transition-colors">DPF/AdBlue</a>
            <a href="/mechanical-repairs" className="text-gray-600 hover:text-[#062da3] transition-colors">Repairs</a>
            <a href="/privacy-policy" className="text-gray-600 hover:text-[#062da3] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;