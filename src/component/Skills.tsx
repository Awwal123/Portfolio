import { Fade } from "react-awesome-reveal";
import Js from "../assets/images/icon-javscript.png";
import Ts from "../assets/images/icon-typescript.png";
import Rc from "../assets/images/icon-react.png";
import Tailwind from "../assets/images/Tailwind.png";
import Figma from "../assets/images/Figma.png";
import Firebase from "../assets/images/Firebase.png";
import Github from "../assets/images/Github.png";
import Git from "../assets/images/icon-git.png";
import HT from "../assets/images/Html.png";
import Css from "../assets/images/Css.png";
import Php from "../assets/images/Php.png"
import Node from "../assets/images/icon-nodejs.png"
import MongoDB from "../assets/images/Vector.png"
// import nn from "../assets/images/"

export const Skills = () => {
  return (
    <div
      id="skills"
      className="h-auto md:h-screen text-gray-600 dark:text-gray-300 flex flex-col w-full justify-start bg-white px-5 py-5 md:py-20  md:px-20 dark:bg-black"
    >
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center flex-col gap-3  items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            Skills
          </div>
          <p className="text-lg">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
      </Fade>

      {/* my skills */}
      <Fade direction="right" duration={3000} triggerOnce>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-3 ">
        <div className="flex flex-col items-center gap-3">
          <img src={Js} alt="" className="w-16 h-16" />
          <p>Javascript</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Ts} alt="" className="w-16 h-16" />
          <p>Typescript</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Rc} alt="" className="w-16 h-16" />
          <p>React</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Tailwind} alt="" className="w-16 h-16" />
          <p>Tailwindcss</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Figma} alt="" className="w-14 h-16" />
          <p>Figma</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Firebase} alt="" className="w-14 h-16" />
          <p>Firebase</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Git} alt="" className="w-16 h-16 " />
          <p>Git</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Github} alt="" className="w-20 h-16 dark:invert " />
          <p>Github</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={HT} alt="" className="w-20 h-16 dark:invert " />
          <p>HTML</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Css} alt="" className="w-14 h-16 dark:invert " />
          <p>CSS</p>
        </div>
      </div>

        {/* learning */}
      <div className="flex justify-center mt-6 md:mt-10 flex-col gap-3  items-center w-full mb-5">
        <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
         Learning
        </div>
        <p className="text-lg">
          Here are the tools and technologies I am currently exploring:
        </p>
      </div>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-3 ">
        <div className="flex flex-col items-center gap-3">
          <img src={Php} alt="" className="w-20 h-16" />
          <p>Php</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={Node} alt="" className="w-15 h-16" />
          <p>Node.js</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={MongoDB} alt="" className="w-7 h-16" />
          <p>MongoDB</p>
        </div>
        </div>
        </Fade>
    </div>
  );
};
