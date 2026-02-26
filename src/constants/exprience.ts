export const experiences: Exprience[] = [
  {
    title: "Senior Software Engineer",
    company: "Myvamsnet Limited · Contract",
    location: "Lagos, Lagos State, Nigeria",
    period: "Jan 2025 - Present",
    logo: "/myvamsnet.svg",
    description: [
      "Lead the design of scalable systems, APIs, and backend services using NestJS, PostgreSQL, and Supabase.",
      "Build and maintain robust applications using Next.js, React Native, and Expo.",
      "Manage and mentor a cross-functional team of 5 engineers, conducting code reviews, onboarding, and continuous skill development.",
      "Oversee deployment workflows with AWS, Vercel, and Supabase Edge Functions.",
      "Developed standard reports for all projects, making it easier for future developers to understand and build upon codebase.",
      "Work closely with stakeholders to translate product ideas into technical solutions and iterative releases.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Fresh Market Xchange (FMX) · Contract",
    location: "Melbourne, Victoria, Australia",
    period: "Jul 2024 - Present",
    logo: "/fmx-logo.webp",
    description: [
      "Managed and led a team of three frontend developers, driving the successful delivery of high-quality projects from initial concept to final deployment.",
      "Developed key features for internal teams, increasing their productivity by approximately 25%.",
      "Mentored junior developers, fostering professional growth and enhancing overall team productivity.",
      "Collaborated with product and design teams to build and maintain features for various internal and external dashboards.",
      "Worked with QA Engineers to ensure new features/pages are tested and approved within 72 hours.",
      "Migrated client’s existing React app to Next.js, leveraging server actions, server components, and serverless APIs, resulting in 56% performance improvement.",
      "Developed standard reports for all projects, making it easier for future developers to understand and build upon codebase.",
      "Enhanced and updated frontend functionalities across the web app.",
      "Delivered a responsive and high-performance interface tailored to wholesale market needs.",
      "Integrated multilingual support (Japanese and English) to improve accessibility.",
      "Implemented OCR technology to streamline order processing and automate invoice generation.",
    ],
  },

  {
    title: "Senior Software Engineer",
    company: "Stellas Bank . Hybrid",
    location: "Lagos, Lagos State, Nigeria",
    period: "Aug 2022 - Oct 2024",
    logo: "/stellas-logo.svg",
    description: [
      "Operating in an Agile and Scrum-oriented work environment, utilizing tools like Git, Jira, Slack, Microsoft Teams and other tools.",
      "Managed the Stellas Bank Frontend and Interstellas Frontend, making use of a diverse set of tools such as Typescript, Javascript, Reactjs, Nextjs, Redux, React Query, Cypress, Eslint, Prettier, and various additional packages.",
      "Collaborating with Back-end developers and Product Designers to improve usability.",
      "Getting feedback from, and building solutions for, users and customers.",
      "Fixing web app issues or bugs that arise.",
      "Adding features to the Stellas Frontend and Interstellas Frontend web applications.",
      "Adding custom features with proper unit tests.",
      "Performing pair programming with other colleagues.",
      "Collaborated with the Customer Support team to resolve customer issues effectively.",
    ],
  },
  {
    title: "Software Engineer",
    company: "The GIG Group · Full-time",
    location: "Lagos, Lagos State, Nigeria",
    period: "Mar 2022 - Aug 2022",
    logo: "/the_gig_group_logo.jpeg",
    description: [
      "Designed and delivered scalable digital solutions to support logistics operations, focusing on user-friendly interfaces and seamless functionality.",
      "Initially joined The GIG Group to enhance its logistics operations through innovative digital solutions and later transitioned to Stellas Bank, a subsidiary, to drive technology initiatives within the financial services sector.",
    ],
  },
  {
    title: "Full-stack Developer(React/Laravel)",
    company: "Mobinet Group · Remote",
    location: "Hong Kong",
    period: "Aug 2021 - Oct 2022",
    logo: "/mobinet-logo.jpeg",
    description: [
      "Working with clients to develop the overall look and design of a web app.",
      "Building web app using programming languages such as HTML, CSS, JavaScript, React.js, and Laravel (API).",
      "Producing, maintaining, and modifying web app and user interface.",
      "Collaborating with other team developers and UI/UX designers to improve usability.",
      "Getting feedback from and building solutions for users and customers.",
      "Routinely testing web app for ease of use, speed, and quality factors.",
      "Fixing web app issues or bugs that arise.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Gheli Technology Solution limited · Full-time",
    location: "Benin-City, Edo, Nigeria",
    period: "Apr 2020 - May 2021",
    logo: "",
    description: [
      "Supported schools during the COVID-19 pandemic by developing robust online solutions to facilitate remote learning.",
      "Built a Computer-Based Test (CBT) platform and an online classroom system using PHP and Laravel.",
      "Collaborated with educators and administrators to understand requirements and deliver tailored solutions.",
      "Designed and implemented user-friendly interfaces to ensure accessibility for students and teachers.",
      "Debugged and optimized application performance to handle high traffic during peak usage times.",
      "Provided technical support and resolved issues promptly to ensure seamless operations.",
      "Played a key role in enabling education continuity during unprecedented times through innovative software development.",
    ],
  },
  {
    title: "Assistant Software Engineer- NYSC",
    company:
      "Ministry of innovation, science and technology osogbo Osun State · Full-time",
    location: "Oshogbo, Osun, Nigeria",
    period: "Nov 2019 - Oct 2020",
    logo: "",
    description: [
      "Assisted the Osun State Government in building a web application to track patients in isolation centers and provide real-time COVID-19 statistics.",
      "Developed a web application for the Ministry of Innovation, Science, and Technology, Osogbo, Osun State, to create COVID-19 awareness campaigns.",
      "Leveraged Laravel and React to build scalable, efficient, and user-friendly solutions.",
      "Collaborated with government officials to gather requirements and deliver impactful applications.",
      "Ensured high performance and reliability to support critical pandemic response efforts.",
    ],
  },
  {
    title: "PHP/Laravel Developer",
    company: "Digital Crystal Solution Technology · Part-time",
    location: "Benin-City, Edo, Nigeria",
    period: "Jun 2018 - Aug 2019",
    logo: "",
    description: [
      "Ensuring web design is optimized for smartphones.",
      "Building reusable code for using PHP",
      "Optimizing web pages for maximum speed and scalability.",
      "Utilizing a variety of markup languages to write web pages.",
      "Maintaining brand consistency throughout design.",
    ],
  },
];
export interface Exprience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
}
