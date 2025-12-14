export const Blog = () => {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center py-20 bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Blog
        </h2>

        <p className="text-gray-400 text-lg mb-10 text-center max-w-2xl mx-auto">
          Short write-ups on projects, lessons learned , and thoughts on
          breaking into tech as a junior developer.
        </p>

        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-2">
            Coming soon:
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            A blog section is currently being drafted and will be available
            soon. Stay tuned for updates!
          </p>
          <span className="inline-flex items-center text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            Draft in progress
          </span>
        </div>
      </div>
    </section>
  );
};
