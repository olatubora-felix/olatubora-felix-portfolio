import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectType } from "@/constants/projects";
import { FC } from "react";
import Link from "next/link";
import ShimmerButton from "./ui/shimmer-button";
export const ProjectCard: FC<Props> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm font-normal mb-2">
          {project.description.substring(0, 120)}...
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-500 text-sm text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gray-900 bg-opacity-90 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4"
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-400">
          {project.title}
        </h3>
        <p className="text-gray-300 text-center overflow-y-auto max-h-[calc(100%-2rem)]">
          {project.description}
        </p>
        <ShimmerButton className="shadow-2xl py-2 px-4" background="#3b82f6">
          <Link href={project.website} target="_blank">
            View Live
          </Link>
        </ShimmerButton>
      </motion.div>
    </motion.div>
  );
};
interface Props {
  project: ProjectType;
  index: number;
}
