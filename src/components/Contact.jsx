import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

/* =====================
   ENV CONFIG
===================== */
const PHONE = import.meta.env.VITE_PHONE_NUMBER;
const PHONE_TEL = import.meta.env.VITE_PHONE_TEL;
const EMAIL = import.meta.env.VITE_EMAIL;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  /* =====================
     STATE
  ===================== */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* =====================
     HANDLERS
  ===================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#111111] rounded-[20px] md:rounded-[40px] border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 p-6 md:p-10 lg:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              Get in <span className="text-brand">Touch</span>
            </h2>

            <p className="text-gray-400 mb-10 max-w-md">
              Ready to restore your vehicle’s factory brilliance? Contact TK Automotive today.
            </p>

            <div className="space-y-8">

              {/* PHONE */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold">Phone</p>
                  <a href={PHONE_TEL} className="text-white text-xl font-semibold hover:text-brand">
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5">
                  <Mail className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white text-lg font-semibold hover:text-brand break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold">Location</p>
                  <p className="text-white font-semibold">
                    Lower Ballacottier, Onchan IM4 5BQ,<br />Isle of Man
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:w-1/2 relative flex items-center justify-center p-6 lg:p-12">

            <div className="bg-white rounded-[20px] md:rounded-[32px] p-6 md:p-10 w-full max-w-xl shadow-2xl relative z-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="border-b-2 border-gray-200 py-3 outline-none focus:border-brand"
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="border-b-2 border-gray-200 py-3 outline-none focus:border-brand"
                  />
                </div>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-brand"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your vehicle..."
                  className="w-full border-b-2 border-gray-200 py-3 outline-none resize-none focus:border-brand"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-3 transition-all
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-brand hover:bg-black text-white"}
                  `}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight />}
                </button>

                {success && (
                  <p className="text-green-600 text-sm text-center font-semibold">
                     Message sent successfully! We’ll be in touch.
                  </p>
                )}

                {error && (
                  <p className="text-red-600 text-sm text-center font-semibold">
                     {error}
                  </p>
                )}

                <p className="text-xs text-center text-gray-500">
                 By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
                </p>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
