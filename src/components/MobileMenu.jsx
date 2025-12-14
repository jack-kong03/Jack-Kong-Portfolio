export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const baseLinkClasses =
    "text-2xl font-semibold text-white my-3 transform transition-opacity transition-transform duration-300";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                  bg-[rgba(10,10,10,0.9)] backdrop-blur-lg
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`${baseLinkClasses} ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`${baseLinkClasses} delay-75 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        About Me
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`${baseLinkClasses} delay-150 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Projects
      </a>

      <a
        href="#blog"
        onClick={() => setMenuOpen(false)}
        className={`${baseLinkClasses} delay-200 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Blog
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`${baseLinkClasses} delay-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Contact
      </a>
    </div>
  );
};
