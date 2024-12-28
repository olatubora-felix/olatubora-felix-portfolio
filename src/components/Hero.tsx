"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SocialComp } from "./SocialComp";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center md:pt-40 py-10 md:pb-20 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-3"
      >
        <div className="flex justify-center items-center ">
          <Image
            src={"/logo.jpg"}
            alt="Olawole Felix Olatubora"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Olawole Felix Olatubora
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-8">
          Senior Frontend Developer
        </h2>
        <div className="flex justify-center items-center gap-4 py-2">
          <SocialComp />
        </div>
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
