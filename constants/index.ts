import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/fulsomecg/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/fulsomecg/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@fulsomecg",
  },
] as const;

export const VFX_SOFTWARE = [
  {
    skill_name: "Adobe After Effects",
    image: "aftereffects.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Adobe Premiere Pro",
    image: "premiere.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nuke",
    image: "nuke.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mocha Pro",
    image: "mocha.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Silhouette FX",
    image: "silhouette.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "DaVinci Resolve",
    image: "davinci.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Photoshop",
    image: "photoshop.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Illustrator",
    image: "illustrator.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Blender",
    image: "blender.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cinema 4D",
    image: "cinema4d.png",
    width: 80,
    height: 80,
  },
] as const;

export const COMPOSITING_TOOLS = [
  {
    skill_name: "Nuke Compositing",
    image: "nuke.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "After Effects Comp",
    image: "aftereffects.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Fusion",
    image: "fusion.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Green Screen",
    image: "greenscreen.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Color Grading",
    image: "colorgrading.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Rotoscoping",
    image: "rotoscope.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Motion Tracking",
    image: "tracking.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Paint & Cleanup",
    image: "paint.png",
    width: 80,
    height: 80,
  },
] as const;

export const AI_TOOLS = [
  {
    skill_name: "AI Enhancement",
    image: "ai.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Stable Diffusion",
    image: "stablediffusion.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Midjourney",
    image: "midjourney.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "RunwayML",
    image: "runway.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const COURSES = [
  {
    title: "AVFX - Advanced VFX Course",
    duration: "9 Months",
    description:
      'Master the complete VFX pipeline with our flagship 9-month Advanced VFX Course. Learn rotoscopy, paint & prep, compositing, motion graphics, 3D fundamentals, and AI-integrated workflows. This comprehensive program includes portfolio development, industry-standard projects, and guaranteed internship opportunities with leading VFX studios.',
    image: "/courses/avfx.jpg",
    link: "#contact",
    highlights: ["Portfolio Development", "100% Job Assistance", "Live Projects", "AI Integration"],
  },
  {
    title: "RPVFX - Roto & Paint VFX",
    duration: "6 Months",
    description:
      'Specialize in the high-demand fields of rotoscopy and paint & prep with our intensive 6-month program. Perfect for aspiring prep artists, this course covers advanced rotoscoping techniques using Mocha Pro and Silhouette FX, paint and cleanup workflows in Nuke, and prepares you for immediate industry placement in roto/paint departments.',
    image: "/courses/rpvfx.jpg",
    link: "#contact",
    highlights: ["Industry-Ready Skills", "Mocha & Silhouette", "Nuke Training", "Fast Track Career"],
  },
  {
    title: "RTVFX - Rotoscopy Training",
    duration: "3 Months",
    description:
      'Fast-track your entry into the VFX industry with our focused 3-month Rotoscopy Training program. Learn frame-by-frame element isolation techniques, master industry-standard tools like Mocha Pro, and develop the precision skills required for professional rotoscopy work. Ideal for quick career transitions into VFX.',
    image: "/courses/rtvfx.jpg",
    link: "#contact",
    highlights: ["Quick Entry", "Focused Training", "Tool Mastery", "Career Launch"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Quick Links",
    data: [
      {
        name: "About Us",
        icon: null,
        link: "#about",
      },
      {
        name: "Courses",
        icon: null,
        link: "#courses",
      },
      {
        name: "Why Choose Us",
        icon: null,
        link: "#why-choose-us",
      },
      {
        name: "Testimonials",
        icon: null,
        link: "#testimonials",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/fulsomecg/",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/fulsomecg/",
      },
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@fulsomecg",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Call: +91 9061356366",
        icon: null,
        link: "tel:+919061356366",
      },
      {
        name: "Email Us",
        icon: null,
        link: "mailto:info@fulsomecg.in",
      },
      {
        name: "Visit: Thrissur, Kerala",
        icon: null,
        link: "#contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Courses",
    link: "#courses",
  },
  {
    title: "Why Us",
    link: "#why-choose-us",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://www.fulsomecg.in",
  phone: "+91 9061356366",
  email: "info@fulsomecg.in",
  address: "36/4063, City Centre, Thrissur, Kerala, India",
  whatsapp: "https://wa.me/919061356366",
};

export const TESTIMONIALS = [
  {
    name: "Rahul Kumar",
    role: "Prep Artist at DNEG",
    image: "/testimonials/student1.jpg",
    content: "Fulsome CG transformed my career. The industry-focused training and AI integration gave me the edge I needed. Now I'm working on Hollywood projects at DNEG!",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Paint Artist at Futureworks",
    image: "/testimonials/student2.jpg",
    content: "The instructors are truly industry experts. The hands-on training with real projects prepared me perfectly for my role at Futureworks. Best decision I ever made!",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    role: "Roto Artist at MPC",
    image: "/testimonials/student3.jpg",
    content: "From zero knowledge to working at MPC in just 6 months! The RPVFX course is incredibly comprehensive. The job assistance program is genuine and effective.",
    rating: 5,
  },
  {
    name: "Sneha Krishnan",
    role: "Compositor at Prime Focus",
    image: "/testimonials/student4.jpg",
    content: "What sets Fulsome CG apart is their commitment to student success. The portfolio they helped me build landed me interviews at top studios. Forever grateful!",
    rating: 5,
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Industry Expert Trainers",
    description: "Learn from professionals with real-world VFX experience from major studios and productions.",
    icon: "expert",
  },
  {
    title: "AI-Integrated Curriculum",
    description: "India's first VFX academy to integrate cutting-edge AI tools and workflows into the training program.",
    icon: "ai",
  },
  {
    title: "100% Job Assistance",
    description: "Guaranteed internship opportunities and placement support with leading VFX studios across India and abroad.",
    icon: "job",
  },
  {
    title: "International Standards",
    description: "Training programs designed to meet international VFX industry standards and best practices.",
    icon: "international",
  },
  {
    title: "Hands-On Learning",
    description: "Work on real projects and build a professional portfolio that showcases your skills to potential employers.",
    icon: "hands-on",
  },
  {
    title: "Flexible Learning Options",
    description: "Choose from offline, online, or hybrid learning modes that fit your schedule and learning style.",
    icon: "flexible",
  },
] as const;

export const STATS = [
  {
    number: "500+",
    label: "Students Trained",
  },
  {
    number: "95%",
    label: "Placement Rate",
  },
  {
    number: "50+",
    label: "Studio Partners",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
] as const;

export const PROJECTS = [
  {
    title: "VFX Showreel",
    description: "A curated selection of compositing, matte painting, and visual effects work developed for feature film and advertising projects.",
    image: "/projects/project-1.png",
    link: "https://www.fulsomecg.in",
  },
  {
    title: "Commercial Compositing",
    description: "High-end advertising visual effects projects showcasing seamless integration of CG elements and real footage.",
    image: "/projects/project-2.png",
    link: "https://www.fulsomecg.in",
  },
  {
    title: "Portfolio Reel",
    description: "Student portfolio pieces demonstrating industry-standard VFX shots, rotoscoping, and color grading expertise.",
    image: "/projects/project-3.png",
    link: "https://www.fulsomecg.in",
  },
] as const;
