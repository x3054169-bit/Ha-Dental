import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Stethoscope, 
  Layers, 
  Smile 
} from 'lucide-react';

const services = [
  {
    title: "Root Canal Treatment (RCT)",
    description: "Advanced, painless root canal procedures to save your natural teeth with precision.",
    icon: Activity,
  },
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacements using high-grade titanium implants.",
    icon: ShieldCheck,
  },
  {
    title: "Veneers",
    description: "Custom-crafted porcelain veneers to transform your smile and boost your confidence.",
    icon: Sparkles,
  },
  {
    title: "Orthodontic Treatment",
    description: "Modern braces and clear aligners to straighten your teeth and correct your bite.",
    icon: Layers,
  },
  {
    title: "Dentures",
    description: "Comfortable, high-quality dentures designed for a perfect fit and natural appearance.",
    icon: Smile,
  },
  {
    title: "General Dentistry",
    description: "Comprehensive oral checkups, cleanings, and preventative care for the whole family.",
    icon: Stethoscope,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6"
          >
            Comprehensive Care for a <br />
            <span className="italic">Lifetime of Smiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary/60"
          >
            From routine checkups to advanced surgical procedures, we offer a full range of dental services 
            tailored to your unique needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary/60 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-primary/20 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
