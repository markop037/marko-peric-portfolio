"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Wallet, Home, Store } from "lucide-react";

const projects = [
  {
    title: "Traders Market",
    subtitle: "MetaTrader 5 Trading Bots & Strategy Marketplace",
    icon: Store,
    features: [
      "Secure Authentication",
      "Trading Bot Catalog & Backtest Visuals",
      "Stripe Payments",
      "User Dashboard",
      "Email & PDF Delivery",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase (Auth, Firestore)",
      "Supabase (storage & DB)",
      "Stripe",
      "Resend",
    ],
    description:
      "Full-stack marketplace for MetaTrader 5 Expert Advisors with secure user authentication, subscription management, a responsive and intuitive UI, and seamless access to trading tools and resources.",
    github: null,
    liveUrl: "https://www.tradersmarket.io/",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "MyWallet",
    subtitle: "Personal Finance & Expense Tracker App",
    icon: Wallet,
    features: [
      "Secure Login",
      "Income & Expense Tracking",
      "Real-Time Balance",
      "Interactive Charts",
    ],
    technologies: ["Python", "PySide6", "SQLAlchemy", "SQL Server", "PyTest"],
    description:
      "Built a secure finance management app using Python, SQLAlchemy & SQL Server. Developed a real-time PySide6 dashboard with interactive charts.",
    github: "https://github.com/markop037/mywallet_project",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Apartment Price Prediction Application",
    subtitle: "Machine Learning Application",
    icon: Home,
    features: [
      "Data Input",
      "Price Prediction",
      "Linear & Polynomial Regression",
      "Dynamic GUI",
    ],
    technologies: [
      "Python",
      "PySide6",
      "Pandas",
      "Scikit-learn",
      "BeautifulSoup",
      "Selenium",
    ],
    description:
      "Developed an ML app for apartment price prediction using web scraping. Built regression models and a PySide6 GUI for real-time estimates.",
    github: "https://github.com/markop037/belgrade_housing_analysis",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32 relative bg-dark-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            This is a collection of my key projects. For each one, I show a short description, main features, technologies used, and a link to the code or repository.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6 sm:p-8">
                {/* Title Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white hover:bg-dark-600 rounded-lg transition-all"
                        aria-label="Visit live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white hover:bg-dark-600 rounded-lg transition-all"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-dark-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="border-t border-dark-600 pt-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group/link"
                      whileHover={{ x: 5 }}
                    >
                      Visit live site
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group/link"
                      whileHover={{ x: 5 }}
                    >
                      View on GitHub
                      <ExternalLink
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
