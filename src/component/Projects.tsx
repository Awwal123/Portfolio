import { Fade } from "react-awesome-reveal";
import Ecommerce from "../assets/images/Ecommerce.png";
import Chatbot from "../assets/images/chat.png";
import EasyBank from "../assets/images/Easybank.png";
import Manage from "../assets/images/Manage.png";
import Todo from "../assets/images/Todo.png";

export const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "FullStack E-commerce App",
      description:
        "A fully functional online store with user authentication, shopping cart, and more.",
      image: Ecommerce,
      link: "https://fullstack-ecommerce-app-wine.vercel.app/"
    },
    {
      id: 2,
      title: "Chatbot App",
      description:
        "This chatbot uses Gemini under the hood to provide smart and helpful responses.",
      image: Chatbot,
      link: "https://my-chatbot-mu-mauve.vercel.app/",
    },
    // {
    //   id: 2,
    //   title: "FullStack E-commerce App",
    //   description:
    //     "A fully functional online store with user authentication, shopping cart, and more.",
    //   image: Ecommerce,
    //   link: "https://fullstack-ecommerce-app-wine.vercel.app/"
    // },
    {
      id: 3,
      title: "To-Do App",
      description:
        "A simple To-Do app that allows users to add tasks, mark them as complete, and delete them.",
      image: Todo,
      link: "https://todo-app-eta-azure-28.vercel.app/",
    },
    {
      id: 4,
      title: "Easy Bank Landing Page",
      description:
        "A static landing page for Easy Bank, created as a Frontend Mentor challenge to build a responsive and visually appealing layout based on a provided design.",
      image: EasyBank,
      link: "https://easy-bank-landing-page-gilt.vercel.app/",
    },
    {
      id: 5,
      title: "Manage Landing Page",
      description:
        "This is also a static landing page gotten from Frontend Mentor challenge.",
      image: Manage,
      link: "https://manage-landing-page-peach-seven.vercel.app/",
    },
  ];

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
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className="w-[300px] h-[390px] p-3 rounded-tl-3xl rounded-br-3xl rounded-md dark:bg-gray-900 dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.7)] flex flex-col items-center gap-2 shadow-lg bg-gray-300 relative">
                <img src={project.image} alt={project.title} className="w-full h-[150px] rounded-lg" />
                <h2 className="text-xl text-center text-gray-900 dark:text-white font-medium">
                  {project.title}
                </h2>
                <hr className="h-[3px] bg-gradient-to-r w-[60%] from-purple-500 to-blue-500 border-0" />
                <p className="text-base font-medium">{project.description}</p>
                <div className="absolute bottom-3 left-3 w-1/2 mt-2 h-9 bg-gradient-to-r flex justify-center text-white items-center rounded-full from-purple-500 to-blue-500">
                  View project
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
