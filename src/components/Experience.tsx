"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { experiences } from "@/constants/exprience";
import { ExperienceItem } from "./ExperienceItem";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="py-20" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 hidden md:block" />

          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
