import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
        import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        alert("Thanks for reaching out! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("An error occurred, please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>
          <p className="text-gray-300 text-center mb-6">
            I’m always open to collaborating on new projects, exploring creative ideas, or discussing opportunities to bring your vision to life.
            Feel free to reach out anytime using the form below.
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
                placeholder="Enter your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                placeholder="Enter your email address"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                placeholder="Type your message here..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
        </div>
      </RevealOnScroll>
    </section>
  );
};