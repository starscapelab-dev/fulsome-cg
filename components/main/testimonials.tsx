"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { TESTIMONIALS } from "@/constants";

const fadeIn = (delay: number): Variants => ({ 
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
});

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-20 w-full z-[20]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Success Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Hear from our alumni working at top VFX studios worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.3 + index * 0.1)}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                {/* Quote Icon */}
                <div className="text-6xl text-orange-500/20 font-serif mb-4">
                  "
                </div>

                {/* Content */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.8)}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to write your own success story?
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-10 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};
