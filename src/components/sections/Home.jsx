import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white pt-24 pb-32"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Large headline */}
            <h1 className="apple-font text-6xl md:text-8xl lg:text-9xl text-gray-900 leading-[0.95] transform transition-transform duration-300 hover:scale-105 text-shadow-subtle">
              Jack{" "}
              <span className="text-gray-700 inline-block transition-all duration-300 hover:text-gray-900">Kong</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-600 max-w-2xl animate-slide-up-fade mt-4">
              Junior Software Developer - Full-Stack Development · Python · JavaScript · Cloud Computing · IoT · Machine Learning
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#projects"
                className="group px-8 py-3 rounded-full bg-gray-900 text-white text-base font-medium
                           hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                           active:scale-95 relative overflow-hidden"
              >
                <span className="relative z-10">View My Software Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-900 text-base font-medium
                           hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105
                           active:scale-95 hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
