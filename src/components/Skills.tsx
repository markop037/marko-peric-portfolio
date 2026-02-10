"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Brain,
  Database,
  TestTube,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Python", "SQL", "TypeScript / JavaScript", "MQL5"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Next.js", "FastAPI", "RESTful APIs", "WebSockets"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MySQL", "MongoDB", "Supabase"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Git / GitHub", "AWS", "Firebase"],
    color: "from-blue-500 to-pink-500",
  },
  {
    title: "Machine Learning & Data Analysis",
    icon: Brain,
    skills: ["Pandas", "Scikit-learn"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Testing & Automation",
    icon: TestTube,
    skills: ["PyTest", "Selenium", "BeautifulSoup"],
    color: "from-red-500 to-rose-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 relative bg-dark-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            This is a list of programming languages, frameworks, and tools I use. It shows what I’ve worked with for backend and frontend development, cloud and DevOps, databases, and data or testing projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                    }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
