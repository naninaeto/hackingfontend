import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hacking Academy</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tutorials" className="hover:text-yellow-400">
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/tools" className="hover:text-yellow-400">
              Tools
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-yellow-400">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-400">
              News
            </Link>
          </li>
          <li>
            <Link to="/forum" className="hover:text-yellow-400">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
