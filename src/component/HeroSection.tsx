import Profile from "../assets/images/Profile.jpg";
// import Location from "../assets/images/location.png";
// import Location2 from "../assets/images/location-light.png";
import { Fade } from "react-awesome-reveal";
export const Herosection = () => {
  return (
    
      <div className="h-auto md:h-screen text-gray-600  flex-col-reverse flex gap-5  px-5 pb-5  md:flex-row  md:justify-between items-center dark:text-gray-400 md:px-20 md:py-20 dark:bg-black">
        <Fade direction="up" duration={3000} triggerOnce>
        <div className="w-full md:w-[70%]">
          <h1 className="font-bold text-3xl md:text-6xl text-gray-800 dark:text-gray-200">
            Hi, I’m Muhammad Awwal 👋
          </h1>
          <p className=" mt-3 text-lg">
            I'm a frontend  developer, specializing in React. with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 4 years, I still love it as if it was something new.
          </p>

          {/* socials */}
          <div className=" md:flex justify-center flex-col">
            <div className="flex justify-center gap-2 mt-4 md:mt-12 flex-col">
              <div className="flex items-center gap-3">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "20px" }}
                ></i>
                <p>Niger State, Nigeria</p>
              </div>

              <div className="flex gap-3 items-center mt-2">
                <div className="bg-green-500 h-3 ml-1 w-3 rounded-full"></div>
                <p>Available for new projects</p>
              </div>
            </div>

            <div className="flex gap-6 items-center mt-7">
              <a href="https://github.com/Awwal123" target="_blank">
                <i
                  className="fa-brands fa-github"
                  style={{ fontSize: "26px", cursor: "pointer" }}
                ></i>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-awwal-869104310/"
                target="_blank"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{
                    fontSize: "26px",
                    cursor: "pointer",
                    marginTop: "2px",
                  }}
                ></i>
              </a>
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
        </Fade>
      </div>

  );
};
