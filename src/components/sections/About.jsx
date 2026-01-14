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
    "Git",
    "HTML/CSS",
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
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16 items-start">
            {/* Left: profile */}
            <div className="space-y-8">
              <div className="relative inline-flex group">
                <img
                  src={profilePic}
                  alt="Jack Kong"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-3xl object-cover shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3 text-base md:text-lg text-gray-600">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Profile
                </p>
                <p className="text-gray-900 font-bold text-lg md:text-xl">Jack Kong</p>
                <p className="text-gray-600 font-medium">Junior Developer</p>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Leeds, UK
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Focus
                </p>
                <div className="flex flex-wrap gap-2 text-sm md:text-base text-gray-700 font-medium">
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
            <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-600">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 text-shadow-subtle">
               Who am I?
              </h2>

              {/* Introduction with icon */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-teal-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                </div>
                <p className="font-normal flex-1">
                  I'm a Computing (Smart Technologies) graduate with expertise in software development, programming, and system design. Skilled in version control (Git), testing methodologies, debugging, code review, and collaborative development. Driven by curiosity, problem-solving, and building scalable applications to make everyday life easier.
                </p>
              </div>

              {/* Work experience with icon */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-cyan-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="font-normal">
                    Previously worked as a Student Project Intern at{" "}
                    <a
                      href="https://aquasensor.co.uk/"
                      className="underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AquaSensor
                    </a>
                    , developing cloud-connected IoT sensor units and building robust data pipelines using Python, Azure cloud services, and database management for real-time river water quality monitoring. Applied software engineering best practices including version control (Git), code review, testing, debugging, and documentation.
                  </p>
                  
                  {/* Pull-quote for key achievement */}
                  <div className="relative pl-6 border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-50 to-transparent py-4 rounded-r-lg">
                    <svg className="absolute top-4 left-2 w-6 h-6 text-cyan-400 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                    </svg>
                    <p className="text-lg md:text-xl font-semibold text-gray-900 italic pl-6">
                      Improved data reliability and reduced ingestion errors by <span className="text-cyan-600 not-italic">~10%</span> through code optimization, error handling, and systematic problem-solving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leadership with icon */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-teal-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.059 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                </div>
                <p className="font-normal flex-1">
                  In parallel, helped run the Software &amp; Computer Engineering
                  Society as Development Team Officer, leading <span className="font-semibold text-gray-900">15 events</span>, weekly programming workshops on software development fundamentals,
                  and contributing to full-stack web development for the university SHU App using modern web technologies including HTML, CSS, JavaScript, and React.
                </p>
              </div>

              {/* Future goals with icon */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-cyan-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m4.5 0a12.06 12.06 0 0 0 3.478-.397M15.75 15.75a4.5 4.5 0 0 1-3 0M4.867 19.125h.008v.008h-.008v-.008Zm-1.125 0h.008v.008H3.742v-.008Zm2.25 0h.008v.008h-.008v-.008Zm2.25 0h.008v.008h-.008v-.008Zm-4.5-1.5h.008v.008h-.008v-.008Zm1.125 0h.008v.008H3.742v-.008Zm2.25 0h.008v.008h-.008v-.008Zm2.25 0h.008v.008h-.008v-.008Zm-4.5-3h.008v.008h-.008v-.008Zm1.125 0h.008v.008H3.742v-.008Zm2.25 0h.008v.008h-.008v-.008Zm2.25 0h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                </div>
                <p className="font-normal flex-1">
                  Currently seeking junior software developer roles in full-stack development, backend engineering, cloud computing, or IoT where I can collaborate with experienced engineers, contribute to production systems, and continue advancing my software engineering skills.
                </p>
              </div>

              {/* Skills summary */}
              <div className="space-y-4 mt-8 pt-8 border-t border-gray-200">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Skills
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                      {ProgrammingLanguages.map((lang) => (
                  <span
                        key={lang}
                        className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-gray-200 hover:shadow-md cursor-default"
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
                          className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-gray-200 hover:shadow-md cursor-default"
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
                          className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-gray-200 hover:shadow-md cursor-default"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16 lg:mt-20">
            <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                Education
              </p>
              <div className="space-y-4 text-base md:text-lg text-gray-600">
                <div>
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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
                  <ul className="space-y-2 text-sm md:text-base font-normal">
                    <li>
                      Artificial Intelligence and Machine Learning (AI/ML)
                    </li>
                    <li>
                      Cloud Computing & Cloud-based Systems (Azure, AWS)
                    </li>
                    <li>
                      Integrated IoT Systems & Embedded Systems
                    </li>
                    <li>
                      Data Management, Database Design & SQL
                    </li>
                    <li>
                      Software Architecture, System Design & Design Patterns
                    </li>
                    <li>
                      Object-Oriented Programming (OOP) & Software Engineering
                    </li>
                    <li>
                      Version Control (Git), Testing, Debugging & Code Review
                    </li>
                    <li>
                      Web Development (HTML, CSS, JavaScript, React)
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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

            <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.059 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                Extracurricular
              </p>
              <div className="space-y-4 text-base md:text-lg text-gray-600">
                <div>
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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
                  <p className="text-sm md:text-base text-gray-600 mt-2 font-normal">
                    Served as course representative, acting as a bridge between students and faculty, advocating for student needs, and contributing to improvements in software engineering curriculum and learning experience.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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
                  <p className="text-sm md:text-base text-gray-600 mt-2 font-normal">
                    Led programming events and software development workshops for society members, and contributed to full-stack web development of the SHU society website using modern web technologies and version control (Git).
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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
                  <p className="text-sm md:text-base text-gray-600 mt-2 font-normal">
                    Managed budgets with 100% accuracy, introduced improved financial tracking, and supported a committee that grew student engagement by 30% through cross-cultural events.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 md:p-8 border border-gray-200 md:col-span-2 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Work Experience
              </p>
              <div className="space-y-4 text-base md:text-lg text-gray-600">
                <div>
                  <p className="text-2xl md:text-3xl text-gray-900 font-bold">
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
                  <ul className="space-y-2 text-sm md:text-base font-normal">
                  <li>
    Worked in a small agile development team using Scrum methodology to prototype and deploy cloud-connected in-river
    IoT sensor units, implementing secure API integrations and streaming high-frequency water quality data to Azure cloud from <strong>3 deployed sensors</strong>.
  </li>
  <li>
    Developed cloud data pipelines using Python and Azure services, and built responsive web dashboards with real-time data visualization for river
    water quality monitoring. Applied software engineering principles including error handling, testing, and code optimization, <strong>improving data reliability and reducing
    ingestion errors by ~10%</strong>.
  </li>
  <li>
    Contributed to full-stack web development, creating interactive dashboards and data visualisations processing
    <strong> hundreds of sensor readings per day</strong>. Implemented database queries and data processing algorithms, enabling partners to
    spot pollution incidents and track long-term river health through data-driven insights.
  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="flex justify-center mt-12 md:mt-16 items-center gap-2">
            <a
              href={cvPdf}
              download="Jack_Kong_CV.pdf"
              className="group px-8 py-3 rounded-full border-2 border-gray-300 text-gray-900 text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Download my CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 relative z-10 transform group-hover:translate-y-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};





