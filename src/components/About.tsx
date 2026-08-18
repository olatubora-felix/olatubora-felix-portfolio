"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";

const skillGroups = [
  {
    category: "Backend & Architecture",
    items: [
      "NestJS",
      "Node.js/Express",
      "Laravel/PHP",
      "Microservices",
      "Platform federation",
      "Multi-tenant (schema-per-tenant) SaaS",
      "Event-driven & queue-based systems",
      "BullMQ",
      "Redis",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "React Native/Expo",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "React Query",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      "PostgreSQL (incl. PostGIS)",
      "Drizzle ORM",
      "AWS",
      "Vercel",
      "Supabase",
      "Hetzner/Coolify",
      "CI/CD",
      "Docker",
    ],
  },
  {
    category: "Domain Expertise",
    items: [
      "KYC/AML architecture",
      "Financial transaction integrity",
      "Double-entry ledger/wallet systems",
      "Real-time systems (WebSockets/Socket.io)",
    ],
  },
  {
    category: "Practices",
    items: [
      "Agile/Scrum",
      "Code review",
      "Technical mentorship",
      "API design",
      "Git",
      "Jira",
    ],
  },
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
            I am a Senior Software Engineer with 7+ years across fintech,
            healthtech, logistics, and e-commerce, currently building core
            wealth-management infrastructure at Afrinvest (West Africa) Limited.
            I specialize in backend architecture and system design —
            microservices, multi-tenant platforms, KYC/AML flows, and financial
            data integrity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-start"
          >
            I work primarily with NestJS, Laravel, and Next.js, backed by strong
            PostgreSQL and distributed-systems fundamentals. I design database
            schemas and event-driven, queue-based services, build secure
            authentication and authorization flows, and own deployment workflows
            end to end through CI/CD and cloud infrastructure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg"
          >
            My track record is measurable: 35% faster transaction processing,
            40% fewer API calls, and a 56% performance gain from a full
            framework migration. I have led and mentored engineering teams
            through code reviews, technical guidance, and structured learning
            paths, and I am currently deepening my expertise in Java/Spring Boot
            and data engineering/cloud infrastructure.
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
              Core Skills
            </motion.h3>
            <div ref={inViewRef} className="space-y-6">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-gray-300">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-800 rounded-lg px-4 py-2 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
