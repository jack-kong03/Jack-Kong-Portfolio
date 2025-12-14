import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a
            href="#home"
            className="font-mono text-lg md:text-xl font-bold text-white tracking-tight"
          >
            &lt;Jack<span className="text-blue-500">.dev</span> /&gt;
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-200"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About Me" },
              { href: "#projects", label: "Projects" },
              { href: "#blog", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white relative transition-colors"
              >
                <span className="inline-block">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-200 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
