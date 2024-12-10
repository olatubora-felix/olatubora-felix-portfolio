import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectType } from "@/constants/projects";
import { FC } from "react";
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 h-[400px]">
        <h3 className="text-2xl font-bold mb-2 text-blue-400">
          {project.title}
        </h3>
        <div className="mb-4  h-[200px] overflow-y-auto">
          <p className={`text-gray-300  `}>{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
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
    </motion.div>
  );
};
interface Props {
  project: ProjectType;
  index: number;
}
