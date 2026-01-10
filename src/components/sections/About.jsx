import React from "react";
import profilePic from "../../assets/profile.jpeg";
import cvPdf from "../../assets/cv.pdf";
import { RevealOnScroll } from "../RevealOnScroll";

// Map skill names to Simple Icons names and brand colors
const getIconUrl = (skillName) => {
  const iconMap = {
    "Python": { name: "python", color: "3776AB" },
    "Java": { name: "java", color: "ED8B00" },
    "C#": { name: "csharp", color: "239120" },
    "JavaScript": { name: "javascript", color: "F7DF1E" },
    "SQL": { name: "mysql", color: "4479A1" },
    "React": { name: "react", color: "61DAFB" },
    "Django": { name: "django", color: "092E20" },
    "Docker": { name: "docker", color: "2496ED" },
    "Node-RED": { name: "nodedotjs", color: "339933" },
    "Raspberry Pi": { name: "raspberrypi", color: "C51A4A" },
    "Arduino": { name: "arduino", color: "00979D" },
    "Microsoft Azure": { name: "microsoftazure", color: "0078D4" },
    "MySQL": { name: "mysql", color: "4479A1" },
    "TensorFlow": { name: "tensorflow", color: "FF6F00" },
    "PyTorch": { name: "pytorch", color: "EE4C2C" },
    "Pandas": { name: "pandas", color: "150458" },
    "NumPy": { name: "numpy", color: "013243" },
    "Scikit-Learn": { name: "scikitlearn", color: "F7931E" },
    "Tableau": { name: "tableau", color: "E97627" },
  };

  const iconData = iconMap[skillName] || {
    name: skillName.toLowerCase().replace(/\s+/g, ""),
    color: "6B7280",
  };
  return `https://cdn.simpleicons.org/${iconData.name}/${iconData.color}`;
};

export const About = () => {
  const ProgrammingLanguages = [
    "Python",
    "Java",
    "C#",
    "JavaScript",
    "SQL",
  ];

  const FrameworksAndTools = [
    "React",
    "Django",
    "Docker",
    "Node-RED",
    "Raspberry Pi",
    "Arduino",
  ];

  const CloudDataAndML = [
    "Microsoft Azure",
    "MySQL",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Tableau",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 bg-white relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-16 lg:gap-24 items-start">
            {/* Left: profile */}
            <div className="space-y-8">
              <div className="relative inline-flex">
                <img
                  src={profilePic}
                  alt="Jack Kong"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-3xl object-cover shadow-lg"
                />
              </div>

              <div className="space-y-3 text-base text-gray-600">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Profile
                </p>
                <p className="text-gray-900 font-medium">Jack Kong</p>
                <p className="text-gray-600">Junior Developer</p>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Leeds, UK
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Focus
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200">
                    Python
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200">
                    Cloud
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200">
                    IoT
                  </span>
                </div>
              </div>
            </div>

            {/* Right: narrative */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
               Who am I?
              </h2>

              <p>
                I'm a Computing (Smart Technologies) graduate driven by curiosity, problem-solving, and building things to make my everyday life easier.
              </p>
              <p>
                Previously worked as a Student Project Intern at{" "}
                <a
                  href="https://aquasensor.co.uk/"
                  className="underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  AquaSensor
                </a>
                , helping build cloud-connected IoT sensor units and data pipelines for real-time river water quality monitoring, improving data reliability and reducing ingestion errors by ~10%.
              </p>
              <p>
                In parallel, helped run the Software &amp; Computer Engineering
                Society as Development Team Officer, leading 15 events, weekly workshops,
                and contributions to the university SHU App.
              </p>
              <p>
                Currently looking for junior developer roles across software, cloud, or IoT where i can learn from experienced engineers, contribute to real-world systems, and continue growing as a developer.
              </p>

              {/* Skills summary */}
              <div className="space-y-4 mt-8 pt-8 border-t border-gray-200">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Skills
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                      {ProgrammingLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2"
                        >
                          <img
                            src={getIconUrl(lang)}
                            alt={`${lang} icon`}
                            className="w-4 h-4"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Frameworks & Tools</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                      {FrameworksAndTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2"
                        >
                          <img
                            src={getIconUrl(tool)}
                            alt={`${tool} icon`}
                            className="w-4 h-4"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Cloud, Data & ML</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                      {CloudDataAndML.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2"
                        >
                          <img
                            src={getIconUrl(skill)}
                            alt={`${skill} icon`}
                            className="w-4 h-4"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-200">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                Education
              </p>
              <div className="space-y-4 text-base text-gray-600">
                <div>
                  <p className="text-xl text-gray-900 font-semibold">
                    BSc Computing (Smart Technologies)
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Sheffield Hallam University
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  1st Class Honours Award
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    2022 – 2025
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      Artificial Intelligence and Machine Learning
                    </li>
                    <li>
                      Cloud-based systems
                    </li>
                    <li>
                      Integrated IoT Systems
                    </li>
                    <li>
                      Data Management & Databases
                    </li>
                    <li>
                      System Architectures & Design Principles
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xl text-gray-900 font-semibold">
                    CS50's Introduction to Programming with Python
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Harvard University (edX)
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-200">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.059 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                Extracurricular
              </p>
              <div className="space-y-4 text-base text-gray-600">
                <div>
                  <p className="text-xl text-gray-900 font-semibold">
                    Course Representative
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Computing (Smart Technologies)
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    2024 – 2025
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Served as course representative, acting as a bridge between students and faculty, advocating for student needs, and contributing to improvements in curriculum and learning experience.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xl text-gray-900 font-semibold">
                  Development Team Officer
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Software & Computer Engineering Society
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    2023 – 2025
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Led events and workshops for society members, and contributed to the development of the SHU society website.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xl text-gray-900 font-semibold">
                    Treasurer
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    East Asia Society
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    2023 – 2024
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Managed budgets with 100% accuracy, introduced improved financial tracking, and supported a committee that grew student engagement by 30% through cross-cultural events.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8 border border-gray-200 md:col-span-2">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Work Experience
              </p>
              <div className="space-y-4 text-base text-gray-600">
                <div>
                  <p className="text-xl text-gray-900 font-semibold">
                    Internship
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    AquaSensor
                  </p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    2023 – 2024
                  </p>
                  <ul className="space-y-2 text-sm">
                  <li>
    Worked in a small agile team to prototype and deploy cloud-connected in-river
    IoT sensor units, streaming secure, high-frequency water quality data to the
    cloud from <strong>3 deployed sensors</strong>.
  </li>
  <li>
    Helped build cloud data pipelines and a web dashboard for real-time river
    water quality monitoring, <strong>improving data reliability and reducing
    ingestion errors by ~10%</strong>.
  </li>
  <li>
    Contributed to dashboards and data visualisations processing
    <strong> hundreds of sensor readings per day</strong>, enabling partners to
    spot pollution incidents and track long-term river health.
  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="flex justify-center mt-16 items-center gap-2">
            <a
              href={cvPdf}
              download="Jack_Kong_CV.pdf"
              className="px-8 py-3 rounded-full border border-gray-300 text-gray-900 text-base font-medium hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              Download my CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};





