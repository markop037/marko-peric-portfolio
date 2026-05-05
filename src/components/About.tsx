"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code } from "lucide-react";

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
      icon: Code,
      title: "Focus",
      text: "Python, C++, Cloud & APIs",
    },
    {
      icon: Briefcase,
      title: "Experience",
      lines: ["Backend Dev (Python / AWS)", "ZenHire", "C++ & MQL5 Dev", "Traders Market"],
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A quick overview of my background — where I studied, what I&apos;ve worked on so far, and what I&apos;m currently focused on.
          </p>
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
              I just finished my studies at the{" "}
              <span className="text-white font-medium">
                School of Electrical and Computer Engineering in Belgrade
              </span>
              , where I focused on New Computer Technologies. Most of what I learned
              was through Python and C++, and along the way I picked up a decent
              understanding of how software gets built and how to approach problems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I also did a remote backend internship at{" "}
              <span className="text-blue-400 font-medium">ZenHire</span>, which was
              pretty cool. I got to work on real backend stuff — Python, AWS, building
              out some services and real-time features as part of a small team. It was
              a good way to see how things actually work outside of school projects,
              from writing proper code to getting it ready for production.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Right now I&apos;m working on my own thing called{" "}
              <span className="text-blue-400 font-medium">Traders Market</span>, where
              I build automated trading bots for MetaTrader 5 using C++ and MQL5. It&apos;s
              basically writing algorithms that trade on their own — I handle everything
              from the logic to backtesting and making sure it all runs reliably.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I like picking up new things, figuring out tricky problems, and building
              stuff that actually works.
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
                className={`glass rounded-xl p-6 card-hover${"lines" in item ? " col-span-2" : ""}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                {"lines" in item ? (
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <span className="text-gray-400 text-sm">
                      <span className="text-gray-300">{item.lines[0]}</span>
                      {" · "}
                      <span className="text-blue-400">{item.lines[1]}</span>
                    </span>
                    <span className="text-gray-400 text-sm">
                      <span className="text-gray-300">{item.lines[2]}</span>
                      {" · "}
                      <span className="text-blue-400">{item.lines[3]}</span>
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">{item.text}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
