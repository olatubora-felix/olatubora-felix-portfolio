"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="md:min-h-[70svh] h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Olawole Felix Olatubora
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-8">
          Senior Frontend Developer
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Crafting exceptional web experiences with React, Next.js, and
          cutting-edge technologies.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
