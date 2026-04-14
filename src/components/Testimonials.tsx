import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Patient",
    content: "Smooth and almost painless procedure. Dr. Deepti explained everything clearly before starting. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Patient",
    content: "Very professional and patient doctor. The clinic is clean and well-maintained. Best dental experience in Jaipur.",
    rating: 5,
  },
  {
    name: "Amit Gupta",
    role: "Patient",
    content: "Clean and well-maintained clinic. The staff is very friendly and helpful. I'm very happy with my treatment.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="section-padding bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What Our Patients <span className="italic text-primary">Say About Us</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 text-primary/20">
            <Quote size={120} />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="text-xl font-bold mb-1">{testimonials[currentIndex].name}</div>
                  <div className="text-primary font-medium tracking-widest uppercase text-xs">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
