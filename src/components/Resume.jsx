import React from "react";

const Resume = () => {
  return (
    <section
      id="Resume"
      className="py-20 px-6 bg-gradient-to-b from-[#0d0b21] to-[#1a073e] text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="font-orbitron text-4xl font-bold text-purple-400 text-center mb-16">
          Resume
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE – EDUCATION TIMELINE */}
          <div>
            <h3 className="font-orbitron text-2xl font-semibold text-pink-400 mb-6">
              Education
            </h3>
            <ol className="relative border-l-4 border-purple-500 ml-4">
              <li className="mb-10 ml-6">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5"></div>
                <h4 className="text-xl font-bold text-purple-300">
                  B.Tech – Electronics & Communication
                </h4>
                <p className="font-orbitron text-sm text-gray-400">BIET Jhansi</p>
                <p className="font-orbitron text-sm text-gray-500">2023 – 2026 | CGPA: 7.60</p>
              </li>

              <li className="mb-10 ml-6">
                <div className="absolute -left-[9px] top-[115px] w-4 h-4 bg-purple-500 rounded-full"></div>
                <div>
                  <h4 className="text-purple-300 font-bold text-lg">
                    Senior Secondary (12th)
                  </h4>
                  <p className="font-orbitron text-sm text-gray-300">2020 – 2021</p>
                </div>
              </li>

              <li className="ml-6">
                <div className="absolute -left-[9px] top-[200px] w-4 h-4 bg-purple-500 rounded-full"></div>
                <div>
                  <h4 className="text-purple-300 font-bold text-lg">
                    High School (10th)
                  </h4>
                  <p className="font-orbitron text-sm text-gray-300">2018 – 2019</p>
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-orbitron text-2xl font-semibold text-yellow-400 mb-4">
              Skills
            </h3>

            {/* Frontend Skills */}
            <div>
              <p className="font-semibold text-yellow-300 mb-2">Frontend</p>
              <div className="font-orbitron flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-yellow-500 px-3 py-1 rounded-full text-sm text-yellow-200"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Programming Languages */}
            <div>
              <p className="font-semibold text-yellow-300 mb-2">
                Programming Languages
              </p>
              <div className="font-orbitron flex flex-wrap gap-2 mb-4">
                {["C", "C++","Python"].map((lang) => (
                  <span
                    key={lang}
                    className="bg-white/5 border border-yellow-500 px-3 py-1 rounded-full text-sm text-yellow-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="font-semibold text-yellow-300 mb-2">Tools & Tech</p>
              <div className="font-orbitron flex flex-wrap gap-2">
                {["Git", "Canva", "Premiere Pro", "VS Code"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-white/5 border border-yellow-500 px-3 py-1 rounded-full text-sm text-yellow-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-orbitron text-2xl font-semibold text-green-400 mb-4">
              Certifications
            </h3>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-500 shadow-md">
              <h4 className="text-lg font-bold text-green-300">
                Web Development – Udemy
              </h4>
              <p className="font-orbitron text-sm text-gray-400">Issued: August 2024</p>
              <p className="text-sm mt-2">
                HTML, CSS, JavaScript.
              </p>

              <h4 className="text-lg font-bold text-green-300">
                Expert Lecture on Electric Cables and Motors – BIS
              </h4>
              <p className="font-orbitron text-sm text-gray-400">Issued: August 2024</p>
              <p className="text-sm mt-2">
                HTML, CSS, JavaScript.
              </p>
              
            </div>
              



          </div>

          {/* RIGHT SIDE – EXPERIENCE, CERTIFICATIONS, SKILLS */}
          <div className="space-y-10">
            {/* Experience */}
            <div>
              <h3 className="font-orbitron text-2xl font-semibold text-blue-400 mb-4">
                Experience
              </h3>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-blue-500 shadow-md">
                <h4 className="text-lg font-bold text-blue-300">
                  BSNL Internship
                </h4>
                <p className="font-orbitron text-sm text-gray-400">June – July 2024</p>
                <p className="text-sm mt-2 text-gray-300">
                  Learned telecom switching, basic networking, and real-world
                  communication systems.
                </p>
              </div>
            </div>

            {/* Skills */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
