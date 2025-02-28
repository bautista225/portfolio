import { TECHNOLOGIES } from "./technologies";

export const PROJECTS = [
  {
    title: "Spotify Tools",
    description:
      "Aplicación web con gestión de estado que permite parametrizar listas de reproducción y visualizar estadísticas conectando tu perfil de Spotify.<br/>Ofrece opciones para ordenar playlists por distintos criterios, como fecha de adición o popularidad, así como obtener los artistas y canciones más escuchados para un periodo.",
    link: "https://bautista225.github.io/SpotifyTools/",
    github: "https://github.com/bautista225/SpotifyTools",
    image: "/projects/spotify-tools-shot.webp",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.Redux,
      TECHNOLOGIES.ReactRouter,
      TECHNOLOGIES.Bootstrap,
    ],
  },
  {
    title: "AI translator",
    description:
      "Aplicación web desarrollada con React y TypeScript que permite traducir texto a varios idiomas, incluyendo a emojis 🌟.<br/>Integra la API de Cohere para traducciones avanzadas y utiliza el motor de síntesis de voz del navegador para poder escuchar la pronunciación de la traducción.",
    link: "https://bautista225.github.io/ai-translator/",
    github: "https://github.com/bautista225/ai-translator",
    image: "/projects/ai-translator-shot.webp",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.TypeScript,
      TECHNOLOGIES.Bootstrap,
      TECHNOLOGIES.Cohere,
    ],
  },
  {
    title: "Tic Tac Toe",
    description:
      "Este SPA de React ofrece una experiencia completa del clásico juego de tres en raya.<br/>¡Desafía a tus amigos en modo para un jugador o para varios jugadores y consulta las puntuaciones en la tabla de clasificación!",
    link: "https://bautista225.github.io/tic-tac-toe/",
    github: "https://github.com/bautista225/tic-tac-toe",
    image: "/projects/tic-tac-toe-shot.webp",
    technologies: [
      TECHNOLOGIES.React,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Vite,
    ],
  },
  {
    title: "Wefinz",
    description:
      "Software ERP en la nube que permite a pequeñas y medianas empresas digitalizar sus finanzas y agilizar sus procesos de negocio.<br />Sus funcionalidades incluyen desde la digitalización de facturas hasta la presentación automatizada de impuestos directamente a la agencia tributaria.",
    link: "https://www.wefinz.com",
    github: "",
    image: "/projects/wefinz-shot.webp",
    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.JavaScript,
      TECHNOLOGIES.Bootstrap,
      TECHNOLOGIES.CSharp,
      TECHNOLOGIES.SQL,
      TECHNOLOGIES.NoSQL,
    ],
  },
];
