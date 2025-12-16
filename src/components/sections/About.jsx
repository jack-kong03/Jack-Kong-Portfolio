import React from "react";
import profilePic from "../../assets/profile.jpg";
import AquaSensor from "../../assets/AquaSensor.jpg";
import AquaSensorLogo from "../../assets/AquaSensorLogo.jpeg";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const ProgrammingLanguages = [
    "Python",
    "Java",
    "C#",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Bash",
  ];

  const FrameworksAndTools = [
    "Django",
    "React",
    "Docker",
    "Git",
    "Tableau",
    "CI/CD",
    "Node-RED",
    "Raspberry Pi",
    "Arduino",
  ];

  const CloudPlatforms = ["Microsoft Azure", "MySQL"];

  const AIandDataScience = [
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Matplotlib",
    "PyTorch",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-slate-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Main about card */}
          <div className="rounded-xl p-8 border border-white/10 bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
            <div className="flex flex-col items-center mb-6">
              <img
                src={profilePic}
                alt="Jack Kong"
                className="w-52 h-52 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg mb-4"
              />
            </div>

            <p className="text-gray-300 text-center mb-4 max-w-2xl mx-auto">
              Hi, I'm Jack, a First Class Honours Computing (Smart Technologies)
              graduate from Sheffield Hallam University.
            </p>
            <p className="text-gray-300 text-center mb-4 max-w-3xl mx-auto">
              I previously worked as a Student Project Intern at AquaSensor,
              developing cloud-connected IoT sensor systems for real-time water
              quality monitoring in rivers and freshwater ecosystems.
            </p>
            <p className="text-gray-300 text-center mb-4 max-w-3xl mx-auto">
              I was heavily involved in the Software &amp; Computer Engineering
              Society, serving as Development Team Officer and leading events
              and workshops, including work on the SHU society website.
            </p>
            <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
              Currently seeking a Junior Software Developer or Cloud Developer
              role where I can apply my technical skills and collaborative
              problem-solving in innovative tech teams.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="rounded-xl p-6 bg-slate-900/60 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming &amp; Development
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {ProgrammingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-slate-900/60 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">AI &amp; Data Science</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {AIandDataScience.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-slate-900/60 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks &amp; Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {FrameworksAndTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-slate-900/60 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {CloudPlatforms.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border border-white/10 bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <div className="space-y-3 text-gray-300">
                <h4 className="font-semibold text-2xl text-center">
                  1st Class Graduate
                </h4>
                <h4 className="font-semibold text-center">
                  @{" "}
                  <a
                    href="https://www.shu.ac.uk/"
                    className="text-[#7A003C]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sheffield Hallam University
                  </a>
                </h4>
                <h4 className="font-semibold text-center">
                  BSc Computing (Smart Technologies)
                </h4>
                <h4 className="text-center">2022 – 2025</h4>
                <ul className="list-disc list-inside text-left mt-2 space-y-1">
                  <li>Artificial Intelligence &amp; Machine Learning</li>
                  <li>Cloud-Based Systems</li>
                  <li>Integrated IoT Systems</li>
                  <li>Data Management &amp; Databases</li>
                  <li>System Architectures &amp; Design Principles</li>
                  <li>Development &amp; Professional Computing Projects</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex flex-col items-center">
                  <h4 className="font-semibold text-2xl text-center">
                    Student Project Intern
                  </h4>
                  <h4 className="font-semibold text-center">
                    @{" "}
                    <a
                      href="https://aquasensor.co.uk/"
                      className="text-blue-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AquaSensor
                    </a>
                  </h4>
                  <div className="mt-3 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 px-3 py-2">
  <img
    src={AquaSensorLogo}
    alt="AquaSensor logo"
    className="h-8 object-contain"
  />
</div>


                  <h4 className="text-center mt-2">Nov 2023 – Jun 2024</h4>
                  <ul className="mt-3 space-y-1 text-center text-sm text-gray-300">
  <li>Worked in a small agile team to prototype and deploy in‑river sensor units streaming secure, high‑frequency water quality data to the cloud.</li>
  <li>Contributed to the web dashboard and data visualisations used by partners to spot pollution incidents and track long‑term river health.</li>
  <li>Helped test and validate sensor data, investigating anomalies and supporting real‑world deployments with UK rivers and water-sector partners.</li>
</ul>

                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={AquaSensor}
                    alt="AquaSensor Dashboard"
                    className="w-72 h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CV button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://drive.google.com/drive/folders/1UEO-HPkKuhUokIiSMWR0XZKBCGqhIzuV?usp=sharing"
              className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View my CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
