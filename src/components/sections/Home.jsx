import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Jack Kong
          </h1>

          {/* Role + core stack */}
          <p className="text-gray-300 text-xl mb-2">
            Junior Developer · Python · Cloud · IoT
          </p>

          {/* Experience + degree grouped */}
          <div className="text-gray-400 text-lg mb-8 space-y-2 max-w-xl mx-auto">
            <p>
              Built cloud-connected IoT sensor systems for real-time river water
              quality monitoring @ AquaSensor Ltd
            </p>
            <p>
              1st Class Computing (Smart Technologies) graduate @ Sheffield
              Hallam University
            </p>
          </div>

          {/* CTAs */}
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded font-medium transition 
                         relative overflow-hidden hover:-translate-y-0.5 
                         hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/60 text-blue-400 px-6 py-3 rounded font-medium 
                         transition-all duration-200 hover:-translate-y-0.5 
                         hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
