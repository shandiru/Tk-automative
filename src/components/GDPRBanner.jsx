import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Consent Banner */}
      {visible && (
        <div className="fixed bottom-6 right-6 max-w-xs p-6 rounded-2xl bg-black/95 text-white z-50 shadow-2xl border border-white/10 backdrop-blur-md">
          <p className="text-sm mb-6 leading-relaxed text-center text-gray-300">
            We use cookies to improve your performance experience.{" "}
            <Link
              to="/privacy-policy"
              // Color changed to brand blue
              className="underline font-bold text-[#062da3] hover:text-white transition-colors"
            >
              See our Privacy Policy
            </Link>
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleReject}
              // Hover changed to brand blue
              className="px-5 py-2 rounded-lg bg-gray-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#062da3] transition-all duration-300"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              // Background changed to brand blue
              className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-white bg-[#062da3] hover:opacity-80 transition-all duration-300 shadow-[0_0_15px_rgba(6,45,163,0.3)]"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleIconClick}
            // Background changed to brand blue
            className="w-12 h-12 rounded-full bg-[#062da3] shadow-lg border border-white/20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-6 h-6 object-contain invert group-hover:rotate-12 transition-transform"
            />
          </button>
        </div>
      )}
    </>
  );
}