"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-6">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[10px] px-[12px] border border-[#ff8a3d8b] opacity-[0.9] w-fit"
      >
        <SparklesIcon className="text-[#ff9d5c] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Master Industry-Standard Tools
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-4xl text-white font-bold mt-[10px] text-center mb-[15px]"
      >
        Professional{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
          VFX Software
        </span>{" "}
        Training
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-lg md:text-xl text-gray-300 mb-10 mt-[10px] text-center max-w-3xl"
      >
        Learn the complete VFX pipeline with industry-standard software and cutting-edge AI tools used by top studios worldwide.
      </motion.div>
    </div>
  );
};
