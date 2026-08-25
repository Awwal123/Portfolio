import { Fade } from "react-awesome-reveal";
import CushyAcess from "../assets/images/cushy-access.png";
import DassArt from "../assets/images/dass_art.png";
import VerifyPoint from "../assets/images/verify-point.png";
import TadExpress from "../assets/images/tadExpress.png";
import TechSolutins from "../assets/images/techsolutins.png";

import { useState } from "react";

interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  category?: string;
  role?: string;
  description: string;
  narrative?: string;
  keySolutions?: string[];
  stack?: string[];
  stats?: ProjectStat[];
  image: string;
  link: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Cushy Access Go",
    category: "Logistics & Marketplace",
    role: "Lead Frontend Developer",
    description:
      "A production logistics and q-commerce mobile application built with React Native and Expo, enabling users to order products, request logistics services, and access other on-demand services.",
    narrative:
      "Led the frontend development of Cushy Access Go from scratch, building the mobile application with React Native and Expo. Integrated REST APIs with Axios and implemented real-time communication using WebSockets to support live updates and logistics workflows. Worked closely with the backend to connect the application's core features and deliver a responsive, production-ready mobile experience.",
    keySolutions: [
      "Led the frontend architecture and development of the mobile application from scratch using React Native and Expo.",
      "Integrated backend REST APIs using Axios for authentication, user management, orders, logistics, and other application workflows.",
      "Implemented real-time communication with WebSockets to support live updates and real-time application events.",
      "Built reusable, responsive mobile UI components and connected them to the application's backend services.",
      "Prepared and maintained the application for production deployment and app store releases.",
    ],
    stack: ["React Native", "Expo", "Axios", "WebSockets"],
    stats: [
      { label: "Role", value: "Lead Frontend" },
      { label: "Platform", value: "Mobile" },
      { label: "Development", value: "From Scratch" },
    ],
    image: CushyAcess,
    link: "https://cushyaccess.com/",
  },
  {
    id: 7,
    title: "DaasArt",
    category: "E-commerce & Art Marketplace",
    role: "Full-Stack Developer",
    description:
      "A full-stack art platform that showcases custom crack glass artwork and allows customers to place orders, upload their preferred designs, select sizes, and securely pay for their orders online.",
    narrative:
      "Built DaasArt as a full-stack platform using Next.js and Laravel, handling both the customer-facing experience and the business management dashboard. Developed the ordering workflow, integrated Paystack for secure online payments, and implemented email notifications that automatically send order details to the business owner whenever a customer places an order. Also built a dedicated dashboard where the owner can view and manage orders, including uploaded images, selected sizes, customer details, and order information.",
    keySolutions: [
      "Built the complete customer-facing platform with Next.js, TypeScript, Tailwind CSS, and Axios.",
      "Developed the backend and API layer with Laravel to handle users, orders, uploaded artwork, and business logic.",
      "Integrated Paystack payment processing to allow customers to securely pay for their custom orders.",
      "Built a business dashboard for the company owner to view and manage incoming orders, including customer-uploaded images, selected sizes, and order details.",
      "Implemented automated email notifications that send order information to the business owner whenever a new order is placed.",
    ],
    stack: ["Next.js", "TypeScript", "Laravel", "Tailwind CSS", "Axios", "Paystack"],
    stats: [
      { label: "Role", value: "Full-Stack" },
      { label: "Payment", value: "Paystack" },
      { label: "Dashboard", value: "Custom Built" },
    ],
    image: DassArt,
    link: "https://www.daasart.art/",
  },
  {
    id: 12,
    title: "TadExpress Driver",
    category: "Logistics & Delivery",
    role: "Lead Mobile Developer",
    description:
      "A production logistics mobile application built from scratch for TadExpress drivers to manage deliveries, navigate to pickup and drop-off locations, track orders in real time, and manage delivery earnings.",
    narrative:
      "Led the development of TadExpress Driver from scratch, building the production mobile application with React Native and Expo. Developed the core driver experience including order discovery, single and bulk order acceptance, Google Maps integration, pickup and delivery workflows, real-time location tracking, and wallet management. Integrated the application's backend services using Axios and worked across the complete mobile development lifecycle, from frontend architecture and feature development to production builds and deployment on the Google Play Store and Apple App Store.",
    keySolutions: [
      "Led the mobile application development from scratch using React Native, Expo, and TypeScript.",
      "Built the complete driver order workflow, including viewing, accepting, managing, and completing single and bulk deliveries.",
      "Integrated Google Maps for order locations, pickup and drop-off navigation, route visualization, and delivery tracking.",
      "Implemented real-time driver location tracking to allow delivery progress to be monitored.",
      "Integrated backend APIs using Axios for authentication, orders, delivery status, driver information, and wallet operations.",
      "Built the wallet workflow to reflect driver earnings after successfully completed deliveries.",
      "Handled production builds, release preparation, and deployment to both the Google Play Store and Apple App Store.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Axios", "Google Maps"],
    stats: [
      { label: "Role", value: "Lead Developer" },
      { label: "Built", value: "From Scratch" },
      { label: "Platforms", value: "Android + iOS" },
    ],
    image: TadExpress,
    link: "https://www.tadexpress.com/",
  },
  {
    id: 8,
    title: "Verify Point",
    category: "Verification & Compliance",
    role: "Lead Frontend Developer",
    description:
      "A comprehensive verification platform that helps businesses and organizations verify criminal, educational, employment, NIN, and other identity-related records.",
    narrative:
      "Led the frontend development of Verify Point from scratch, building the web application with Next.js and TypeScript. Worked with Swagger-documented APIs and Axios to integrate the platform's verification services, while creating a reusable shared layout and component structure to keep the application consistent and maintainable across its different verification workflows.",
    keySolutions: [
      "Built the entire frontend application from scratch using Next.js and TypeScript.",
      "Integrated verification services and backend APIs using Axios based on Swagger API documentation.",
      "Implemented workflows for criminal record, educational, employment, NIN, and other verification services.",
      "Created reusable layouts and shared components to maintain a consistent experience across the platform.",
      "Built responsive interfaces designed for businesses handling multiple verification processes.",
    ],
    stack: ["Next.js", "TypeScript", "Axios", "Tailwind CSS"],
    stats: [
      { label: "Role", value: "Lead Frontend" },
      { label: "Development", value: "From Scratch" },
      { label: "Platform", value: "Web" },
    ],
    image: VerifyPoint,
    link: "https://verifypointng.com/",
  },
  {
    id: 9,
    title: "TechSolutins",
    category: "Company Website",
    role: "Frontend Developer",
    description:
      "A polished and responsive company website built to showcase TechSolutins' services, products, and digital solutions with interactive interfaces and smooth animations.",
    narrative:
      "Contributed to the frontend development of the TechSolutins company website using Next.js and Tailwind CSS. Focused on building and refining responsive interfaces across desktop, tablet, and mobile devices while implementing interactive UI elements and smooth animations to create a polished user experience. Worked within the existing project structure to maintain consistency, performance, and visual quality across the website.",
    keySolutions: [
      "Contributed to the frontend implementation using Next.js and Tailwind CSS.",
      "Built and refined responsive interfaces across desktop, tablet, and mobile screen sizes.",
      "Implemented and integrated interactive UI elements and smooth frontend animations.",
      "Worked with the existing codebase and design system to maintain consistency across the website.",
      "Optimized layouts and components to provide a polished and responsive user experience across devices.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    stats: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Focus", value: "UI + Responsiveness" },
      { label: "Platform", value: "Web" },
    ],
    image: TechSolutins,
    link: "https://www.techsolutins.com/",
  },
];

export const Projects = () => {
  const [openId, setOpenId] = useState<number | null>(projectData[0]?.id ?? null);

  const toggleProject = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="projects"
      className="h-auto md:min-h-screen text-gray-600 dark:text-gray-400 flex flex-col w-full justify-start bg-gray-200 px-5 py-5 md:py-20 md:px-20 dark:bg-gray-900 overflow-hidden"
    >
      <Fade direction="up" duration={800} triggerOnce>
        <div className="flex justify-center items-center w-full mb-5">
          <div className="w-[100px] text-center h-[28px] bg-gray-300 dark:bg-gray-500 rounded-xl text-gray-700 dark:text-gray-200">
            Projects
          </div>
        </div>
      </Fade>

      <div className="flex flex-col gap-5 mt-2 pb-5">
        {projectData.map((project) => {
          const isOpen = openId === project.id;
          const hasDetails = Boolean(
            project.narrative ||
              (project.keySolutions && project.keySolutions.length > 0) ||
              (project.stack && project.stack.length > 0)
          );

          return (
            <div
              key={project.id}
              onClick={() => toggleProject(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleProject(project.id);
                }
              }}
              className="relative z-10 w-full rounded-xl bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 overflow-hidden cursor-pointer pointer-events-auto transition-all duration-300 shadow-lg hover:shadow-[0px_0px_15px_2px_rgba(139,92,246,0.35)] dark:hover:shadow-[0px_0px_15px_2px_rgba(255,255,255,0.5)] hover:border-transparent isolate"
            >
              {/* header row - always visible */}
              <div className="relative z-10 w-full flex items-center justify-between gap-4 p-5 text-left pointer-events-none">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {project.category && (
                      <span className="text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {project.category}
                      </span>
                    )}
                    {project.role && (
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {!isOpen && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>

                <i
                  className={`fa-solid fa-chevron-down text-gray-500 dark:text-gray-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  style={{ fontSize: "16px" }}
                ></i>
              </div>

              {/* expanded detail */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 border-t border-gray-200 dark:border-gray-800 pt-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* left: narrative / solutions / stack */}
                      <div>
                        {project.narrative && (
                          <div className="mb-6">
                            <h4 className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-500 mb-2">
                              Project Narrative
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                              {project.narrative}
                            </p>
                          </div>
                        )}

                        {project.keySolutions && project.keySolutions.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-500 mb-2">
                              Key Engineering Solutions
                            </h4>
                            <ul className="space-y-2">
                              {project.keySolutions.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                  <i
                                    className="fa-solid fa-circle-check text-gray-400 dark:text-gray-600 mt-0.5"
                                    style={{ fontSize: "13px" }}
                                  ></i>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.stack && project.stack.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-500 mb-2">
                              Validated Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2.5 py-1 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {!hasDetails && (
                          <p className="text-sm italic text-gray-400 dark:text-gray-600">
                            Full write-up coming soon.
                          </p>
                        )}
                      </div>

                      {/* right: image, stats, link */}
                      <div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full rounded-lg border border-gray-200 dark:border-gray-800 mb-4"
                        />

                        {project.stats && project.stats.length > 0 && (
                          <div
                            className="grid gap-3 mb-4"
                            style={{
                              gridTemplateColumns: `repeat(${project.stats.length}, minmax(0, 1fr))`,
                            }}
                          >
                            {project.stats.map((stat) => (
                              <div
                                key={stat.label}
                                className="border border-gray-200 dark:border-gray-800 rounded-md p-3 text-center"
                              >
                                <p className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-600 mb-1">
                                  {stat.label}
                                </p>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">
                                  {stat.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full flex justify-center items-center gap-2 border border-gray-800 dark:border-gray-200 text-gray-900 dark:text-white text-sm font-medium py-3 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300"
                        >
                          Visit Production Deployment
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <a
          href="https://github.com/Awwal123"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 mx-auto px-6 py-3 flex justify-center items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:opacity-90 transition"
        >
          View All My Work on GitHub
          <i className="fa-brands fa-github" style={{ fontSize: "20px" }}></i>
        </a>
      </div>
    </div>
  );
};
