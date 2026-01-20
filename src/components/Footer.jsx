import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Send } from 'lucide-react';

const UniqueFooter = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
      {/* Background Big Text - Updated to Tk Automotive */}
      <div className="absolute bottom-[-10% ] left-30 w-full pointer-events-none select-none">
        <h2 className="text-[12vw] font-black text-white/[0.02] uppercase leading-none tracking-tighter">
          Tk Automotive
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Background changed to Brand Blue */}
              <div className="w-10 h-10 bg-[#062da3] rounded-full flex items-center justify-center">
                <img src="/logo.jpg" alt="logo" className="w-6 h-6 invert " />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">Tk Automotive</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Professional automotive detailing and protection services. Engineering the perfect finish for the most discerning drivers.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#062da3] hover:border-[#062da3] transition-all duration-300 group">
                  <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#062da3] hover:pl-2 transition-all duration-300 flex items-center gap-2 group text-sm">
                    {/* Hover line changed to Brand Blue */}
                    <span className="w-0 h-[1px] bg-[#062da3] group-hover:w-4 transition-all"></span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Location</span>
                123 Shine Avenue, Business Bay<br/>Dubai, UAE
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Email</span>
                hello@Tk Automotiveshine.com
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Phone</span>
                +971 4 123 4567
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Stay updated with our latest detailing projects and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-[#062da3] text-sm text-white transition-colors"
              />
              {/* Button changed to Brand Blue */}
              <button className="absolute right-2 top-2 w-10 h-10 bg-[#062da3] rounded-full flex items-center justify-center hover:bg-white group transition-all">
                <Send size={14} className="text-white group-hover:text-[#062da3] transition-colors" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
            © 2026 Tk Automotive Shine Detailing. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="text-gray-600 hover:text-[#062da3] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#062da3] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;