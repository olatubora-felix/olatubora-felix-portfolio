"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "Git",
  "Jest",
];

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="pb-10" id="about">
      <div className="container mx-auto md:px-6 px-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className=" space-y-4 text-gray-100 md:text-start text-center max-w-3xl w-full mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg"
          >
            I am a Senior Software Engineer with 6+ years of experience
            specializing in JavaScript, TypeScript, React, Next.js, PHP, and
            Laravel. I build secure, scalable SaaS applications and FinTech
            solutions, excelling in state management, responsive design, and
            data visualization with tools like Redux, Tailwind CSS, and Apache
            eCharts.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-start"
          >
            I bring deep expertise in Laravel, crafting RESTful APIs,
            integrating third-party services, and implementing robust
            authentication systems with Laravel Sanctum and Passport. Skilled in
            optimizing Eloquent ORM and database queries, I ensure high
            performance and maintainability in my applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg"
          >
            A dedicated mentor, I am passionate about empowering junior
            developers through code reviews, technical guidance, and structured
            learning paths. I also specialize in PWAs, JavaScript SDKs, and
            testing frameworks like Jest and Vitest while leveraging modern
            tools like Webpack, Vite, and CI/CD pipelines. Thriving in agile
            teams, I collaborate seamlessly through Jira, Slack, and GitHub.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg"
          >
            Open to freelance, remote, or contract roles—let’s connect! 😊
          </motion.p>

          <section className="py-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl font-bold mb-6"
            >
              Skills & Technologies
            </motion.h3>
            <div ref={inViewRef}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
