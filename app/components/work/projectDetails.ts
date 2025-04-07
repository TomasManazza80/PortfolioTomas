import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Nam Ecommerce",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://indumentarianam.netlify.app/",
        image: "/proyectos/nam.png",
        available: true,
    },
    {
        id: 1,
        name: "Clínica Oftalmológica",
        description:
            "(En proceso)",
        technologies: [SiCplusplus, SiRust, SiNeovim],
        techNames: ["C++", "Rust", "Neovim"],
        techLinks: ["https://cplusplus.com/", "https://www.rust-lang.org/", "https://neovim.io/"],
        github: "https://github.com/TomasManazza80",
        demo: "https://drlorgelorenzo.netlify.app/",
        image: "/proyectos/clinica.png",
        available: true,
    },
    {
        id: 2,
        name: "Sistema de Gestion de Cuotas",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://www.linkedin.com/in/tomasmanazza/details/projects/",
        image: "/proyectos/sistemaCuotas.png",
        available: true,
    },
    {
        id: 3,
        name: "New Style Gym",
        description:
            "Eccommerce made with Next.js, Tailwind CSS and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
        demo: "https://newstylegym.netlify.app",
        image: "/proyectos/newStyle.png",
        available: true,
    },
];
