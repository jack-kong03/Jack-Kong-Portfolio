import { RevealOnScroll } from "../RevealOnScroll";

export const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center py-32 bg-white relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label + heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4 text-shadow-subtle">
            Blog
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A space for technical write-ups, software engineering insights, and lessons learned while
            building full-stack applications, learning new programming languages, and growing as a junior software developer in the tech industry.
          </p>
        </div>

        {/* Blog posts container */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Blog post */}
        <article className="group rounded-3xl bg-gray-50 border border-gray-200 p-8 md:p-10 space-y-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Post #1
            </p>
            <span className="inline-flex items-center text-sm text-gray-600 rounded-full bg-white border border-gray-300 px-4 py-1.5">
              08/01/2026
            </span>
          </div>

          <div className="space-y-6 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The story so far...
              </h3>
            </div>

            <div className="prose prose-gray max-w-none space-y-4 text-sm md:text-base font-normal text-gray-700 leading-relaxed">
              <p>
                Hi, I'm Jack.
              </p>
              <p>
                This is my corner of the internet. A place to think in public, document what I'm building, and leave trails of ideas I might return to later. It's less a polished portfolio and more a living notebook.
              </p>
              <p>
                I've graduated with a First Class degree in Computing, specializing in software development, programming, and system design. I'm drawn to the process of solving complex problems with technology—breaking things down, exploring trade-offs, applying software engineering principles, and turning rough ideas into scalable systems that actually work. The satisfaction is in the iteration, not the finish line.
              </p>
              <p>
                I've built and worked on projects across full-stack development, backend engineering, data science, machine learning, automation, and cloud computing, but I keep things intentionally loose here. This site isn't a catalogue or a highlight reel. It's a space for coding experiments, technical insights, and lessons learned while developing software applications.
              </p>
              <p>
                I believe the best way to learn software development is by building real-world applications and applying programming best practices, so many of the projects here are based on actual problems I've faced or technical challenges I've wanted to explore using modern development tools and frameworks.
              </p>
            </div>
          </div>
        </article>

        {/* Blog post #2 */}
        <article className="group rounded-3xl bg-gray-50 border border-gray-200 p-8 md:p-10 space-y-6 mt-6 md:mt-8 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Post #2
            </p>
            <span className="inline-flex items-center text-sm text-gray-600 rounded-full bg-white border border-gray-300 px-4 py-1.5">
              10/01/2026
            </span>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://developer.apple.com/assets/elements/icons/swift/swift-64x64.png"
                alt="Swift logo"
                className="w-6 h-6 flex-shrink-0"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                2026 Apple Swift Student Challenge 
              </h3>
            </div>

            <div className="prose prose-gray max-w-none space-y-4 text-sm md:text-base font-normal text-gray-700 leading-relaxed">
              <p>
                I'm excited to share that I'll be participating in the 2026 Apple Swift Student Challenge!
              </p>
              <p>
                This is an incredible opportunity to challenge myself, learn from the best, and connect with other passionate software developers in the Apple ecosystem. Swift programming language has always fascinated me with its modern syntax, safety features, object-oriented programming principles, and the powerful iOS development frameworks that come with it.
              </p>
              <p>
                I'm looking forward to pushing my programming skills further, exploring new iOS development patterns, mobile app development best practices, and building something meaningful using software engineering principles. The competition environment always brings out the best in problem-solving, algorithm design, and creative software development.
              </p>
              <p>
                I'll be documenting my software development journey here—the coding ideas, technical challenges, debugging breakthroughs, and programming lessons learned along the way. Stay tuned for updates as I prepare and compete!
              </p>
            </div>
          </div>
        </article>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
