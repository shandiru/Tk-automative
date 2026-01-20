import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Send, Clock } from 'lucide-react';

const UniqueFooter = () => {
  const openingHours = [
    { day: "Mon - Thu", time: "9 AM – 5 PM" },
    { day: "Friday", time: "9 AM – 5 PM" },
    { day: "Sat - Sun", time: "Closed" },
  ];

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
              <div className="w-10 h-10 bg-[#062da3] rounded-full flex items-center justify-center">
                <img src="/logo.jpg" alt="logo" className="w-6 h-6 invert" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">TK Automotive</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Expert ECU remapping, diagnostics, and mechanical solutions. Performance engineering tailored for the Isle of Man's most passionate drivers.
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
              {['Home', 'Diagnostics', 'ECU Remapping', 'Mechanical Repairs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#062da3] hover:pl-2 transition-all duration-300 flex items-center gap-2 group text-sm">
                    <span className="w-0 h-[1px] bg-[#062da3] group-hover:w-4 transition-all"></span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Updated with Tristan's Data */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Location</span>
                Lower Ballacottier, Ballacottier Rd,<br/>Onchan IM4 5BQ, Isle of Man
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Direct Contact</span>
                Tristan: 01624 860209
              </li>
              <li className="flex flex-col">
                <span className="text-[#062da3] font-black text-[10px] mb-1 uppercase tracking-tighter">Email</span>
                tkautomotiveiom@gmail.com
              </li>
            </ul>
          </div>

          {/* Opening Hours - New Section using your data */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Workshop Hours</h4>
            <div className="space-y-4">
              {openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 text-sm">{item.day}</span>
                  <span className={`text-xs font-bold ${item.time === 'Closed' ? 'text-gray-600' : 'text-white'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
              <p className="text-[10px] text-gray-500 italic mt-4 flex items-center gap-2">
                <Clock size={12} /> Appointment recommended for diagnostics.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium text-center md:text-left">
            © 2026 TK Automotive Isle of Man. Engineering Excellence.
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