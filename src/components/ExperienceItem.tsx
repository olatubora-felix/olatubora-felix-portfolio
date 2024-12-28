import React, { FC, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Exprience } from "@/constants/exprience";
import Image from "next/image";

export const ExperienceItem: FC<Props> = ({ experience, index }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, x }}
      className={`md:mb-1 mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 md:w-5/12"></div>
      <div className="z-20">
        {experience.logo ? (
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 shadow-xl border-4 border-white">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        )}
      </div>
      <motion.div
        className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-bold text-lg mb-1 text-blue-400">
          {experience.title}
        </h3>
        <div>
          <p className="text-sm text-gray-400">{experience.company}</p>
          <small className="text-xs text-gray-400 mb-2">
            {experience.location}
          </small>
        </div>
        <p className="text-sm text-gray-500 mb-3">{experience.period}</p>
        <ul className="text-gray-300 text-sm leading-snug tracking-wide list-disc space-y-2">
          {experience.description.map((des) => (
            <li key={des}>{des}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

interface Props {
  experience: Exprience;
  index: number;
}
