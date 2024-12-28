"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="py-20 container mx-auto px-6 flex justify-center items-center flex-col"
      id="contact"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Get in Touch
      </h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-base transition-colors flex items-center gap-2"
      >
        <Link href={"https://wa.me/2347086514426"} target="_blank">
          Contact Me
        </Link>
      </motion.button>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
