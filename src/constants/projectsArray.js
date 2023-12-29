import pokedex from "../assets/images/project_pokedex.png";
import taskit from "../assets/images/project_taskit.png";
import trivia from "../assets/images/project_trivia.png";
import room3d from "../assets/images/project_3droom.png";

export const projectsArray = [
  {
    id: 0,
    title: "Pokedex App",
    image: pokedex,
    description:
      "Built a React-based Pokedex app showcasing Pokemon data. Users can easily explore detailed information about different species, demonstrating my React skills and UI/UX design.",
    stack: ["React ", "HTML ", "CSS ", "Vercel "],
    links: {
      github: "https://github.com/Zivgl66/PokedexReact",
      live: "https://pokedex-zivgl66.vercel.app/",
    },
  },
  {
    id: 1,
    title: "TaskIt Mobile App",
    image: taskit,
    description:
      "Created a React Native task reminder app for streamlined organization, featuring reminders and task management, showcasing mobile development expertise.",
    stack: ["React-Native ", "React ", "HTML ", "CSS ", "Expo-Go "],
    links: {
      github: "https://github.com/Zivgl66/TaskIt",
      live: "https://task-it-zivgl66.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Trivia Web Game",
    image: trivia,
    description:
      "Developed a trivia game web app using React and Node.js, offering engaging quizzes, showcasing interactive UI, and demonstrating proficiency in full-stack development.",
    stack: ["React ", "Node.js ", "MongoDB ", "HTML ", "CSS ", "Socket.io "],
    links: {
      github: "https://github.com/Zivgl66/Trivia-Backend",
      live: "www.google.com",
    },
  },
  {
    id: 3,
    title: "3D Room Portfolio",
    image: room3d,
    description:
      "Crafted a stunning 3D room portfolio website using Vite, Blender, and Three.js. Showcasing immersive designs, interactive elements, and technical skills in 3D web development.",
    stack: ["Vite ", "Three.js ", "Blender ", "HTML ", "CSS ", "Vercel "],
    links: {
      github: "https://github.com/Zivgl66/Portfolio-Room3D",
      live: "https://portfolio-room3d.vercel.app/",
    },
  },
];
