import React from "react";
import profilePic from '../../assets/profile.jpg';
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
        "Adruino"
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
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <div className="flex flex-col items-center mb-6">
                        <img 
                            src={profilePic} 
                            alt="Jack Kong" 
                            className="w-50 h-50 rounded-full object-cover shadow-lg mb-4"
                        />
                    </div>
                    <p className="text-gray-300 text-center justify-center mb-6">
                        First Class Computing graduate with hands-on software engineering and cloud experience gained through academic and personal projects. 
                        Skilled in Python, Azure services, and AI/ML tools, with a proven ability to build scalable, data-driven applications. 
                        Seeking a Junior Software Engineer or Cloud Developer role to leverage technical skills and collaborative problem-solving in innovative tech teams.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming And Software Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {ProgrammingLanguages.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                   hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition">
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
                                                   hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition">
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
                                                   hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition">
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
                                                   hover:shadow-[0.2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all space-y-2">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li className="mb-2">
                            <strong>BSc (First Class Hons) Computing (Smart Technologies)</strong> - Sheffield Hallam University (2022 - 2025)
                        </li>
                       <li className="mb-2 font-bold">Relevant Coursework:</li>
                       <ul className="list-disc list-inside text-gray-300 ml-4">
                        <li>Artificial Intelligence & Machine Learning</li>
                        <li>Cloud-Based Systems</li>
                        <li>Integrated IoT Systems</li>
                        <li>Data Management & Databases</li>
                        <li>System Architectures & Design Principles</li>
                        <li>Development & Professional Computing Projects</li>
                       </ul>
                    </ul>
                </div>
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Industry Project Contributor at AQUA-Sensor (Jan - Jun 2024)</h4>
                            <p> Collaborated on the design and deployment of a cloud-based infrastructure for river data collection and visualization. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
                <a 
                href="/assets/JACK_KONG_CV.pdf" 
                download
                className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                     Download my CV
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};