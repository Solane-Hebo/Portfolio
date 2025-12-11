// src/hooks/useProjects.ts
import { useEffect, useState } from "react";
import { projects as staticProjects } from "../data/projects";
import type { Project } from "../types";
import { USE_API } from "../config";

type Status = "idle" | "loading" | "success" | "error";

interface UseProjectsResult {
  data: Project[] | null;
  status: Status;
  error: string | null;
}

export const useProjects = (): UseProjectsResult => {
  const [data, setData] = useState<Project[] | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setStatus("loading");
        setError(null);

        if (USE_API) {
        
          await new Promise((resolve) => setTimeout(resolve, 500));
          setData(staticProjects);
          setStatus("success");
          return;
        }

        // 🔹 Riktig backend (framtiden)
        const res = await fetch(`/api/projects`);
        if (!res.ok) {
          throw new Error("Kunde inte hämta projekt");
        }
        const json = (await res.json()) as Project[];
        setData(json);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setError("Kunde inte ladda projekt just nu.");
        setStatus("error");
      }
    };

    fetchProjects();
  }, []);

  return { data, status, error };
};
