"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/constants/projects";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="md:py-20 py-10" id="projects">
      <div className="container mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold  text-center"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-center text-gray-200 capitalize"
          >
            live on production
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
