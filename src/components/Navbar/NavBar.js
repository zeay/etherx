import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaSun, FaMoon } from 'react-icons/fa';
import NavLinks from '../Navbar/NavLinks';
import logo from '../../images/Block.png';

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

  const handleClick = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${
        !top ? 'bg-white dark:bg-gray-900 shadow-lg' : ''
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-12 h-20">
        {/* Logo area */}
        <div className="flex items-center">
          <HashLink smooth to="/#hero" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto relative top-1" 
              // 👆 h-16 for slightly larger, top-1 keeps it aligned
            />
            <span className="text-blue-900 dark:text-white text-xl md:text-2xl font-bold ml-2">
              EtherX Innovations
            </span>
          </HashLink>
        </div>

        {/* Desktop Nav + Dark Toggle */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks />
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-xl text-gray-800 dark:text-gray-100"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="group flex flex-col items-center lg:hidden">
          <button
            className="p-2 rounded-lg text-blue-900 dark:text-white"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full p-24 bg-white dark:bg-gray-900 lg:hidden shadow-xl top-20 rounded-md ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <NavLinks />
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-800 dark:text-gray-100 self-center"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
