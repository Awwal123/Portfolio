import Profile from "../assets/images/Profile.png";

import { Fade } from "react-awesome-reveal";
export const Herosection = () => {
  return (
    <div className="h-auto md:min-h-screen text-gray-600 flex-col-reverse flex gap-5 px-5 pb-5 md:flex-row md:justify-between items-center dark:text-gray-400 md:px-20 md:py-20 dark:bg-black overflow-hidden">
      <Fade direction="up" duration={800} triggerOnce>
        <div className="w-full md:w-[65%]">
          {/* availability indicator */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Available for worldwide contracts
            </p>
          </div>

          <h1 className="font-bold text-3xl md:text-6xl text-gray-800 dark:text-gray-200 leading-tight">
            Hi, I'm Muhammad Awwal 👋
          </h1>

          <p className="mt-4 text-lg leading-relaxed max-w-xl">
            MUHAMMAD AWWAL — FULL-STACK DEVELOPER. I build modern web and mobile
            applications using Laravel, React, React Native, Vue, TypeScript,
            and Expo. I work across the entire development process, from
            designing backend systems and responsive interfaces to building,
            deploying, and maintaining production-ready applications. I also
            have experience publishing and managing mobile applications on the
            Google Play Store. I’m passionate about writing clean, maintainable
            software and building products that are reliable, intuitive, and
            built around real user needs. Every project I work on is a priority,
            and I take ownership from the first line of code to production.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-md hover:bg-gray-700 dark:hover:bg-white transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-md hover:border-gray-500 dark:hover:border-gray-400 transition-colors duration-300"
            >
              Let's Work Together
            </a>
          </div>

          {/* socials */}
          <div className="flex gap-6 items-center mt-9">
            <a
              href="https://github.com/Awwal123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i
                className="fa-brands fa-github hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                style={{ fontSize: "24px", cursor: "pointer" }}
              ></i>
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-awwal-869104310/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i
                className="fa-brands fa-linkedin hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                style={{ fontSize: "24px", cursor: "pointer" }}
              ></i>
            </a>
          </div>
        </div>

        {/* profile image */}
        <div>
          <div className="w-[250px] h-[300px] md:w-[300px] md:h-[320px] mt-20 bg-gray-100 dark:bg-gray-800 relative border border-gray-200 dark:border-gray-800">
            <img
              src={Profile}
              alt="Muhammad Awwal"
              className="dark:border-black w-[240px] h-[300px] md:w-[280px] md:h-auto border-white border-8 md:border-8 -mt-8 md:-ml-12 md:-mt-20 mb-10 absolute shadow-xl"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};
