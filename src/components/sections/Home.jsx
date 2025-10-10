import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">   
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Jack Kong
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I’m a software developer with most experience in smart computing, with expertise in integrated hardware, software, and network technologies. 
                    I have a strong background in building innovative smart systems for real-world applications
                </p>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Dreaming up cool ideas and making them come true is where my passion lies. 
                    I am enthusiastic about building tools that help myself and others to be more productive and enjoy the process of crafting. 
                    You can find my full projects list here.
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
