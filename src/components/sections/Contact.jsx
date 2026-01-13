import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        setIsSubmitting(false);
      })
      .catch(() => {
        alert("An error occurred, please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-32 bg-white relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section label + heading */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4 text-shadow-subtle">
              Open to Roles, Technical Collaborations, and Questions.
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 max-w-xl mx-auto leading-relaxed">
              Seeking junior software developer, full-stack developer, and backend engineer opportunities. Use the form or links below to get in touch with me.
            </p>
          </div>

          {/* Card */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-gray-50 border border-gray-200 p-8 md:p-10 lg:p-12 space-y-8 md:space-y-10 transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            {/* Form */}
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all hover:border-gray-400 transform hover:scale-[1.01]"
                  placeholder="Your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all hover:border-gray-400 transform hover:scale-[1.01]"
                  placeholder="Your email address"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={6}
                  className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none hover:border-gray-400 transform hover:scale-[1.01]"
                  placeholder="What would you like to chat about?"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </form>

            {/* Other contact methods */}
            <div className="pt-8 border-t border-gray-200 flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
              <div className="text-base text-gray-600">
                <p className="font-medium text-gray-900 mb-1">
                  Prefer something else?
                </p>
                <p>
                  Feel free to use direct contact or social profiles instead.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+447853761808"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  📞 +44 7853 761 808
                </a>

                <a
                  href="https://linkedin.com/in/jack-kong-02b73b240"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <FaLinkedin size={18} className="transform group-hover:scale-110 transition-transform duration-300" /> LinkedIn
                </a>

                <a
                  href="https://github.com/jack-kong03"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <FaGithub size={18} className="transform group-hover:scale-110 transition-transform duration-300" /> GitHub
                </a>

                <a
                  href="https://www.instagram.com/jakk_chn/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <FaInstagram size={18} className="transform group-hover:scale-110 transition-transform duration-300" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
