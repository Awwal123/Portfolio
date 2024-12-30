import { Fade } from "react-awesome-reveal";
import Ecommerce from "../assets/images/Ecommerce.png";
import Chatbot from "../assets/images/chat.png";
import EasyBank from "../assets/images/Easybank.png";
import Manage from "../assets/images/Manage.png";
// import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto md:min-h-screen text-gray-600 dark:text-gray-400 flex flex-col w-full justify-start bg-gray-200 px-5 py-5 md:py-20 md:px-20 dark:bg-gray-900 overflow-hidden"
    >
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            Projects
          </div>
        </div>
      </Fade>
      <div className="flex flex-col justify-center items-center md:block mt-2 pb-5">
      <div className="grid grid-cols-1  gap-y-14 sm:grid-cols-2 md:grid-cols-3  gap-5 mt-3 ">
        
      
      <a
              href="https://my-chatbot-mu-mauve.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            ><div className="w-[300px] h-[390px] p-3 rounded-tl-3xl rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300">
            <img src={Chatbot} alt="p" className="w-full rounded-lg" />
            <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">
              Chatbot App
            </h2>
            <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
            <p className="text-base font-medium">
              This chatbot uses Gemini under the hood to provide smart and
              helpful responses.
            </p>
            <a
              href="https://my-chatbot-mu-mauve.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {" "}
              <div className="w-1/2 mt-2 h-9 bg-gradient-to-r flex f justify-center text-white items-center rounded-full from-purple-500 to-blue-500">
                View project
              </div>
            </a>
          </div>
          </a>


        <a
          href="https://ecommerce-app-self-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <div className="w-[300px] h-[390px] p-3 rounded-tl-3xl cursor-pointer rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300">
            <img src={Ecommerce} alt="p" className="w-full rounded-lg" />
            <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">
              FullStack E-commerce App
            </h2>
            <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
            <p className="text-base font-medium">
              A fully functional online store with user authentication, shopping
              cart, and more.
            </p>
            <a
              href="https://ecommerce-app-self-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {" "}
              <div className="w-1/2 mt-2 h-9 bg-gradient-to-r flex f justify-center text-white items-center rounded-full from-purple-500 to-blue-500">
                View project
              </div>
            </a>
          </div>
        </a>

        

        <a
          href="https://easy-bank-landing-page-gilt.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        > <div className="w-[300px] h-[390px] p-3 rounded-tl-3xl rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300">
          <img src={EasyBank} alt="p" className="w-full rounded-lg" />
          <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">
            Easy Bank Landing Page
          </h2>
          <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
          <p>
            A fully functional online store with user authentication, shopping
            cart, and more.
          </p>
          <a
              href="https://easy-bank-landing-page-gilt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {" "}
              <div className="w-1/2 mt-2 h-9 bg-gradient-to-r flex f justify-center items-center text-white rounded-full from-purple-500 to-blue-500">
                View project
              </div>
            </a>
        </div> 
        </a>


        <a
          href="https://manage-landing-page-peach-seven.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="w-[300px] h-[390px] p-3 rounded-tl-3xl rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300">
            <img src={Manage} alt="p" className="w-full rounded-lg" />
            <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">
                Manage Landing Page
            </h2>
            <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
            <p className="text-base font-medium">
              This chatbot uses Gemini under the hood to provide smart and
              helpful responses.
            </p>
            <a
              href="https://manage-landing-page-peach-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {" "}
              <div className="w-1/2 mt-2 h-9 bg-gradient-to-r flex f justify-center items-center text-white rounded-full from-purple-500 to-blue-500">
                View project
              </div>
            </a>
          </div>
        </a>
      </div>
      </div>
    </div>
  );
};
