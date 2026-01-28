"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Lightbulb } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "School of Electrical and Computer Engineering, Belgrade",
    },
    {
      icon: Briefcase,
      title: "Experience",
      text: "Backend Internship & Freelance Development",
    },
    {
      icon: Code,
      title: "Focus",
      text: "Python, C++, Cloud Technologies",
    },
    {
      icon: Lightbulb,
      title: "Passion",
      text: "Problem Solving & Continuous Learning",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I recently completed my studies at the{" "}
              <span className="text-white font-medium">
                School of Electrical and Computer Engineering in Belgrade
              </span>
              , specializing in New Computer Technologies. During my studies, I mainly
              worked with Python and C++, building a strong foundation in software
              development, problem-solving, and system design.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I completed a remote backend internship at{" "}
              <span className="text-indigo-400 font-medium">ZenHire</span>, where I
              gained hands-on experience working on cloud-based backend systems using
              Python and AWS. I collaborated with a professional development team,
              building scalable services and real-time communication features.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              In parallel, I run my own project at{" "}
              <span className="text-indigo-400 font-medium">Traders Market</span>, where
              I develop and optimize automated trading systems (Expert Advisors) using
              C++ and MQL5. I focus on performance, reliability, and algorithmic
              efficiency, including backtesting, optimization, and integration with the
              MetaTrader 5 platform.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy learning new technologies, solving complex problems, and working
              in collaborative team environments.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
