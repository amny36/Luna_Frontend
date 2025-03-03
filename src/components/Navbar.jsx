import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { user, logout } = useAuth();  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();  
    navigate("/login");  
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-2 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md shadow-lg transition duration-300"
          : "bg-primary transition duration-300"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/timer" className="hover:text-gray-400">Timer</Link>
              <span className="text-gray-500">•</span>
              <Link to="/reports" className="hover:text-gray-400">Reports</Link>
              <span className="text-gray-500">•</span>
              <Link to="/todo" className="hover:text-gray-400">Todo List</Link>
            </>
          ) : (
            <>
              <a href="#features" className="hover:text-gray-400">Features</a>
              <span className="text-gray-500">•</span>
              <a href="#docs" className="hover:text-gray-400">Docs</a>
              <span className="text-gray-500">•</span>
              <Link to="/signup" className="bg-light text-primary px-4 py-2 rounded-md text-sm hover:bg-accent hover:text-white transition duration-300">Get Started</Link>
            </>
          )}
        </div>

        <div className="flex items-center justify-center">
          <Link to="/" className="text-xl font-bold hover:text-gray-400">
            <img src="logo.svg" alt="Luna Logo" className="w-20" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/settings" className="hover:text-gray-400">Settings</Link>
              <span className="text-gray-500">•</span>
              <Link to="/tasks" className="hover:text-gray-400">Tasks</Link>
              <span className="text-gray-500">•</span>

              <button
                onClick={handleLogout}
                className="bg-secondary text-white px-4 py-2 rounded-md text-sm hover:bg-accent transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-secondary text-white px-4 py-2 rounded-md text-sm hover:bg-accent transition duration-300">Login</Link>
              <span className="text-gray-500">•</span>
              <a href="#downloads" className="hover:text-gray-400">Downloads</a>
              <span className="text-gray-500">•</span>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none transition-all duration-75">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {user ? (
              <>
                <li><Link to="/timer" className="hover:text-gray-400" onClick={toggleMenu}>Timer</Link></li>
                <li><Link to="/reports" className="hover:text-gray-400" onClick={toggleMenu}>Reports</Link></li>
                <li><Link to="/tasks" className="hover:text-gray-400" onClick={toggleMenu}>Tasks</Link></li>
                <li><Link to="/todo" className="hover:text-gray-400" onClick={toggleMenu}>ToDo List</Link></li>
                <li><Link to="/settings" className="hover:text-gray-400" onClick={toggleMenu}>Settings</Link></li>
                <li>
                  <button onClick={() => { handleLogout(); toggleMenu(); }} className="bg-secondary text-white px-4 py-2 rounded-md text-sm hover:bg-secondary-light transition duration-300">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li><a href="#features" className="hover:text-gray-400" onClick={toggleMenu}>Features</a></li>
                <li><a href="#docs" className="hover:text-gray-400" onClick={toggleMenu}>Docs</a></li>
                <li><a href="#downloads" className="hover:text-gray-400" onClick={toggleMenu}>Downloads</a></li>
                <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
                <li><Link to="/signup" className="hover:text-gray-400" onClick={toggleMenu}>Get Started</Link></li>
                <li><Link to="/login" className="hover:text-gray-400" onClick={toggleMenu}>Login</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
