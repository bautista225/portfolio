import {
  experienceGradiant,
  experienceIreneSolutions,
  experienceWefinz,
} from "./experiences";
import { intro } from "./intro";
import { navbar } from "./navbar";
import {
  projectAiTranslator,
  projectSpotifyTools,
  projectTicTacToe,
  projectWefinz,
} from "./projects";

export const languages = {
  en: "English",
  es: "Español",
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
