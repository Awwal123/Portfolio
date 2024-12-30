import Profile from "../assets/images/Profile.jpg";
import Location from "../assets/images/location.png";
import Location2 from "../assets/images/location-light.png";
import { Fade } from "react-awesome-reveal";
export const Herosection = () => {
  return (
    <Fade direction="up" duration={3000} triggerOnce>
      <div className="h-screen text-gray-600  flex-col-reverse flex gap-5  md:flex-row  md:justify-between items-center dark:text-gray-400 px-5 py-5 md:px-20 md:py-20 dark:bg-black">
        <div className="w-full md:w-[70%]">
          <h1 className="font-bold text-3xl md:text-6xl text-gray-800 dark:text-gray-200">
            Hi, I’m Muhammad Awwal 👋
          </h1>
          <p className=" mt-3 text-lg">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>

          {/* socials */}
          <div className="hidden md:flex justify-center flex-col">
            <div className="flex justify-center gap-2 mt-4 md:mt-12 flex-col">
              <div className="flex gap-3">
                <img src={Location} className="hidden dark:block" />
                <img src={Location2} className="block dark:hidden" />
                <p>Niger State, Nigeria</p>
              </div>

              <div className="flex gap-3 items-center mt-2">
                <div className="bg-green-500 h-3 ml-1 w-3 rounded-full"></div>
                <p>Available for new projects</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* profile image */}
        <div className="">
          <div className="w-[250px]  h-[280px] md:w-[280px] md:h-[320px] mt-20 bg-gray-200 dark:bg-gray-600 relative">
            <img
              src={Profile}
              alt="p"
              className="dark:border-black w-[240px] h-[280px] md:w-[280px] md:h-auto border-white border-8 md:border-8 -mt-8 md:-ml-12 md:-mt-20  mb-10 absolute"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};
