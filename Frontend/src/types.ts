export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  highlight?: boolean;
  
  
  longDescription?: string;
  role?: string;
  period?: string; // t.ex. "Vår 2025"
  client?: string; // t.ex. "DIF.se"
  lia?: boolean;   // om det är LIA-projekt
  
  image?: string;
  images?: string[];
}



