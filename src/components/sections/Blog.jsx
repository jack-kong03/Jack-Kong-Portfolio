import { RevealOnScroll } from "../RevealOnScroll";

export const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center py-32 bg-white relative"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section label + heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A space for small write-ups, Ideas, and things learned while
            building systems and breaking into tech as a junior developer.
          </p>
        </div>

        {/* Blog post */}
        <article className="rounded-3xl bg-gray-50 border border-gray-200 p-10 space-y-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Post #1
            </p>
            <span className="inline-flex items-center text-sm text-gray-600 rounded-full bg-white border border-gray-300 px-4 py-1.5">
              08/01/2026
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The story so far...
              </h3>
            </div>

            <div className="prose prose-gray max-w-none space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Hi, I'm Jack.
              </p>
              <p>
                This is my corner of the internet. A place to think in public, document what I'm building, and leave trails of ideas I might return to later. It's less a polished portfolio and more a living notebook.
              </p>
              <p>
                I've graduated with a First Class degree in Computing, and I'm drawn to the process of solving problems with technology—breaking things down, exploring trade-offs, and turning rough ideas into systems that actually work. The satisfaction is in the iteration, not the finish line.
              </p>
              <p>
                I've built and worked on projects across software, data, automation, and cloud, but I keep things intentionally loose here. This site isn't a catalogue or a highlight reel. It's a space for experiments, half-formed thoughts, and lessons learned along the way.
              </p>
              <p>
                I believe the best way to learn is by building and applying what I know, so many of the projects here are based on real-world problems I’ve faced or ideas I’ve wanted to explore.
              </p>
            </div>
          </div>
        </article>

        {/* Blog post #2 */}
        <article className="rounded-3xl bg-gray-50 border border-gray-200 p-10 space-y-6 mt-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              Post #2
            </p>
            <span className="inline-flex items-center text-sm text-gray-600 rounded-full bg-white border border-gray-300 px-4 py-1.5">
              10/01/2026
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://developer.apple.com/assets/elements/icons/swift/swift-64x64.png"
                alt="Swift logo"
                className="w-6 h-6 flex-shrink-0"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                2026 Apple Swift Student Challenge 
              </h3>
            </div>

            <div className="prose prose-gray max-w-none space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                I'm excited to share that I'll be participating in the 2026 Apple Swift Student Challenge!
              </p>
              <p>
                This is an incredible opportunity to challenge myself, learn from the best, and connect with other passionate developers in the Apple ecosystem. Swift has always fascinated me with its modern syntax, safety features, and the powerful frameworks that come with it.
              </p>
              <p>
                I'm looking forward to pushing my skills further, exploring new iOS development patterns, and building something meaningful. The competition environment always brings out the best in problem-solving and creativity.
              </p>
              <p>
                I'll be documenting my journey here—the ideas, challenges, the breakthroughs, and the lessons learned along the way. Stay tuned for updates as I prepare and compete!
              </p>
            </div>
          </div>
        </article>
      </div>
      </RevealOnScroll>
    </section>
  );
};
