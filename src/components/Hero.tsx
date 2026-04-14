import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/30 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-secondary/80">
              4.9 Rating (123+ Reviews)
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-bold text-secondary leading-[1.1] mb-6">
            Advanced Dental Care <br />
            <span className="text-primary italic">You Can Trust</span>
          </h1>
          
          <p className="text-base md:text-xl text-secondary/70 max-w-lg mb-8 md:mb-10 leading-relaxed">
            Painless, precise, and patient-focused treatments in Jaipur. 
            Experience world-class dental care with a personal touch.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919680180018"
              className="w-full sm:w-auto bg-white text-secondary border border-gray-200 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-serif font-bold text-secondary">100+</div>
              <div className="text-sm text-secondary/60">Happy Patients</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-serif font-bold text-secondary">20+</div>
              <div className="text-sm text-secondary/60">Years of Trust</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
              alt="Premium Dental Clinic"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 z-20 glass p-6 rounded-2xl shadow-xl max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Star size={20} className="fill-primary" />
              </div>
              <div className="font-bold text-secondary">Top Rated Clinic</div>
            </div>
            <p className="text-sm text-secondary/70 italic">
              "The most comfortable dental experience I've ever had in Jaipur."
            </p>
          </motion.div>

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
