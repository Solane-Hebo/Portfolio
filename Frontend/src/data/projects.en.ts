import type { Project } from "../types";

export const projectsEn: Project[] = [
  // -----------------------------
  // DIF Ticketing (optional)
  // -----------------------------
  // Uncomment when ready to show
  
  {
    id: "dif-ticketing",
    title: "DIF Ticketing System (Internship Project)",
    description:
      "A modern ticketing flow for selecting matches, seats and completing purchases – optimized for clarity, mobile usability and conversion.",
    longDescription:
      "During my internship at DIF.se, I worked on a ticketing system where users can browse available games, choose ticket types and complete purchases. The focus was on building a clean UI, responsive components, improved user flow and a frictionless checkout experience. The work included React components, form logic, REST API integration, state management and accessibility improvements.",
    tech: ["React", "TypeScript", "Tailwind", "REST API"],
    highlight: true,
    role: "Frontend Developer (Internship)",
    period: "Spring 2025",
    client: "DIF.se",
    lia: true,
    image: "/images/projects/dif-ticketing.png"
    
  },
  

  // -----------------------------
  // StayEasy
  // -----------------------------
  {
    id: "stayeasy",
    title: "StayEasy – Fullstack Airbnb-Inspired App",
    description:
      "A fullstack web application inspired by Airbnb, built with React, TypeScript, Node.js, Express and MongoDB. Users can search listings, book stays and manage their own properties.",
    longDescription:
      "StayEasy is a fullstack web application inspired by Airbnb. The frontend is built with React, TypeScript, Vite and Tailwind, including a search flow (location, dates, guests), results page with filtering, property detail page, booking flow with validation, login/registration, user bookings overview and an admin panel for creating, updating and deleting listings. The backend is built with Node.js, Express and TypeScript using MongoDB (Mongoose). It features JWT-based authentication, data validation, error handling and a structured REST API connecting the client and server. The project strengthened my skills in fullstack development, API architecture, data modeling and frontend–backend integration.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Solane-Hebo/Vintage-Resorts.git",
    // highlight: true,
    role: "Fullstack Developer",
    period: "Oct–Nov 2025",
    client: "KYH (school project)",
    // lia: false,
    image: "/images/projects/Vintage Resort.png",
    images: [
    "/images/projects/Vintage Resort.png",
    "/images/projects/Vintage Resort.png",
    "/images/projects/Vintage Resort.png",
  ],
  },



  {
  id: "forum-app",
  title: "Online Forum – Team Collaboration & Independent Extension",
  description:
    "React & TypeScript forum application with authentication, threads, comments, moderation tools and advanced UI logic.",
  longDescription:
    "This project began as a team assignment where we built the initial structure of a forum application using React and TypeScript while following Agile principles and code reviews. After the team phase, I continued the project independently in my own repository, expanding it into a complete and modular TypeScript application. Key features include creating and viewing threads and comments, user authentication, locked threads (read-only), Q&A threads where comments can be marked as answers, moderator permissions, nested threaded replies, tags and filtering, content filtering for inappropriate language, and ad-threads with external links and click-tracking. The entire codebase uses strict TypeScript typing and a clean component architecture.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Context API",
    "Custom Hooks",
    "LocalStorage Auth",
  ],
  github: "https://github.com/Solane-Hebo/typeScript-vite-react.git",
  role: "Frontend Developer",
  period: "Aug–Sep 2025",
  client: "School project / Personal extension",
  lia: false,
  image: "/images/projects/Forum2.png",
},

{
  id: "event-cms",
  title: "Event Website with Headless CMS (Next.js 15)",
  description:
    "Responsive event website where all content is fetched from a Headless CMS. Built with Next.js 15 and the App Router.",
  longDescription:
    "A full event website built with Next.js 15, App Router, and a Headless CMS. I created structured CMS schemas for titles, descriptions, dates, images, and locations. The homepage displays CMS-driven hero content, while /events lists all events using server-side data fetching. Each event has its own dynamic page (/events/[slug]) with real-time content pulled from the CMS. The project emphasizes clean UI components, accessibility, responsiveness, modern Next.js architecture, and proper Git/GitHub documentation including a setup-ready README.",
  tech: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Headless CMS",
    "App Router",
    "Tailwind",
    "Server Components"
  ],
  github: "https://github.com/Solane-Hebo/Next.js_Sanity.io.git",
  role: "Frontend Developer",
  period: "Apr–May 2025",
  client: "KYH",
  lia: false,
  image: "/images/projects/Event.png"
},

{
  id: "task-portal",
  title: "Company Task Management Portal – Next.js 15, Auth & Firebase",
  description:
    "A full-stack task management portal where companies assign tasks, users see only their own tasks, and admins manage everything through a dashboard.",
  longDescription:
    "A full-stack application built with Next.js 15 that allows companies to assign and manage tasks. Users sign in through hosted authentication and only access their own tasks, while an administrator can create, assign and track tasks through a dedicated dashboard. The project uses Firebase as a BaaS for data storage, relations, authentication and real-time updates. Features include role-based access control, deadlines, task completion, real-time syncing via subscriptions, an admin column-view dashboard and basic unit tests for core logic and components. The UI is built with Tailwind and fully responsive.",
  tech: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Firebase",
    "Auth",
    "Tailwind",
    "Realtime Updates",
    "Unit Testing"
  ],
  github: "https://github.com/Solane-Hebo/Next.js__Firebase.git",
  role: "Fullstack Developer",
  period: "Apr–May 2025",
  client: "KYH",
  lia: false,
  image: "/images/projects/Portal.png",
  images: [
    "/images/projects/Portal.png",
    "/images/projects/portal2.png",
    "/images/projects/portal3.png",
  ],
},

{
  id: "ecommerce-mern",
  title: "Fullstack E-commerce Platform – MERN Stack",
  description:
    "A complete MERN-based e-commerce platform with product catalog, checkout flow, authentication and an admin dashboard.",
  longDescription:
    "A full e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). The project connects a custom backend API to a modern React frontend, delivering a responsive and secure shopping experience. Users can browse products, view details, filter by categories, add items to the cart and complete a full checkout flow with dynamic price calculation. Authentication includes registration, login and JWT-based access with protected routes. The admin dashboard includes full CRUD operations for products and order management. The backend uses bcrypt for password hashing and Bearer token authorization. The UI is designed with Tailwind CSS and fully responsive. The project includes a detailed README and API documentation and is deployed on Render.",
  tech: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Tailwind CSS",
    "REST API",
  ],
  link: "https://e-commerce-fullstack-mern1.onrender.com/",
  role: "Fullstack Developer",
  period: "Jan–Apr 2025",
  client: "KYH",
  // lia: false,
  // highlight: true,
  image: "/images/projects/E-commerce.png"
},



];
