import React from "react";

const projects = [
  {
    title: "AI Assistant – Friday",
    image: "/Project_2.jpg", // replace with your image path
    description: "An AI-powered assistant built with Python and Node.js to help with automation tasks.",
  },
  {
    title: "Amazon Clone",
    image: "/Project_1.png", // replace with your image path
    description: "E-commerce frontend clone using React and Tailwind with cart, product, and responsive UI.",
  },
  {
    title: "Portfolio Website",
    image: "/Project_3.png", // replace with your image path
    description: "Dark-themed responsive portfolio using React, Tailwind, and AOS animation.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0d0b21] to-[#1a073e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg border border-purple-700 bg-white/5 backdrop-blur-md"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <h3 className="text-lg font-bold text-purple-300">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
