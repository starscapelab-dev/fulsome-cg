"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ComponentType } from "react";
import {
  AcademicCapIcon,
  SparklesIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

type FeatureIcon =
  | "expert"
  | "ai"
  | "job"
  | "international"
  | "hands-on"
  | "flexible";

const iconMap: Record<FeatureIcon, ComponentType<{ className?: string }>> = {
  expert: AcademicCapIcon,
  ai: SparklesIcon,
  job: BriefcaseIcon,
  international: GlobeAltIcon,
  "hands-on": HandRaisedIcon,
  flexible: ClockIcon,
};

const fadeInUp = (delay: number): Variants => ({
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

export const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: Array<{
    title: string;
    description: string;
    icon: FeatureIcon;
  }> = [
    {
      title: "Industry Expert Trainers",
      description:
        "Learn from professionals with real-world VFX experience from major studios and productions.",
      icon: "expert",
    },
    {
      title: "AI-Integrated Curriculum",
      description:
        "India's first VFX academy to integrate cutting-edge AI tools and workflows into the training program.",
      icon: "ai",
    },
    {
      title: "100% Job Assistance",
      description:
        "Guaranteed internship opportunities and placement support with leading VFX studios across India and abroad.",
      icon: "job",
    },
    {
      title: "International Standards",
      description:
        "Training programs designed to meet international VFX industry standards and best practices.",
      icon: "international",
    },
    {
      title: "Hands-On Learning",
      description:
        "Work on real projects and build a professional portfolio that showcases your skills to potential employers.",
      icon: "hands-on",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Choose from offline, online, or hybrid learning modes that fit your schedule and learning style.",
      icon: "flexible",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-20 px-6 md:px-20 w-full z-[20]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp(0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Fulsome CG
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover what makes us the leading VFX training academy in India
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp(0.3 + index * 0.1)}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp(1)}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to start your VFX journey?
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-10 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};
