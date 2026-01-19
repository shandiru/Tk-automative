import React from 'react';
import { Mail, Phone, ThumbsUp } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-[#0A0A0A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#111111] rounded-[40px] border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                Get in <span className="text-[#F21B23]">Touch</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi viverra ornare.
              </p>

              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Details</h3>
              
              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-center gap-6 p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-[#F21B23]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#F21B23] transition-colors">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Email</p>
                    <a href="mailto:example@email.com" className="text-white font-semibold hover:text-[#F21B23] transition-colors">
                      example@email.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-center gap-6 p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 hover:border-[#F21B23]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#F21B23] transition-colors">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Phone</p>
                    <a href="tel:+971123456789" className="text-white font-semibold hover:text-[#F21B23] transition-colors">
                      +971 12 345 6789
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Image Overlay */}
          <div className="lg:w-1/2 relative min-h-[600px] flex items-center justify-center p-6 lg:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Car" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Floating Form Card */}
            <div className="relative z-10 bg-white rounded-3xl p-8 lg:p-10 w-full max-w-lg shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full border-b border-gray-200 py-2 focus:border-[#F21B23] outline-none transition-colors text-black" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full border-b border-gray-200 py-2 focus:border-[#F21B23] outline-none transition-colors text-black" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
                  <input type="email" placeholder="example@email.com" className="w-full border-b border-gray-200 py-2 focus:border-[#F21B23] outline-none transition-colors text-black" />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                  <textarea placeholder="Provide details of your enquiry..." rows="3" className="w-full border-b border-gray-200 py-2 focus:border-[#F21B23] outline-none transition-colors text-black resize-none"></textarea>
                </div>

                <button className="w-full bg-[#F21B23] hover:bg-black text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#F21B23]/20 flex items-center justify-center gap-2 group">
                  Submit 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
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