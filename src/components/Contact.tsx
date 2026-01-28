"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:pericmarko037@gmail.com",
    value: "pericmarko037@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/marko-peric-profile",
    value: "Connect on LinkedIn",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/markop037",
    value: "github.com/markop037",
    color: "from-gray-600 to-gray-800",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-dark-800/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target={contact.name !== "Email" ? "_blank" : undefined}
              rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center card-hover group"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{contact.name}</h3>
              <p className="text-gray-400 text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Prefer to send a direct message?
          </p>
          <motion.a
            href="mailto:pericmarko037@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
