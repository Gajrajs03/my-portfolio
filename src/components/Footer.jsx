import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black relative z-10 py-8 shadow-inner">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 " />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white">

        {/* Left - Name */}
        <p className="text-sm text-gray-300 tracking-wide mb-4 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Gajraj Singh
          </span>{" "}
          | Built using React + Tailwind
        </p>

        {/* Right - Social icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Gajrajs03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gajraj-singh-3206aa294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gajraj1083@gmail.com"
            className="text-white hover:text-pink-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
