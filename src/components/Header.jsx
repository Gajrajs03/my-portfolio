import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 text-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}

        <div className="font-orbitron text-2xl font-bold text-[#d29aff]">
          Portfolio.dev
        </div>

        {/* Nav Links */}
        <ul className="font-orbitron hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a href="#hero" className="hover:text-pink-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#Resume" className="hover:text-pink-500 transition">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
