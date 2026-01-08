import { Fade } from "react-awesome-reveal";
import Ecommerce from "../assets/images/Ecommerce.png";
import Chatbot from "../assets/images/chat.png";
import EasyBank from "../assets/images/Easybank.png";
import Manage from "../assets/images/Manage.png";
import Todo from "../assets/images/Todo.png";
// import TodoNinja from "../assets/images/TodoNinja.png";
import CushyAcess from "../assets/images/cushy-access.png";
import DassArt from "../assets/images/dass_art.png";
import VerifyPoint from "../assets/images/verify-point.png";
import TadExpress from "../assets/images/tadExpress.png";
import TechSolutins from "../assets/images/techsolutins.png";
import Promptflow from "../assets/images/propmt_flow.png"
import { useState } from "react";
export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectData = [
    { id: 1, title: "Cushy Access Go", description: "A production q-commerce mobile app built with React Native, enabling users to order groceries, food, logistics services, and consult doctors etc.", image: CushyAcess, link: "https://apps.apple.com/us/app/cushy-access/id6755833733" },
     { 
    id: 13, 
    title: "PromptFlow AI", 
    description: "A full-stack AI chat application built with Laravel and Vue, allowing users to create chats, send messages, and get smart AI responses using Google API.", 
    image: Promptflow, 
    link: "https://my-chatbot-v2-psi.vercel.app/"
  },
    { id: 7, title: "DaasArt", description: "A full-stack web platform showcasing crack glass art, allowing users to place custom orders and make secure payments via Paystack.", image: DassArt, link: "https://www.daasart.art/" },
    { id: 8, title: "Verify Point", description: "A background verification platform for criminal, education, employment, and NIN checks, built to streamline identity and compliance processes.", image: VerifyPoint, link: "https://verifypointng.com/" },
    { id: 12, title: "TadExpress Driver", description: "A logistics web app for verified drivers to accept pickups, navigate deliveries with Google Maps, and track package drop-offs.", image: TadExpress, link: "https://tadexpress-web.vercel.app/" },
    { id: 2, title: "FullStack E-commerce App", description: "A fully functional online store with user authentication, shopping cart, and more.", image: Ecommerce, link: "https://fullstack-ecommerce-app-wine.vercel.app/" },
    { id: 9, title: "TechSolutins", description: "A company landing page built with Next.js, featuring responsive layouts and React-based animations.", image: TechSolutins, link: "https://www.techsolutins.com/" },
    { id: 3, title: "Chatbot App", description: "This chatbot uses Gemini under the hood to provide smart and helpful responses.", image: Chatbot, link: "https://my-chatbot-mu-mauve.vercel.app/" },
    { id: 5, title: "Easy Bank Landing Page", description: "A static landing page for Easy Bank, created as a Frontend Mentor challenge to build a responsive and visually appealing layout based on a provided design.", image: EasyBank, link: "https://easy-bank-landing-page-gilt.vercel.app/" },
    { id: 6, title: "Manage Landing Page", description: "This is also a static landing page gotten from Frontend Mentor challenge.", image: Manage, link: "https://manage-landing-page-peach-seven.vercel.app/" },
    { id: 4, title: "To-Do App", description: "A simple To-Do app that allows users to add tasks, mark them as complete, and delete them.", image: Todo, link: "https://todo-app-eta-azure-28.vercel.app/" },
  ];

  const projectsToShow = showAll ? projectData : projectData.slice(0, 6);

  return (
    <div id="projects" className="h-auto md:min-h-screen text-gray-600 dark:text-gray-400 flex flex-col w-full justify-start bg-gray-200 px-5 py-5 md:py-20 md:px-20 dark:bg-gray-900 overflow-hidden">
      <Fade direction="up" duration={3000} triggerOnce>
        <div className="flex justify-center items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            Projects
          </div>
        </div>
      </Fade>

      <div className="flex flex-col justify-center items-center md:block mt-2 pb-5">
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {projectsToShow.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
              <div className="w-[300px] h-[390px] p-3 rounded-tl-3xl rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300 relative">
                <img src={project.image} alt={project.title} className="w-full contain h-[150px] rounded-lg" />
                <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">{project.title}</h2>
                <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
                <p className="text-base font-medium">{project.description}</p>
                <div className="absolute bottom-3 left-3 w-1/2 mt-2 h-9 bg-gradient-to-r flex justify-center text-white items-center rounded-full from-purple-500 to-blue-500">
                  View project
                </div>
              </div>
            </a>
          ))}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 px-6 py-3  flex justify-center items-center  bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:opacity-90 transition"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};
