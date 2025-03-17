import BritishFlag from "../icons/BritishFlag.astro";
import SpanishFlag from "../icons/SpanishFlag.astro";
import {
  experienceGradiant,
  experienceIreneSolutions,
  experienceWefinz,
} from "./experiences";
import { intro } from "./intro";
import { navbar } from "./navbar";
import {
  projectAiTranslator,
  projectMeteo4Sport,
  projectSpotifyTools,
  projectTicTacToe,
  projectWefinz,
} from "./projects";

export type Language = {
  name: string;
  flagIcon: (_props: Record<string, any>) => any;
};

export const languages: Record<string, Language> = {
  en: { name: "English", flagIcon: BritishFlag },
  es: { name: "Español", flagIcon: SpanishFlag },
};

export const defaultLang = "en";

export const ui = {
  en: {
    "page.title": "Portfolio of Juan Bautista",
    "page.description":
      "Full-Stack web developer and an AI enthusiast. Specialized in creating unique web applications.",
    ...navbar.en,
    ...intro.en,
    "experiences.title": "Experience",
    experiences: [
      { ...experienceGradiant.en },
      { ...experienceWefinz.en },
      { ...experienceIreneSolutions.en },
    ],
    "projects.title": "Projects",
    "projects.codeButton": "Source code",
    "projects.previewButton": "Try it",
    projects: [
      { ...projectMeteo4Sport.en },
      { ...projectSpotifyTools.en },
      { ...projectAiTranslator.en },
      { ...projectTicTacToe.en },
      { ...projectWefinz.en },
    ],
    "footer.personName": "Juan Bautista",
    "footer.portfolioTechnologies1": "Developed with",
    "footer.portfolioTechnologies2": "and",
  },
  es: {
    "page.title": "Portfolio de Juan Bautista",
    "page.description":
      "Desarrollador web Full-Stack y apasionado por la IA. Especializado en crear aplicaciones web únicas.",
    ...navbar.es,
    ...intro.es,
    "experiences.title": "Experiencia laboral",
    experiences: [
      { ...experienceGradiant.es },
      { ...experienceWefinz.es },
      { ...experienceIreneSolutions.es },
    ],
    "projects.title": "Proyectos",
    "projects.codeButton": "Código fuente",
    "projects.previewButton": "Probar",
    projects: [
      { ...projectMeteo4Sport.es },
      { ...projectSpotifyTools.es },
      { ...projectAiTranslator.es },
      { ...projectTicTacToe.es },
      { ...projectWefinz.es },
    ],
    "footer.personName": "Juan Bautista",
    "footer.portfolioTechnologies1": "Desarrollado con",
    "footer.portfolioTechnologies2": "y",
  },
} as const;
