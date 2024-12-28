import { useState, useEffect } from "react";

import Logo from "../assets/images/logo.png";
import Sun from "../assets/images/sun.png";
import Moon from "../assets/images/moon.png";

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

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
    <div className="bg-white text-gray-700 flex items-center justify-between pl-20 pr-20 h-16  dark:bg-gray-900 dark:text-gray-600 ">
      <div>
        <img src={Logo} className="h-9 w-10 filter dark:invert" />
      </div>
      <div className="flex gap-5 font-normal items-center cursor-pointer text-lg dark:text-neutral-300 ">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <hr className="border-gray-600 w-6 transform rotate-90 mt-2" />
        <div className="flex gap-5">
          <img
            src={Moon}
            alt="btn"
            onClick={toggleTheme}
            className="cursor-pointer hidden dark:block"
          />
          <img
            src={Sun}
            alt="btn"
            onClick={toggleTheme}
            className="dark:hidden"
          />
          <div className="w-32 h-10 flex items-center justify-center font-medium rounded-lg bg-gray-900 text-white dark:bg-white dark:text-neutral-900">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
