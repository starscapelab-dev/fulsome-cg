"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CourseCard } from "@/components/sub/course-card";
import { COURSES } from "@/constants";

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

export const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="courses"
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
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Courses
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose the perfect VFX training program tailored to your career goals and timeline
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard
              key={course.title}
              src={course.image}
              title={course.title}
              duration={course.duration}
              description={course.description}
              highlights={course.highlights}
              link={course.link}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.8)}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-400/10 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our expert counselors are here to help you choose the perfect program based on your background, goals, and timeline. Get personalized guidance today!
            </p>
            <a
              href="#contact"
              className="inline-block py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Talk to a Counselor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
