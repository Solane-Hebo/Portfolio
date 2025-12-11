import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "dif-ticketing",
    title: "Biljettsystem för DIF (LIA-projekt)",
    description:
      "Modernt flöde för att välja matcher, platser och köpa biljetter – med fokus på tydlighet, mobilanpassning och konvertering.",
    longDescription:
      "Under min LIA på DIF.se har jag arbetat med ett biljettsystem där användaren kan välja matcher, biljettyper och genomföra köp. Fokus har legat på tydlig struktur, mobilanpassning, rena komponenter och att göra flödet så friktionsfritt som möjligt.",
    tech: ["React", "TypeScript", "Tailwind", "REST API"],
    highlight: true,
    role: "Frontendutvecklare (LIA)",
    period: "Vår 2025",
    client: "DIF.se",
    lia: true,
  },
  {
    id: "stayeasy",
    title: "StayEasy – Fullstack Airbnb-inspirerad app",
    description:
      "Fullstack webbapplikation inspirerad av Airbnb, byggd med React, TypeScript, Node.js, Express och MongoDB. Användare kan söka boenden, boka och hantera sina listningar.",
    longDescription:
      "StayEasy är en fullstack webbapplikation inspirerad av Airbnb. Frontend är byggd med React och TypeScript, Vite och Tailwind, och innehåller sökflöde (plats, datum, gäster), resultatsida med filtrering, detaljsida för boende, bokningsflöde med validering, inloggning/registrering, vy för mina bokningar och en adminpanel för att skapa, uppdatera och ta bort boenden. Backend är byggd i Node.js, Express och TypeScript med MongoDB (Mongoose) som databas. Projektet använder JWT-baserad autentisering, tydlig datamodellering, validering, felhantering och ett REST-API som kopplar ihop frontend och backend. Projektet har stärkt mina kunskaper inom fullstackutveckling, API-design, datamodeller och integration mellan klient och server.",
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
    // Lägg in rätt GitHub-länk här:
    // todo deployar:
    // link: "https://stayeasy.yourdomain.com",
    // highlight: true,
    role: "Fullstackutvecklare",
    period: "Okt–Nov 2025",
    client: "KYH (skolprojekt)",
    // lia: false,
  github: "https://github.com/Solane-Hebo/Vintage-Resorts.git",
  image: "/images/projects/Vintage Resort.png",
},

{
  id: "forum-app",
  title: "Online Forum – Gruppprojekt + individuell vidareutveckling",
  description:
    "Forumapplikation byggd i React och TypeScript med autentisering, trådar, kommentarer, moderatorroller och avancerad logik.",
  longDescription:
    "Projektet startade som ett grupparbete där vi byggde grunden till ett forum med React och TypeScript. Efter gruppfasen fortsatte jag projektet själv i ett eget repo och utökade det till en fullständig applikation med strikt TypeScript-arkitektur och modulära komponenter. Funktioner inkluderar trådskapande, kommentarsflöden, inloggning, låsta trådar, Q&A-läge där kommentarer kan markeras som svar, moderatorbehörigheter, tags och filtrering, nested replies, innehållsfiltrering samt stöd för annons-trådar med klickspårning.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Context API",
    "Custom Hooks",
    "LocalStorage Auth",
  ],
  github: "https://github.com/Solane-Hebo/typeScript-vite-react.git",
  role: "Frontendutvecklare",
  period: "Aug–Sep 2025",
  client: "Skolprojekt / Individuell vidareutveckling",
  lia: false,
  image: "/images/projects/Forum2.png",
},

{
  id: "event-cms",
  title: "Eventwebb med Headless CMS (Next.js 15)",
  description:
    "Responsiv eventwebb där allt innehåll hämtas dynamiskt från ett Headless CMS. Byggd med Next.js 15 och App Router.",
  longDescription:
    "Ett skolprojekt där jag byggde en fullständig eventwebb med Next.js 15, App Router och ett Headless CMS. Jag designade CMS-scheman för strukturerat innehåll (titel, beskrivning, datum, bild, plats) och implementerade dynamiska sidflöden. Förstasidan visar CMS-styrd hero-sektion och /events listar alla event via server-side data fetching. Varje event har en egen dynamisk sida (/events/[slug]) med detaljer hämtade från CMS. Projektet fokuserar på modern Next.js-arkitektur, responsiv design, tillgänglighet och tydlig komponentstruktur. README och GitHub-dokumentation ingår.",
  tech: [
    "Next.js 15",
    "React",
    "TypeScript",
    "Headless CMS",
    "App Router",
    "Tailwind",
    "Server Components"
  ],
  github: "https://github.com/DITT-REPO-HÄR",
  role: "Frontendutvecklare",
  period: "Apr–Maj 2025",
  client: "KYH",
  lia: false,
  image: "/images/projects/Event.png"
},
{
  id: "task-portal",
  title: "Företagsportal för uppgiftshantering – Next.js 15, Auth & Firebase",
  description:
    "Fullstack-portal där företag kan tilldela, hantera och följa upp uppgifter. Med autentisering, roller, realtid och adminpanel.",
  longDescription:
    "Ett fullstackprojekt byggt med Next.js 15 där företag kan skapa och hantera arbetsuppgifter. Inloggade användare ser endast sina egna uppgifter, medan administratörer kan skapa och tilldela uppgifter via en överskådlig dashboard. Projektet använder Firebase som BaaS för datalagring, relationer, autentisering och realtidsuppdateringar. Funktioner inkluderar rollbaserad åtkomst, deadlines, uppgiftsstatus, direktuppdateringar via subscriptions, admin-vy i kolumnlayout samt grundläggande enhetstester för centrala komponenter. UI är byggt med Tailwind och är mobilanpassat.",
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
  role: "Fullstackutvecklare",
  period: "Apr–Maj 2025",
  client: "KYH",
  lia: false,
  image: "/images/projects/Portal.png"
},

{
  id: "ecommerce-mern",
  title: "Fullstack E-handelsplattform – MERN Stack",
  description:
    "Komplett e-handel byggd med MERN-stacken med produktkatalog, checkout, autentisering och adminpanel.",
  longDescription:
    "En fullständig e-handelsapplikation utvecklad med MERN-stacken (MongoDB, Express, React, Node.js) där frontend och backend är helt egenbyggda och kopplade via ett REST-API. Användare kan bläddra i produkter, filtrera efter kategori, visa detaljer, lägga produkter i kundvagnen och genomföra ett komplett checkout-flöde med dynamisk prisberäkning. Systemet har autentisering med registrering, inloggning och JWT-baserad tokenhantering samt skyddade routes. Adminpanelen möjliggör full CRUD för produkter och orderhantering. Backend använder bcrypt för lösenordshashning, Bearer tokens för authorization och tydlig datamodellering. UI är responsivt och byggt med Tailwind CSS. Projektet innehåller README, API-dokumentation och deployment via Render.",
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
  role: "Fullstackutvecklare",
  period: "Jan–Apr 2025",
  client: "KYH",
  lia: false,
  // highlight: true,
  image: "/images/projects/E-commerce.png"
},

];
