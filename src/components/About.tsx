import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  "Professional & Experienced Care",
  "Transparent Explanations",
  "Comfortable Treatment Experience",
  "State-of-the-art Technology",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500"
                alt="Clinic Interior"
                className="rounded-3xl shadow-lg w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-primary p-8 rounded-3xl text-white">
                <div className="text-4xl font-serif font-bold mb-2">20+</div>
                <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500"
                alt="Dental Equipment"
                className="rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500"
                alt="Doctor at work"
                className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Ha Dental</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
            Pioneering Painless Dentistry <br />
            <span className="italic">in the Heart of Jaipur</span>
          </h2>
          
          <div className="space-y-6 text-lg text-secondary/70 leading-relaxed mb-10">
            <p>
              At Ha Dental, we believe that a visit to the dentist should be something you look forward to. 
              Our clinic combines a clean, modern facility with a friendly staff dedicated to your comfort.
            </p>
            <p>
              Led by Dr. Deepti, our team brings over 20 years of trust and expertise to every procedure. 
              We take the time to explain every step, ensuring you feel confident and relaxed throughout your treatment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium text-secondary/80">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

