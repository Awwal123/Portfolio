import Profile from "../assets/images/Profile.jpg";
import { Fade } from "react-awesome-reveal";
export const Herosection = () => {
  return (
    <Fade direction="up" duration={3000} triggerOnce>
    <div className="h-screen text-gray-600 flex gap-3 flex-col md:flex-row md:justify-between items-center dark:text-gray-400 px-5 py-5 md:px-20 md:py-20 dark:bg-black">
      <div className="w-full md:w-[65%]">
        <h1 className="font-bold text-4xl text-gray-800 dark:text-gray-200">
          Hi, I’m Muhammad Awwal 👋
        </h1>
        <p className="leading-relaxed mt-3">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
      </div>

      <div>
        <div className="w-[280px] h-[320px] bg-gray-500 relative">
          <img
            src={Profile}
            alt="p"
            className="dark:border-black w-[280px] h-auto border-white border-8 -ml-7 -mr-7 mb-10 relative"
          />
        </div>
      </div>
    </div>
    </Fade>
  );
};
