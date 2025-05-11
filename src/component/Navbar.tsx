import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [binaryText, setBinaryText] = useState("");
  const location = useLocation();

  // Hacker-style navigation links
  const navLinks = [
    { path: "/home", label: "root@hack:~$ home" },
    { path: "/tutorials", label: "exploit_db()" },
    { path: "/tools", label: "payload_gen()" },
    { path: "/resources", label: "config_files" },
    { path: "/news", label: "sys_logs" },
    { path: "/forum", label: "net_chat" },
    { path: "/contact", label: "ssh_connect" },
  ];

  // Generate random binary code effect
  useEffect(() => {
    const generateBinary = () => {
      let binary = "";
      for (let i = 0; i < 16; i++) {
        binary += Math.random() > 0.5 ? "1" : "0";
      }
      setBinaryText(binary);
    };

    const interval = setInterval(generateBinary, 100);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 font-mono",
        isScrolled
          ? "bg-black bg-opacity-90 shadow-green-500 shadow-sm py-2 border-b border-green-500 border-opacity-20"
          : "bg-black py-3"
      )}
    >
      {/* Animated binary code top bar */}
      <div className="h-1 bg-gradient-to-r from-green-500 to-purple-600 overflow-hidden">
        <div 
          className="h-full w-full text-xs text-green-400 whitespace-nowrap animate-marquee"
          style={{ animationDuration: "20s" }}
        >
          {Array(20).fill("10101010 11001100 11110000 ").join(" ")}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with terminal style */}
          <Link to="/home" className="flex items-center group">
            <div className="mr-2 text-green-500 group-hover:text-purple-400 transition-colors">
              <span className="text-yellow-400">$</span>_
            </div>
            <h1 className="text-xl font-bold text-green-400 group-hover:text-purple-400 transition-colors">
              root<span className="text-yellow-400">@</span>hack-academy
              <span className="text-yellow-400">:~</span>
              <span className="text-green-500 animate-pulse">#</span>
            </h1>
          </Link>

          {/* Desktop Navigation - Hacker style */}
          <ul className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={clsx(
                    "px-3 py-1 rounded-md hover:bg-gray-900 hover:text-green-400 transition-all duration-200 border border-transparent hover:border-green-500 hover:border-opacity-30 text-sm",
                    location.pathname === link.path
                      ? "text-green-400 bg-gray-900 bg-opacity-50 border-green-500 border-opacity-30"
                      : "text-gray-400"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button - Terminal style */}
          <button 
            className="md:hidden text-green-400 focus:outline-none hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex items-center">
              <span className="mr-1 text-yellow-400">{isMenuOpen ? ">" : "$"}</span>
              <span className="font-bold">menu</span>
              <span className="ml-1 text-xs text-gray-500">{binaryText}</span>
            </div>
          </button>
        </div>

        {/* Mobile menu - Dropdown terminal */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-3 bg-black border border-green-500 border-opacity-30 rounded-md">
            <div className="text-xs text-green-500 mb-2">
              # ./hack-academy-navigation.sh --mobile
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={clsx(
                      "block px-2 py-1 rounded hover:bg-gray-900 hover:text-green-400 transition-colors text-sm border-l-2",
                      location.pathname === link.path
                        ? "text-green-400 border-green-500"
                        : "text-gray-400 border-gray-800"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-yellow-400 mr-2">$</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-500 mt-2">
              # exit_status: {Math.floor(Math.random() * 256)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;