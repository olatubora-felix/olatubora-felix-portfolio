"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, AlignJustify, FileUser } from "lucide-react";
import Link from "next/link";

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
    <header className="sticky top-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={"/logo.jpg"}
            alt="Olawole Felix Olatubora"
            height={40}
            width={40}
            className="rounded-full !h-10 !w-10"
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
        <div className="hidden md:flex space-x-8 items-center">
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-base transition-colors "
          >
            <Link
              href={"/felix-olawole-olatubora.pdf"}
              download={true}
              target="_blank"
              className="flex items-center gap-2"
            >
              <FileUser /> Resume
            </Link>
          </motion.button>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(!isOpen)} size={24} />
          ) : (
            <AlignJustify onClick={() => setIsOpen(!isOpen)} size={24} />
          )}
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-4 grid gap-4"
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
          <div className="px-6 py-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-base transition-colors flex items-center gap-2 w-full justify-center"
            >
              <FileUser /> Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
