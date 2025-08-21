"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-md text-cream" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 bg-opacity-25">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:text-peach">
          <img src="/MVLogo.png" alt="MV Logo" className="h-8 w-8" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#career" className="hover:text-peach">
            Career
          </Link>
          <Link href="#about" className="hover:text-peach">
            About
          </Link>
          <Link href="#projects" className="hover:text-peach">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-peach">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy text-cream">
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link
              href="#career"
              className="hover:text-peach"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <Link
              href="#about"
              className="hover:text-peach"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-peach"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-peach"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
