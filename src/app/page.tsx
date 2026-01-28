"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 grid-bg">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GitHub />
      <Contact />
      <Footer />
    </main>
  );
}
