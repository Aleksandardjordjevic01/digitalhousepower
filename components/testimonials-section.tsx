'use client';

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Working with DigitalHousePower transformed our online presence. Their attention to detail and creative approach exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    text: "The team delivered a stunning website that perfectly captures our brand. The process was smooth and professional from start to finish.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Chen",
    role: "Marketing Director",
  },
  {
    text: "Exceptional service and outstanding results. Our new e-commerce platform has significantly increased our online sales.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emma Davis",
    role: "Store Owner",
  },
  {
    text: "Their digital marketing strategy took our business to the next level. We've seen tremendous growth in engagement and conversions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Wilson",
    role: "Business Owner",
  },
  {
    text: "Professional, creative, and results-driven. They truly understand modern web design and user experience.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lisa Anderson",
    role: "Product Manager",
  },
  {
    text: "The maintenance and support service is exceptional. They're always available and respond quickly to any issues.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "James Brown",
    role: "IT Manager",
  },
  {
    text: "Our SEO rankings improved dramatically after working with them. Highly recommend their services!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Robert Taylor",
    role: "Operations Director",
  },
  {
    text: "They delivered exactly what we needed – a modern, fast, and beautiful website that our customers love.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sophie Martinez",
    role: "Creative Director",
  },
  {
    text: "Outstanding graphic design work. They captured our vision perfectly and brought our brand to life.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Alex Turner",
    role: "Brand Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`flex-1 ${props.className || ''}`}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-2xl border border-white/10 shadow-lg w-full bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 cursor-default select-none hover:border-[#34bb92]/30 focus:outline-none focus:ring-2 focus:ring-[#34bb92]/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-400 leading-relaxed font-normal m-0 text-sm">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-[#34bb92]/30 transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-white">
                          {name}
                        </cite>
                        <span className="text-xs leading-5 tracking-tight text-gray-500 mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="w-full py-24 bg-[#030303] relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className="container px-4 z-10 mx-auto max-w-[1300px]"
      >
        <div className="flex flex-col items-start max-w-[640px] mb-16">
          <div className="flex">
            <div className="border border-white/10 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-gray-400 bg-white/5">
              You won’t believe this
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-xl sm:text-3xl font-bold text-white tracking-tight mt-6 text-start">
            Our Clients Can’t Say Anything Bad About Us
          </h2>
        </div>

        <div 
          className="flex justify-start gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden w-full"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
};
