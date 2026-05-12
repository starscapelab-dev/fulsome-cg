"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

const FAQS = [
  {
    question: "What makes Fulsome CG different from other VFX training institutes in Kerala?",
    answer:
      "Fulsome CG International VFX Academy stands out as India's first job-based VFX training centre with 100% placement assistance. We integrate cutting-edge AI tools like Stable Diffusion and Midjourney into our curriculum, offer hands-on training with industry-standard software (Nuke, After Effects, Mocha Pro), and maintain direct partnerships with 50+ leading VFX studios including DNEG, MPC, and Prime Focus. Our trainers are working professionals with 10+ years of industry experience.",
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer:
      "Yes! We offer 100% job placement assistance with a proven 95% placement success rate. Our dedicated placement cell connects students with leading VFX studios across India and internationally. We provide resume building, portfolio review, mock interviews, and direct studio connections. Many of our students have been placed at top studios like DNEG, Futureworks, MPC, and Prime Focus within 3 months of course completion.",
  },
  {
    question: "What are the eligibility criteria for VFX courses at Fulsome CG?",
    answer:
      "Our VFX courses are open to students who have completed 10+2 (any stream) or equivalent. No prior experience in VFX or design is required. We welcome creative individuals, aspiring artists, career switchers, and anyone passionate about visual effects and animation. Basic computer knowledge and artistic interest are beneficial but not mandatory. We provide foundation training to bring all students up to industry standards.",
  },
  {
    question: "Which software will I learn during the VFX training?",
    answer:
      "Our comprehensive VFX training covers industry-standard software including: Nuke (compositing), Adobe After Effects (motion graphics & VFX), Mocha Pro (tracking & rotoscoping), Silhouette FX (rotoscoping), Adobe Premiere Pro (editing), DaVinci Resolve (color grading), Adobe Photoshop & Illustrator (graphics), Blender & Cinema 4D (3D fundamentals), plus AI tools like Stable Diffusion, Midjourney, and RunwayML for cutting-edge VFX workflows.",
  },
  {
    question: "How long are the VFX courses and what are the fee structures?",
    answer:
      "We offer three comprehensive programs: (1) AVFX Advanced VFX - 9 months covering complete VFX pipeline, (2) RPVFX Roto & Paint - 6 months specialized training, (3) RTVFX Rotoscopy - 3 months intensive program. Course fees are competitive and we offer flexible payment options including installment plans. Contact us for detailed fee structure and current offers. We also provide scholarship opportunities for deserving candidates.",
  },
  {
    question: "Can I take online VFX classes or is it only offline?",
    answer:
      "Fulsome CG offers flexible learning modes: (1) Offline classroom training at our Thrissur, Kerala facility with state-of-the-art labs, (2) Online live interactive classes with real-time instructor guidance, (3) Hybrid mode combining both online and offline sessions. All modes provide the same curriculum, certification, and placement support. Online students get recorded session access and one-on-one mentorship.",
  },
  {
    question: "Will I receive a certificate after completing the VFX course?",
    answer:
      "Yes, upon successful completion of your VFX course, you will receive an industry-recognized certificate from Fulsome CG International VFX Academy. Our certifications are valued by VFX studios and production houses across India and internationally. Additionally, you'll build a professional demo reel and portfolio that showcases your skills to potential employers, which is often more valuable than the certificate itself in the VFX industry.",
  },
  {
    question: "What career opportunities are available after VFX training?",
    answer:
      "VFX training opens diverse career paths including: Roto Artist, Paint & Prep Artist, Compositor, Matchmove Artist, VFX Generalist, Motion Graphics Designer, Video Editor, Color Grading Artist, 3D Artist, and VFX Supervisor. Job opportunities exist in film production houses, advertising agencies, OTT platforms, gaming studios, architectural visualization firms, and corporate video production. Starting salaries range from ₹15,000 to ₹35,000 per month for freshers, growing rapidly with experience.",
  },
  {
    question: "How experienced are the trainers at Fulsome CG?",
    answer:
      "Our trainers are working VFX professionals with 10-15 years of industry experience from prestigious studios like DNEG, MPC, Red Chillies VFX, and Prime Focus. They have worked on major Bollywood and Hollywood productions including blockbuster films and web series. They bring real-world production insights, industry best practices, and current workflow techniques directly into the classroom, ensuring students learn practical, job-ready skills.",
  },
  {
    question: "Do you provide hands-on project work and portfolio building?",
    answer:
      "Absolutely! Practical training is the core of our curriculum. Students work on 15+ real-world projects including film VFX shots, commercial advertisements, and professional-grade assignments. We provide live project experience where students work on actual client projects under supervision. By course end, each student builds a professional demo reel and portfolio showcasing their best work, which is essential for VFX studio placements and freelance opportunities.",
  },
  {
    question: "Is prior knowledge of drawing or design mandatory for VFX courses?",
    answer:
      "No, prior drawing or design skills are not mandatory. While artistic sense helps, we provide foundation training in design principles, color theory, and composition. Many successful VFX artists come from non-artistic backgrounds. What matters most is passion for visual storytelling, attention to detail, patience for frame-by-frame work, and willingness to learn. Our courses are designed to nurture your creative abilities from scratch.",
  },
  {
    question: "What is the student-to-teacher ratio and batch size?",
    answer:
      "We maintain small batch sizes of 12-15 students per class to ensure personalized attention and effective learning. This optimal student-to-teacher ratio allows instructors to provide individual feedback, address specific doubts, and monitor each student's progress closely. Small batches also facilitate better hands-on practice, peer learning, and collaborative project work, creating an intensive learning environment similar to professional VFX studios.",
  },
];

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 px-6 md:px-20 w-full z-[20]"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get answers to common questions about VFX training, courses, career opportunities, and admissions at Fulsome CG International VFX Academy
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.3 + index * 0.05)}
              className="bg-gradient-to-br from-[#1a0800]/80 to-[#0f0500]/80 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors pr-8">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0.8)}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};
