// import Profile from "../assets/images/Profile2.jpg";
import Profile3 from "../assets/images/Profile3.png"
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div
      id="about"
      className="h-auto md:min-h-screen text-gray-600 dark:text-gray-400 flex flex-col w-full justify-start bg-gray-200 px-5 py-5 md:py-20 md:px-20 dark:bg-gray-900 overflow-hidden"
    >
      {/* <div className="md:h-[100%] h-auto"> */}
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            About me
          </div>
        </div>
      </Fade>

      {/* Profile and Text Section */}
      <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center">
        <Fade direction="left" duration={3000} triggerOnce>
          <div>
            <div className="w-[250px] h-[300px] md:w-[280px] md:h-[320px] mt-20 bg-gray-300 dark:bg-gray-600 relative">
              <img
                src={Profile3}
                alt="p"
                className="dark:border-gray-900 w-[240px] h-[300px] md:w-[280px] md:h-auto border-gray-200 border-8 md:border-8 -mt-8 md:ml-10 md:-mt-20 mb-10 absolute"
              />
            </div>
          </div>
        </Fade>

        {/* Text Section */}
        <div className="flex flex-col gap-5 w-full md:w-[50%] h-full">
          <h2 className="font-semibold text-3xl text-gray-800 dark:text-white md:text-4xl">
            Curious about me? Here you have it:
          </h2>
          <p className="text-lg">
            I began my journey as a frontend developer and have been continually
            growing and refining my skills ever since. I embrace new challenges
            and enjoy learning the latest technologies. Currently, I specialize
            in building modern web applications using React.js, TypeScript,
            TailwindCSS, and other cutting-edge tools. While my primary focus is
            on frontend development, I’ve also explored backend technologies and
            look forward to diving deeper into them as I continue to advance in
            my career.
          </p>

          <p className="text-lg">
            I enjoy connecting and collaborating with others! Feel free to check
            out my portfolio and reach out if you'd like to work together or
            have any questions. I'm always excited to meet fellow developers,
            entrepreneurs, and innovators.
          </p>

          <p className="text-lg">
            One more thing—I’m open to internship and freelance opportunities!
            Feel free to reach out and say hi; I’d love to connect.😉
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
