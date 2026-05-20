"use client";
import { useState } from "react";
import { Space_Mono } from "next/font/google";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/5 backdrop-blur-xl shadow-lg border-b border-white/10" >
      <nav className=" container mx-auto px-6 flex items-center justify-between">
        <a href = "#" className={`${spacemono.className} font-bold text-2xl`}>SH .</a>
        

        <div className="hidden md:flex items-center gap-1">
          <div
            className={`${spacemono.className} flex items-center gap-1 bg-gray-100 rounded px-2 py-1`}
          >
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-200 "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* Desktop Download Button */}
        <motion.div
        className = "inline-block"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        >
        <a
          href="/ShozebHasan.pdf"
          download="Shozeb Hasan.pdf"
          className={`${spacemono.className} hidden md:flex items-center gap-2 font-semibold border border-blue-700 px-3 py-1.5 rounded bg-blue-400  transition-colors cursor-pointer`}
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
        </motion.div>


        <button
          className="md:hidden p-2 "
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in bg-white">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={`${spacemono.className} text-lg text-gray-600 hover:text-gray-900 py-2`} 
              >
                {link.label}
              </a>
            ))}
            {/* Mobile Download Button */}
            <motion.div
            className="inline-block"
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            >
            <Link
              href="/ShozebHasan.pdf"
              download="ShozebHasan.pdf"
              className={`${spacemono.className} flex items-center justify-center gap-2 font-semibold border border-blue-700 px-2 py-2 rounded bg-blue-400 transition-colors`}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Link>
            </motion.div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
