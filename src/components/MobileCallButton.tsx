import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+919680180018"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 md:hidden bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      aria-label="Call Now"
    >
      <Phone size={28} />
      <span className="absolute left-full ml-4 bg-white text-secondary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Call Now
      </span>
    </a>
  );
}
