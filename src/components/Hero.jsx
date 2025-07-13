import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/HeroBackground.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="font-orbitron text-5xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg ml-2">
          Hi, I'm <span className="text-cyan-400">Gajraj Singh</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-purple-200 ml-2">
          I’m a{" "}
          <span className="font-orbitron text-cyan-400 font-semibold">
            <Typewriter
              words={["Frontend Developer", "ECE Student", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h2>

        <p className="font-roboto text-lg text-gray-200 mb-10  ml-2 mx-auto">
          ECE Undergrad. at BIET Jhansi
        </p>

        <div className="font-orbitron flex flex-col sm:flex-row gap-4 ml-2">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-400 transition duration-300"
          >
            <FaDownload />
            Download CV
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-400 transition duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-6 ml-4 ">
          <a
            href="https://github.com/Gajrajs03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition-all hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gajraj-singh-3206aa294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition-all hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gajraj_singh_08/profilecard/?igsh=MTUwZ2UxZXpqemx1eg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-white transition-all hover:scale-110 duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
