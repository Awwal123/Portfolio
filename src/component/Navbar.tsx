import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Hamburger from "../assets/images/hamburger.png";
import CloseIcon from "../assets/images/CloseIcon.png";
import Logo from "../assets/images/logo.png";
import Sun from "../assets/images/sun.png";
import Moon from "../assets/images/moon.png";

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-white shadow-lg font-medium md:font-normal text-gray-700 flex items-center justify-between h-16 px-5 md:px-20 dark:bg-gray-900  dark:text-gray-300">
      <div className="flex items-center">
        <img src={Logo} className="h-8 w-9 filter dark:invert" alt="Logo" />
      </div>

      <img
        src={isNavOpen ? CloseIcon : Hamburger}
        alt={isNavOpen ? "close menu" : "open menu"}
        className="block h-10 w-10  md:hidden cursor-pointer dark:invert"
        onClick={toggleNavbar}
      />

      <div
        className={`${
          isNavOpen ? "flex h-1/2" : "hidden"
        } absolute md:static top-16 left-0 w-full shadow-lg md:shadow-none md:w-auto bg-white dark:bg-gray-900 md:flex flex-col md:flex-row items-center md:gap-5 md:justify-between md:text-lg pb-7 md:pb-0 z-50`}
      >
        <div className="flex flex-col md:flex-row md:gap-5 w-full md:w-auto">
        <Link
            to="projects"
            smooth={true}
            duration={500}
            className="py-2 md:py-0 px-4 md:px-0 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            Projects
          </Link>
         
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="py-2 md:py-0 px-4 md:px-0 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 md:py-0 px-4 md:px-0 cursor-pointer"
            onClick={() => setIsNavOpen(false)} // Close navbar on click
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 md:py-0 px-4 md:px-0 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div
          className={`${
            isNavOpen ? "block w-full mt-7 mb-7 md:hidden" : "hidden"
          }`}
        >
          <hr className=":mt-0 md:mb-0" />
        </div>
        <hr className="hidden md:block border-gray-600 w-6 transform rotate-90 mt-2 md:mx-3" />

        <div className="hidden md:flex gap-4 items-center">
          <img
            src={Moon}
            alt="Dark mode"
            onClick={toggleTheme}
            className="cursor-pointer hidden dark:block w-6 h-6"
          />
          <img
            src={Sun}
            alt="Light mode"
            onClick={toggleTheme}
            className="cursor-pointer dark:hidden w-6 h-6"
          />
          <a href="/cv/Muhammad_Awwal_CV.pdf" download="Muhammad_Awwal_CV.pdf">
            <div className="w-32 h-10 flex items-center justify-center font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-500 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white dark:bg-white dark:text-gray-900 cursor-pointer">
              Download CV
            </div>
          </a>
        </div>

        <div className="block md:hidden gap-4 w-full pl-6 pr-6 items-center">
          <div className=" md:hidden flex justify-between w-full">
            <p className="block md:hidden">Switch Theme</p>
            <img
              src={Moon}
              alt="Dark mode"
              onClick={toggleTheme}
              className="cursor-pointer hidden dark:block w-10 h-10"
            />
            <img
              src={Sun}
              alt="Light mode"
              onClick={toggleTheme}
              className="cursor-pointer dark:hidden w-10 h-10"
            />
          </div>

          <div className="justify-center flex items-center pb-4">
            <a
              href="/cv/Muhammad_Awwal_CV.pdf"
              download="Muhammad_Awwal_CV.pdf"
            >
              {" "}
              <div className="w-40 h-10 flex items-center justify-center  font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-500 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white dark:bg-white dark:text-gray-900 cursor-pointer">
                Download CV
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
