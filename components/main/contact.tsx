"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { LINKS } from "@/constants";

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

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    const whatsappMessage = `Hi! I'm ${formData.name}. I'm interested in ${formData.course || "VFX courses"}. Email: ${formData.email}, Phone: ${formData.phone}. Message: ${formData.message}`;
    window.open(
      `https://wa.me/919061356366?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to start your VFX journey? Contact us today for enrollment or any inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href={`tel:${LINKS.phone}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {LINKS.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${LINKS.email}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {LINKS.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">{LINKS.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Working Hours
                    </h4>
                    <p className="text-gray-400">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-orange-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.9999999999995!2d76.2144!3d10.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMxJzM5LjQiTiA3NsKwMTInNTEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.6)}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f0500] border border-orange-500/30 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f0500] border border-orange-500/30 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f0500] border border-orange-500/30 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f0500] border border-orange-500/30 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a course</option>
                    <option value="AVFX">AVFX - Advanced VFX (9 Months)</option>
                    <option value="RPVFX">RPVFX - Roto & Paint (6 Months)</option>
                    <option value="RTVFX">RTVFX - Rotoscopy (3 Months)</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0f0500] border border-orange-500/30 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your goals and questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
