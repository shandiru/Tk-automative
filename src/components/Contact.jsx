import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#111111] rounded-[40px] border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                Get in <span className="text-[#062da3]">Touch</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Ready to restore your vehicle's factory brilliance? Reach out to our expert team for a custom quote or to schedule your next appointment.
              </p>

              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Details</h3>
              
              <div className="space-y-6">
                {/* Email Info - Updated to Brand Blue */}
                <div className="flex items-center gap-6 p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-[#062da3]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#062da3] transition-all duration-300">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Email</p>
                    <a href="mailto:info@Tk Automotiveshine.com" className="text-white font-semibold hover:text-[#062da3] transition-colors">
                      info@Tk Automotiveshine.com
                    </a>
                  </div>
                </div>

                {/* Phone Info - Updated to Brand Blue */}
                <div className="flex items-center gap-6 p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-[#062da3]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#062da3] transition-all duration-300">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Phone</p>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-[#062da3] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Image Overlay */}
          <div className="lg:w-1/2 relative min-h-[600px] flex items-center justify-center p-6 lg:p-12">
            {/* Background Image with Blue Gradient tint */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Car" 
                className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-[#062da3]/10 to-transparent" />
            </div>

            {/* Floating Form Card */}
            <div className="relative z-10 bg-white rounded-3xl p-8 lg:p-10 w-full max-w-lg shadow-[0_20px_60px_-15px_rgba(6,45,163,0.3)]">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 uppercase mb-2">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full border-b border-gray-100 py-2 focus:border-[#062da3] outline-none transition-colors text-black placeholder:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 uppercase mb-2">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full border-b border-gray-100 py-2 focus:border-[#062da3] outline-none transition-colors text-black placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-400 uppercase mb-2">Email Address</label>
                  <input type="email" placeholder="example@email.com" className="w-full border-b border-gray-100 py-2 focus:border-[#062da3] outline-none transition-colors text-black placeholder:text-gray-300" />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-400 uppercase mb-2">Message</label>
                  <textarea placeholder="How can we help you today?" rows="3" className="w-full border-b border-gray-100 py-2 focus:border-[#062da3] outline-none transition-colors text-black resize-none placeholder:text-gray-300"></textarea>
                </div>

                {/* Brand Blue Submit Button */}
                <button className="w-full bg-[#062da3] hover:bg-black text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#062da3]/20 flex items-center justify-center gap-2 group">
                  Send Message 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;