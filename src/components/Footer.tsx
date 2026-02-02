"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useState } from "react";

const EMAIL_ADDRESS = "marko.peric2102@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/markop037",
    isEmail: false,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/marko-perić-23893b316/",
    isEmail: false,
  },
  {
    name: "Email",
    icon: Mail,
    isEmail: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setShowCopiedTooltip(true);
      setTimeout(() => setShowCopiedTooltip(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="py-12 border-t border-dark-600/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold gradient-text">
              MP
            </a>
            <p className="text-gray-500 text-sm mt-1">Software Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) =>
              social.isEmail ? (
                // Email with copy functionality
                <div key={social.name} className="relative">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all duration-200"
                    aria-label={`Copy ${social.name}`}
                    title="Click to copy email"
                  >
                    <social.icon size={20} />
                  </button>
                  
                  {/* Copied Tooltip */}
                  {showCopiedTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                    >
                      Email copied!
                      <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rotate-45"></div>
                    </motion.div>
                  )}
                </div>
              ) : (
                // Regular social links
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              )
            )}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-end">
              © {currentYear} Marko Perić. Built with
              <Heart size={14} className="text-red-500 inline" />
            </p>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-dark-700/50"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
