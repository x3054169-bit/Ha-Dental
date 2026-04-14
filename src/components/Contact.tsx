import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const hours = [
  { day: "Monday – Saturday", time: "9 AM – 8 PM" },
  { day: "Sunday", time: "9 AM – 1 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Contact Us</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
              Visit Our Clinic <br />
              <span className="italic text-primary">in Bani Park</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Our Location</div>
                  <p className="text-secondary/60">
                    Showroom no 1, Pearl Orchid Apartment, Kabir Marg, opposite ICICI Bank, 
                    near Collectorate Circle, Subash Nagar, Sen Colony, Bani Park, Jaipur, Rajasthan 302016
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div className="w-full">
                  <div className="font-bold text-secondary mb-3">Clinic Hours</div>
                  <div className="space-y-2">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-secondary/70">{item.day}</span>
                        <span className="font-bold text-secondary">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-secondary mb-1">Call Us</div>
                  <p className="text-secondary/60">+91 96801 80018</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Ha+Dental,+Showroom+no+1,+Pearl+Orchid+Apartment,+Kabir+Marg,+opposite+ICICI+Bank,+near+Collectorate+Circle,+Subash+Nagar,+Sen+Colony,+Bani+Park,+Jaipur,+Rajasthan+302016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] lg:h-auto min-h-[400px] border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56935.13001582377!2d75.76040815309686!3d26.889348977362037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d74a80e2cf%3A0x53b690ee7dc3c498!2sHa%20Dental!5e0!3m2!1sen!2sin!4v1776146861519!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
