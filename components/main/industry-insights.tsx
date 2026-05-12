"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FilmIcon,
  TvIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

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

const INDUSTRY_STATS = [
  {
    icon: FilmIcon,
    title: "Bollywood & Hollywood",
    description:
      "Major film productions increasingly rely on VFX for visual storytelling. From period dramas to sci-fi blockbusters, every genre now uses VFX extensively, creating thousands of job opportunities for skilled VFX artists.",
    stats: "90% of films use VFX",
  },
  {
    icon: TvIcon,
    title: "OTT & Web Series",
    description:
      "With platforms like Netflix, Prime Video, Disney+ Hotstar, and Sony LIV producing original content, the demand for VFX artists has skyrocketed. Web series require consistent VFX work, offering stable employment and diverse projects.",
    stats: "300+ Indian Web Series/Year",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Advertising & Marketing",
    description:
      "Commercial advertisements, corporate videos, product visualization, and social media content heavily utilize VFX and motion graphics. This sector provides continuous project flow and excellent opportunities for VFX professionals.",
    stats: "₹90,000 Crore Ad Industry",
  },
  {
    icon: SparklesIcon,
    title: "AI-Enhanced VFX",
    description:
      "AI tools like Stable Diffusion, Midjourney, and RunwayML are revolutionizing VFX workflows. Learning AI-integrated VFX techniques gives you a competitive edge, as studios actively seek artists skilled in both traditional and AI-powered VFX.",
    stats: "Future of VFX Production",
  },
];

const CAREER_PATHS = [
  {
    role: "Roto & Paint Artist",
    description:
      "Entry-level position with high demand. Work on frame-by-frame rotoscoping and paint/cleanup for film and TV productions.",
    salary: "₹15,000 - ₹25,000/month",
    growth: "Excellent entry point with fast growth potential",
  },
  {
    role: "Compositor",
    description:
      "Combine multiple visual elements seamlessly using Nuke or After Effects. High-demand role in all VFX studios.",
    salary: "₹25,000 - ₹50,000/month",
    growth: "Senior roles reach ₹1 Lakh+/month",
  },
  {
    role: "Motion Graphics Designer",
    description:
      "Create animated graphics for ads, TV shows, web content, and corporate videos. Versatile career with freelance opportunities.",
    salary: "₹20,000 - ₹40,000/month",
    growth: "Freelancers earn ₹50K - ₹2L per project",
  },
  {
    role: "VFX Generalist",
    description:
      "Master multiple VFX disciplines including rotoscopy, compositing, 3D, and motion graphics. Most versatile career path.",
    salary: "₹30,000 - ₹60,000/month",
    growth: "Studio leads earn ₹2-3 Lakhs/month",
  },
];

export const IndustryInsights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="industry"
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
            VFX Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              In India
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The Indian VFX and animation industry is growing at 15% annually, reaching ₹1 lakh crore by 2025. This explosive growth creates unprecedented career opportunities for skilled VFX professionals across Kerala, Bangalore, Mumbai, Hyderabad, and internationally.
          </p>
        </motion.div>

        {/* Industry Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INDUSTRY_STATS.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.3 + index * 0.1)}
              className="bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {stat.description}
              </p>
              <div className="text-orange-400 font-semibold text-sm">
                {stat.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Paths */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.6)}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            VFX Career Paths & Salary Expectations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_PATHS.map((career, index) => (
              <motion.div
                key={career.role}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn(0.7 + index * 0.1)}
                className="bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-3">
                  {career.role}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {career.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Starting Salary:</span>
                    <span className="text-orange-400 font-semibold text-sm">
                      {career.salary}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs italic">
                    {career.growth}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why VFX Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.9)}
          className="bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Choose a Career in VFX?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-2">
                15%
              </div>
              <p className="text-gray-300 text-sm">
                Industry Growth Rate (Annually)
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-2">
                50,000+
              </div>
              <p className="text-gray-300 text-sm">
                VFX Jobs Created Yearly in India
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-2">
                Global
              </div>
              <p className="text-gray-300 text-sm">
                Work Opportunities Worldwide
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="#courses"
              className="inline-block py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your VFX Career Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
