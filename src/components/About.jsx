import React from 'react';
import profileImg from '../assets/profile.jpg'; // Replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#0d0b21] to-[#1a073e] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading + Subtext */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-purple-400 mb-3">
            About Me
          </h2>
          <p className="font-roboto text-purple-300 text-lg">
            Let me introduce myself
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Content Card */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.25)] p-8 md:p-12 hover:shadow-purple-500/30 transition-all duration-300"
          data-aos="zoom-in-up"
        >
          {/* Profile Image */}
          <div
            className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-purple-500 overflow-hidden shadow-md"
            data-aos="fade-right"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Info */}
          <div className="font-roboto md:w-2/3 text-left space-y-4" data-aos="fade-left">
            <p className="text-lg md:text-xl leading-relaxed">
              Hi, I'm <span className="text-purple-400 font-semibold">Gajraj Singh</span>, a B.Tech student at
              <span className="text-purple-300 font-medium"> Bundelkhand Institute of Engineering & Technology, Jhansi</span>,
              specializing in Electronics and Communication Engineering.
            </p>

            <p className="text-base md:text-lg">
              I’m currently exploring full-stack development, building cool projects like an <span className="text-purple-300 font-semibold">Amazon Clone</span> and an AI assistant named <span className="text-purple-300 font-semibold">‘Friday’</span>.
            </p>

            <p className="text-base md:text-lg">
              Apart from tech, I enjoy  drawing,  reading, and leveling up my public speaking skills. I’m a focused, consistent learner with a deep curiosity for innovation.
            </p>

            <p className="text-purple-400 font-semibold text-base md:text-lg">
               Career Goal: To become a full-stack developer and build impactful, futuristic software products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
