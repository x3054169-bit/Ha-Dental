import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
                Ha
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-secondary">
                Ha Dental
              </span>
            </Link>
            <p className="text-secondary/60 mb-8 leading-relaxed">
              Providing premium, painless, and patient-focused dental care in the heart of Jaipur. 
              Your smile is our priority.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/#about' },
                { name: 'Services', href: '/#services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Reviews', href: '/#reviews' },
                { name: 'Contact', href: '/#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-secondary mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Root Canal (RCT)', 'Dental Implants', 'Veneers', 'Orthodontics', 'General Dentistry'].map((item) => (
                <li key={item}>
                  <Link to="/#services" className="text-secondary/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-secondary mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-secondary/60">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span>Bani Park, Jaipur, Rajasthan</span>
              </li>
              <li className="flex gap-3 text-secondary/60">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 96801 80018</span>
              </li>
              <li className="flex gap-3 text-secondary/60">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>contact@hadental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary/40 text-sm">
            © {new Date().getFullYear()} Ha Dental. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-secondary/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
