export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center justify-center
                    bg-white backdrop-blur-2xl
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${menuOpen ? "h-screen opacity-100" : "h-screen opacity-0 pointer-events-none"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 focus:outline-none"
          aria-label="Close Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu items */}
        <nav className="flex flex-col items-center space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl md:text-5xl font-semibold text-gray-900 py-3 px-6
                          transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                          hover:text-gray-600 active:scale-95
                          ${
                            menuOpen
                              ? "translate-y-0 opacity-100"
                              : "translate-y-8 opacity-0 pointer-events-none"
                          }`}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
