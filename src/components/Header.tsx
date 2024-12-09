"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
  onExperienceClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onAboutClick,
  onProjectsClick,
  onContactClick,
  onExperienceClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (callback: () => void) => {
    setIsOpen(false);
    callback();
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={"/logo.jpg"}
            alt="Olawole Felix Olatubora"
            height={40}
            width={40}
            className="rounded-full"
          />
          <motion.span
            className="text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Olawole Olatubora
          </motion.span>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: "About", onClick: onAboutClick },
            { name: "Experience", onClick: onExperienceClick },
            { name: "Projects", onClick: onProjectsClick },
            { name: "Contact", onClick: onContactClick },
          ].map((item) => (
            <motion.span
              key={item.name}
              className="hover:text-blue-400 transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => item.onClick()}
            >
              {item.name}
            </motion.span>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-2"
        >
          {[
            { name: "About", onClick: onAboutClick },
            { name: "Experience", onClick: onExperienceClick },
            { name: "Projects", onClick: onProjectsClick },
            { name: "Contact", onClick: onContactClick },
          ].map((item) => (
            <motion.div
              key={item.name}
              className="block px-6 py-2 hover:bg-gray-700 cursor-pointer"
              whileHover={{ x: 5 }}
              whileTap={{ x: 0 }}
              onClick={() => handleClick(item.onClick)}
            >
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
