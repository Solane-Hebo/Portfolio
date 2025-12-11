import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_#1e293b_0,_#020617_45%,_#000000_100%)] dark:text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Solane Hebo. Byggd med React, TypeScript &
          Tailwind.
        </div>
      </footer>
    </div>
  );
};

export default App;
