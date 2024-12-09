"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
        style={{ scaleX }}
      />
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
        onExperienceClick={() => scrollTo(experienceRef)}
      />
      <main>
        <Hero />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}
