"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { LINKS } from "@/constants";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
      id="home"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[12px] border border-[#ff8a3d8b] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#ff9d5c] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            India&apos;s First Job-Based VFX Training Centre
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Creative Vision
            </span>{" "}
            Into Reality
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[650px]"
        >
          Master Visual Effects with cutting-edge technology and AI integration. Learn from industry experts and launch your career in rotoscopy, compositing, motion graphics, and more at Fulsome CG International VFX Academy, Thrissur.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <Link
            href="#courses"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Courses
          </Link>
          <Link
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 bg-transparent border-2 border-orange-500 text-white text-center cursor-pointer rounded-lg font-semibold hover:bg-orange-500/10 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-wrap gap-8 mt-8"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              500+
            </span>
            <span className="text-sm text-gray-400">Students Trained</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              95%
            </span>
            <span className="text-sm text-gray-400">Placement Rate</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              50+
            </span>
            <span className="text-sm text-gray-400">Studio Partners</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-vfx.png"
          alt="VFX Training Illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
