import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import imagen from '../../public/backgorund/tomas.png';
const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
  <div
    className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
  >
    {/* <Logo /> */}
    <h1
      style={{
        marginBottom: "50px",
        fontSize: "clamp(2.5rem, 6vw, 6rem)", // Ajuste dinámico
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      TOMÁS MANAZZA
    </h1>
    <h2
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.5rem)", // Tamaño responsivo
        color: "#555", // Contraste accesible
        textAlign: "center",
      }}
    >
      Full Stack Developer
    </h2>
  </div>
</div>
        </motion.section>
    );
};

export default Hero;
