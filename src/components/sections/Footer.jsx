import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <p className="text-center text-sm text-gray-600">
          "Programming isn't about what you know; it's about what you can figure out" - Chris Pine
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Jack Kong Portfolio
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};