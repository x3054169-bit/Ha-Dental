import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  UserCheck, 
  MessageSquareText, 
  Sparkles, 
  Users 
} from 'lucide-react';

const reasons = [
  {
    title: "Painless Procedures",
    description: "We use the latest techniques to ensure your treatment is as comfortable and pain-free as possible.",
    icon: Sparkles,
  },
  {
    title: "Experienced Doctor",
    description: "Dr. Deepti brings years of clinical expertise and a gentle touch to every patient interaction.",
    icon: UserCheck,
  },
  {
    title: "Clear Explanations",
    description: "We believe in transparency. You'll receive a detailed explanation before any treatment begins.",
    icon: MessageSquareText,
  },
  {
    title: "Modern Clinic",
    description: "Our facility is equipped with state-of-the-art technology and follows strict hygiene protocols.",
    icon: HeartHandshake,
  },
  {
    title: "Friendly Staff",
    description: "Our warm and welcoming team is here to make your visit stress-free from start to finish.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
              A Patient-First Approach <br />
              <span className="italic text-primary">to Dental Excellence</span>
            </h2>
            <p className="text-lg text-secondary/60 mb-12 max-w-xl">
              We understand that choosing a dentist is a significant decision. 
              Here is why thousands of families in Jaipur trust us with their smiles.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-2">{reason.title}</h3>
                    <p className="text-secondary/60 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[60px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Happy Patient"
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[40px] shadow-2xl hidden md:block">
              <div className="text-5xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-secondary font-bold uppercase tracking-widest text-xs">Patient Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
