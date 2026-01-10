import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const sections = ["home", "about", "projects", "blog", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sections.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        return observer;
      }
      return null;
    });

    // Set initial active section
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observers.forEach((obs) => obs?.disconnect());
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#blog", label: "Blog", id: "blog" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 backdrop-blur-xl bg-white/70 px-6">
          {/* Brand */}
          <a
            href="#home"
            className="text-base font-medium text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
          >
            Jack Kong
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative inline-block hover:text-gray-900 transition-colors ${
                  activeSection === item.id ? "text-gray-900" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 animate-underline" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="flex md:hidden items-center justify-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
