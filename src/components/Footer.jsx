import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, ArrowUpRight, Send } from 'lucide-react';

const UniqueFooter = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
      {/* Background Big Text - Matching Hero Style */}
      <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-white/[0.03] uppercase leading-none tracking-tighter">
          Woshico
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F21B23] rounded-full flex items-center justify-center">
                <img src="https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg" alt="logo" className="w-6 h-6 invert" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">Woshico</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Premium car wash services designed for today’s busy drivers. We bring the shine back to your ride.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#F21B23] hover:border-[#F21B23] transition-all duration-300">
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#F21B23] hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#F21B23] group-hover:w-4 transition-all"></span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-white font-semibold text-xs mb-1 uppercase">Location</span>
                123 Shine Street, Dubai, UAE
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold text-xs mb-1 uppercase">Email</span>
                hello@woshico.com
              </li>
              <li className="flex flex-col">
                <span className="text-white font-semibold text-xs mb-1 uppercase">Phone</span>
                +971 12 345 6789
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to get latest updates and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-[#F21B23] text-sm text-white"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-[#F21B23] rounded-full flex items-center justify-center hover:bg-white group transition-all">
                <Send size={16} className="text-white group-hover:text-[#F21B23]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © 2026 Woshico. Made with Passion for Cars.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;