export const projects: ProjectType[] = [
  {
    title: "Mide Premium Ltd Web App",
    description:
      "I led the development of the frontend from scratch using Next.js, Tailwind CSS, and TypeScript. I was responsible for ensuring the application was user-friendly, responsive, and scalable. My leadership involved coordinating the frontend team, maintaining a high code quality standard, and ensuring the seamless integration of business requirements with technical solutions. I played a key role in delivering a high-performance, modern web experience for Mide Premium’s energy solutions.",
    image: "/mide.png",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "Zod",
      "Hook Form",
    ],
    website: "https://www.midepremiumltd.com/",
  },
  {
    title: "Point of Sale (POS) Web App for FMX",
    description:
      "I spearheaded the development of the Fresh Market Xchange Frontend, crafting a robust and scalable platform from scratch using Next.js, Tailwind CSS, and TypeScript. The project aimed to modernize Japan's wholesale market by enabling seamless transactions and supply chain management. I focused on building intuitive user interfaces, optimizing performance, and ensuring accessibility for diverse users. ",
    image: "/fmx.png",
    tags: [
      "React",
      "Nextjs",
      "Typescript",
      "Material-UI",
      "Redux Toolkit",
      "RTK Query",
    ],
    website: "https://www.freshmarketxchange.co/en",
  },
  {
    title: "Mtracker Web App",
    description:
      "I led the design and development of the MyMTrackr app, a platform that helps businesses manage their finances with confidence and ease. Using Next.js for the frontend and Laravel for the backend, I built features like secure user authentication, real-time data updates, and intuitive dashboards for tracking and managing business finances. The app's architecture is optimized for scalability and responsiveness, ensuring a seamless experience for users. This project showcases my ability to deliver modern, user-centric solutions for financial management.",
    image: "/mtracker.png",
    tags: [
      "React",
      "Nextjs",
      "Tailwindcss",
      "Zustand",
      "React Tanstack",
      "API Integration",
      "Laravel",
    ],
    website: "https://www.mymtrackr.com/",
  },
];
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  website: string;
}
