import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Thanks for reaching out! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("An error occurred, please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-slate-950"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>

          <p className="text-gray-300 text-center mb-8 max-w-xl mx-auto">
            Have a role, collaboration, or question in mind? Fill out the form
            below and your message will land directly in my inbox.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition 
                           focus:outline-none focus:border-blue-500 focus:bg-white/15 focus:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                placeholder="Your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition 
                           focus:outline-none focus:border-blue-500 focus:bg-white/15 focus:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                placeholder="Your email address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition 
                           focus:outline-none focus:border-blue-500 focus:bg-white/15 focus:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                placeholder="Tell me a bit about what you're looking for..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded 
                         transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>
          </form>

          {/* Other contact methods */}
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="mb-3 text-gray-300 font-medium">
              Prefer something else? You can also reach me here:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447853761808"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/50 rounded-lg 
                           text-gray-200 hover:bg-blue-500/10 hover:text-white transition-colors duration-300"
              >
                📞 +44 7853 761 808
              </a>

              <a
                href="https://linkedin.com/in/jack-kong-02b73b240"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/50 rounded-lg 
                           text-gray-200 hover:bg-blue-500/10 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>

              <a
                href="https://github.com/jack-kong03"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-500/50 rounded-lg 
                           text-gray-200 hover:bg-blue-500/10 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
