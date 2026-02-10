"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "C++ & MQL5 Developer",
    company: "Traders Market",
    type: "Freelance, Remote",
    period: "June 2025 – Present",
    website: "https://www.tradersmarket.io/",
    responsibilities: [
      "Developing and optimizing automated trading systems (Expert Advisors) for MetaTrader 5 using C++ and MQL5",
      "Conducting strategy design, backtesting, and performance optimization for algorithmic trading",
      "Integrating trading systems with full platform functionality for reliability and efficiency",
      "Managing deployment, client access, and ongoing technical support",
    ],
    current: true,
  },
  {
    title: "Backend Developer Intern (Python / AWS)",
    company: "ZenHire",
    type: "Internship, Remote",
    period: "February 2025 – May 2025",
    website: null,
    responsibilities: [
      "Built scalable backend services using Python and AWS Lambda",
      "Implemented real-time, word-by-word responses using WebSockets",
      "Managed cloud-based data storage and retrieval",
      "Collaborated with a professional software development team",
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 sm:py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            This is a timeline of my work experience. For each role, it shows when I worked there, what kind of work it was, and the main tasks I did.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark-900 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-blue-400 font-semibold hover:text-blue-300 underline underline-offset-2 transition-colors"
                          >
                            {exp.company}
                            <ExternalLink size={14} className="flex-shrink-0" />
                          </a>
                        ) : (
                          <span className="text-blue-400 font-semibold">{exp.company}</span>
                        )}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
