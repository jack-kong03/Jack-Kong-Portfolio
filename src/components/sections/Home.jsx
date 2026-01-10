import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white pt-20"
    >
      <RevealOnScroll>
        <div className="relative z-10 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            {/* Large headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-gray-900 tracking-tight leading-[1.05]">
              Jack{" "}
              <span className="text-gray-600">Kong</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-2xl">
              Junior Developer - Python · Cloud · IoT
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gray-900 text-white text-base font-medium
                           hover:bg-gray-800 transition-all duration-300"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-gray-300 text-gray-900 text-base font-medium
                           hover:bg-gray-50 transition-all duration-300"
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
