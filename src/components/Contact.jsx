import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-black py-20 px-6"id='contact'>
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#111111] rounded-[20px] md:rounded-[40px] border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/2 p-6 md:p-10 lg:p-20 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">
                Get in <span className="text-brand">Touch</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md">
                Ready to restore your vehicle's factory brilliance? Reach out to our expert team for a custom quote or to schedule your next appointment at TK Automotive.
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Phone Info */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Phone</p>
                    <a href="tel:01624860209" className="text-white text-lg md:text-xl font-semibold hover:text-brand transition-colors">
                      01624 860209
                    </a>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Email</p>
                    <a href="mailto:tkautomotiveiom@gmail.com" className="text-white text-sm md:text-xl font-semibold hover:text-brand transition-colors break-all">
                      tkautomotiveiom@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address Info */}
                <div className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="text-white text-sm md:text-lg font-semibold leading-tight">
                      Lower Ballacottier, Ballacottier Rd,<br />Onchan IM4 5BQ, Isle of Man
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Image Overlay */}
          <div className="lg:w-1/2 relative min-h-[600px] md:min-h-[700px] flex items-center justify-center p-4 md:p-6 lg:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000" 
                alt="TK Automotive Premium Detailing" 
                className="w-full h-full object-cover opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
            </div>

            {/* Form Card with Reduced Mobile Padding */}
            <div className="relative z-10 bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-10 lg:p-14 w-full max-w-xl shadow-2xl">
              <form className="space-y-5 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-2 md:mb-3">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full border-b-2 border-gray-100 py-2 md:py-3 focus:border-brand outline-none transition-colors text-black font-medium placeholder:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-2 md:mb-3">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full border-b-2 border-gray-100 py-2 md:py-3 focus:border-brand outline-none transition-colors text-black font-medium placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-2 md:mb-3">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full border-b-2 border-gray-100 py-2 md:py-3 focus:border-brand outline-none transition-colors text-black font-medium placeholder:text-gray-300" />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-black text-brand uppercase tracking-[0.2em] mb-2 md:mb-3">Your Message</label>
                  <textarea placeholder="Tell us about your vehicle and requirements..." rows="4" className="w-full border-b-2 border-gray-100 py-2 md:py-3 focus:border-brand outline-none transition-colors text-black font-medium resize-none placeholder:text-gray-300 md:rows-5"></textarea>
                </div>

                <button className="w-full bg-brand hover:bg-black text-white font-bold py-4 md:py-5 rounded-xl md:rounded-2xl transition-all duration-500 uppercase tracking-[0.2em] text-xs md:text-sm shadow-xl shadow-brand/25 flex items-center justify-center gap-3 group mt-3 md:mt-4">
                  Send Message 
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-[10px] md:text-xs text-center mt-3 md:mt-5 text-gray-600 leading-relaxed">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
              </form>
            </div>
            
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;