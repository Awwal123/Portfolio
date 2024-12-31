import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <div className="text-gray-500 flex flex-col w-full justify-center bg-gray-200 px-5 py-5 md:py-6 md:px-6 dark:bg-gray-900 overflow-hidden">
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-5">
          <div className="text-center sm:text-left">
            <p>awwalsalakomuhammed@gmail.com</p>
          </div>

          <div className="flex justify-center items-center gap-3 text-center w-full">
            <i
              className="fa-regular fa-copyright hidden md:inline"
              style={{ fontSize: "15px", marginTop: "2px" }}
            ></i>
            <p className="dark:text-white text-sm">
              2024 Designed | Coded with ❤️️ by Muhammad Awwal
            </p>
          </div>

          <div className="flex gap-7 justify-center sm:justify-end">
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
      </Fade>
    </div>
  );
};
