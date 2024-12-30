import Profile from "../assets/images/Profile2.jpg";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div
      id="about"
      className="h-auto md:h-screen text-gray-600 dark:text-gray-400 flex flex-col w-full justify-start bg-gray-200 px-5 py-5 md:py-20  md:px-20 dark:bg-gray-900"
    >
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center  items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            About me
          </div>
        </div>
      </Fade>

      {/* Profile and Text Section */}
      <div className="flex flex-col gap-5  md:flex-row md:justify-between items-center">
        <Fade direction="left" duration={3000} triggerOnce>
          <div className="">
            <div className="w-[250px]  h-[280px] md:w-[280px] md:h-[320px] mt-20 bg-gray-300 dark:bg-gray-600 relative">
              <img
                src={Profile}
                alt="p"
                className="dark:border-gray-900 w-[240px] h-[280px] md:w-[280px] md:h-[auto] border-gray-200 border-8 md:border-8 -mt-8 md:ml-10 md:-mt-20  mb-10 absolute"
              />
            </div>
          </div>
        </Fade>

        {/* Text Section */}
        {/* <Fade direction="up" duration={3000} triggerOnce> */}
        <div className="flex flex-col gap-5 w-full md:w-[50%]">
          <h2 className="font-semibold text-3xl text-gray-800 dark:text-white md:text-4xl">
            Curious about me? Here you have it:
          </h2>
          <p className="text-lg">
            I'm a passionate, self-driven frontend developer specializing in
            React.js. I love bringing the visual and functional aspects of
            digital products to life. I'm focused on creating great user
            experiences, pixel-perfect designs, and writing clean, readable, and
            high-performance code.
          </p>

          <p className="text-lg">
            I started my journey as a frontend developer in 2021, and since
            then, I've been growing and improving my skills. I take on new
            challenges and enjoy learning the latest technologies. Now, I
            specialize in building modern web applications using React.js,
            TypeScript, Tailwindcss and other cutting-edge tools
          </p>

          <p className="text-lg">
            I enjoy connecting and collaborating with others! Feel free to check
            out my portfolio and reach out if you'd like to work together or
            have any questions. I'm always excited to meet fellow developers,
            entrepreneurs, and innovators."
          </p>

          <p className="text-lg">
          One more thing—I’m open to internship and freelance opportunities! Feel free to reach out and say hi; I’d love to connect.😉
          </p>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};
