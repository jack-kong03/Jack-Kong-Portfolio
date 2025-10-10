import React from "react";
import profilePic from '../../assets/profile.jpg';
import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const ProgrammingAndSoftwareDevelopment = [
        "Python",
        "Java", 
        "C#",
    ];

    const AiAndDataScience = [
        "Python",
        "Pandas", 
        "NumPy",
        "Matplotlib",
        "Scikit-Learn",
        "TensorFlow",
    ];

    const WebDevelopment = [
        "Python", 
        "Django",
        "JavaScript", 
        "React",
        "HTML5", 
        "CSS3",
        "TailwindCSS",
        "SQL",
    ];

    const cloudAndDevOps = [
        "Microsoft Azure", 
        "Docker", 
        "Git", 
        "GitHub", 
        "CI/CD", 
        "mySQL"
    ];

    const toolsAndOthers = [
        "Tableau", 
        "Raspberry-Pi", 
        "MQTT", 
        "Node-RED", 
        "ubuntu"
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
                        A Passionate Developer with expertise in AI/ML, cloud computing, IoT, and full-stack development. 
                        I channel my experiences into developing innovative solutions that simplify processes, 
                        enhance user experiences, and deliver tangible impact.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Programming And Software Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {ProgrammingAndSoftwareDevelopment.map((tech, key) => (
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
                                {AiAndDataScience.map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-4">Web Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {WebDevelopment.map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {cloudAndDevOps.map((tech, key) => (
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
                            <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
                            <div className="flex flex-wrap gap-2">
                                {toolsAndOthers.map((tech, key) => (
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
        </div>
        </RevealOnScroll>
    </section>
};