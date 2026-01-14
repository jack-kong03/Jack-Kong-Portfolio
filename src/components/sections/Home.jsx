import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white pt-40 pb-32 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Main headline - Name as centerpiece */}
            <div>
              <h1 className="apple-font text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-gray-900 leading-[0.9] transform transition-transform duration-300 hover:scale-[1.02] text-shadow-subtle">
                Jack{" "}
                <span className="text-gray-700 inline-block transition-all duration-300 hover:text-gray-900">Kong</span>.
              </h1>
            </div>

            {/* Tagline - much smaller */}
            <div className="pt-1">
              <p className="text-xs md:text-sm lg:text-base font-normal text-gray-500 tracking-wider uppercase">
                Curious Developer. Problem Solver. Always Learning.
              </p>
            </div>

            {/* Divider line - smaller */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"></div>

            {/* Role description - smaller */}
            <div className="max-w-3xl space-y-2">
              <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-600">
                Junior Software Developer
              </p>
              <p className="text-xs md:text-sm lg:text-base font-normal text-gray-500 leading-relaxed">
                Full-Stack Development · Python · JavaScript · Cloud Computing · IoT · Machine Learning
              </p>
            </div>

            {/* CTAs - smaller */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a
                href="#projects"
                className="group px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium
                           hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                           active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  View My Projects
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#contact"
                className="group px-6 py-2.5 rounded-full border-2 border-gray-300 text-gray-900 text-sm font-medium
                           hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105
                           active:scale-95 hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>

            {/* Quick links / Scroll indicator - smaller */}
            <div className="pt-8 flex flex-col items-center gap-1.5 animate-bounce">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Scroll to explore</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
