"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const fadeIn = (delay: number): Variants => ({ 
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
});

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Fulsome CG
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            India&apos;s premier VFX training academy empowering creative minds with industry-leading education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Video Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl">
              <Image
                src="/about-vfx.jpg"
                alt="VFX Training at Fulsome CG"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-600 to-orange-600 p-6 rounded-xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-sm text-white/90">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.6)}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              India&apos;s First Job-Based VFX Training Centre
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Welcome to <span className="text-orange-400 font-semibold">Fulsome CG International VFX Academy</span>, located in the heart of Thrissur, Kerala. We are pioneers in providing comprehensive, job-oriented VFX training with cutting-edge AI integration.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to transform passionate individuals into industry-ready VFX professionals. With experienced trainers from major studios and a curriculum designed to meet international standards, we ensure every student gains practical skills and real-world project experience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#1a0800]/50 border border-orange-500/20 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Expert Training</h4>
                <p className="text-gray-400 text-sm">Learn from industry professionals with years of VFX experience</p>
              </div>

              <div className="bg-[#1a0800]/50 border border-orange-400/20 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">AI Integration</h4>
                <p className="text-gray-400 text-sm">Master the latest AI tools enhancing VFX workflows</p>
              </div>

              <div className="bg-[#1a0800]/50 border border-orange-500/20 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Job Assistance</h4>
                <p className="text-gray-400 text-sm">100% placement support with leading studios</p>
              </div>

              <div className="bg-[#1a0800]/50 border border-orange-400/20 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Flexible Learning</h4>
                <p className="text-gray-400 text-sm">Choose from offline, online, or hybrid modes</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#courses"
                className="inline-block py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Our Courses
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
