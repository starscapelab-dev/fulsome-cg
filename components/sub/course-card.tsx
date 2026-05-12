"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface CourseCardProps {
  src: string;
  title: string;
  duration: string;
  description: string;
  highlights: readonly string[];
  link: string;
  index: number;
}

export const CourseCard = ({
  src,
  title,
  duration,
  description,
  highlights,
  link,
  index,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 hover:border-orange-500/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent" />

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-orange-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <ClockIcon className="w-4 h-4 text-white" />
          <span className="text-white font-semibold text-sm">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-400 transition-all">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircleIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span className="text-gray-300">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={link}
          className="block w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </a>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
    </motion.div>
  );
};
