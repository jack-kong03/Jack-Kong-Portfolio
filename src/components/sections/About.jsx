import React from "react";
import profilePic from '../../assets/profile.jpg';
import AquaSensor from '../../assets/AquaSensor.jpg';
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
        "Bash"
    ];

    const FrameworksAndTools = [
        "Django",
        "React", 
        "Docker",
        "Git",
        "Tableau",
        "CI/CD",
        "NodeRED",
        "Raspberry Pi",
        "Arduino"
    ];

    const CloudPlatforms = [
        "Microsoft Azure",
        "MySQL",
    ];

    const AIandDataScience = [
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Matplotlib",
        "PyTorch"
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                    <div className="flex flex-col items-center mb-6">
                        <img 
                            src={profilePic} 
                            alt="Jack Kong" 
                            className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
                        />
                    </div>
                    <p className="text-gray-300 text-center mb-6">
                        Hi, I'm Jack, A First Class Honours Computing (Smart Technologies) Graduate at Sheffield Hallam University.</p>
                    <p className="text-gray-300 text-center mb-6">
                        I have previously interned as a Student Project Intern at AquaSensor, where I contributed to developing cloud-connected IoT sensor systems for real-time water quality monitoring in rivers and freshwater ecosystems.
                        </p> 
                    <p className="text-gray-300 text-center mb-6">
                        I was heavily involved in the Software & Computer Engineering Society at university where i was a development Team officer, working on various projects including the SHU university website, and also leading events and workshops for society members.
                        </p>   
                    <p className="text-gray-300 text-center mb-6">
                        Seeking a Junior Software developer or Cloud Developer role to leverage technical skills and collaborative problem-solving in innovative tech teams.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming And Software Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {ProgrammingLanguages.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0.2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}                  
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Ai & Data Science</h3>
                            <div className="flex flex-wrap gap-2">
                                {AIandDataScience.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0.2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frameworks & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {FrameworksAndTools.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0.2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {CloudPlatforms.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0.2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold text-2xl text-center"> 1st Class Graduate </h4>
                            <h4 className="font-semibold text-center"> @ <a href="https://www.shu.ac.uk/" className="text-red-900"> Sheffield Hallam </a><a href="https://www.shu.ac.uk/" className="text-[#7A003C]"> University </a></h4>
                            <h4 className="font-semibold text-center"> BSc Computing (Smart Technologies) </h4>
                            <h4 className="text-center"> 2022 - 2025 </h4>
                            <ul className="list-disc list-inside text-left">
                        <li>Artificial Intelligence & Machine Learning</li>
                        <li>Cloud-Based Systems</li>
                        <li>Integrated IoT Systems</li>
                        <li>Data Management & Databases</li>
                        <li>System Architectures & Design Principles</li>
                        <li>Development & Professional Computing Projects</li>
                       </ul>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold text-2xl text-center">Student Project Intern</h4>
                            <h4 className="font-semibold text-center"> @ <a href="https://aquasensor.co.uk/" className="text-blue-500">AquaSensor</a></h4>
                            <h4 className="text-center"> Nov 2023- Jun 2024 </h4>
                            <p className="text-center"> Built cloud-connected IoT sensor systems for real-time monitoring of water quality in rivers and freshwater ecosystems in a small agile team. </p>
                        </div>
                    <div className="flex flex-col items-center mb-6">
                        <img 
                            src={AquaSensor} 
                            alt="AquaSensor Dashboard" 
                            className="w-72 h-48 rounded-lg object-cover shadow-lg mb-4"
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
  <a
    href="https://drive.google.com/drive/folders/1UEO-HPkKuhUokIiSMWR0XZKBCGqhIzuV?usp=sharing"
    download="Jack_Kong_CV.pdf"
    className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
  >
    View my CV
  </a>
</div>
        </div>
        </RevealOnScroll>
    </section>
};