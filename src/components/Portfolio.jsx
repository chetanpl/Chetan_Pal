import React, { useState, useEffect } from "react";
import { Img } from 'react-image';
import SectionHeading from "./SectionHeading";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
  {
    id: 0,
    slug: "COS fashion (H&M)",
    title: "Senior Full Stack Developer (Next.js)",
    images: [
      "/img/basket.png",
      "/img/wishlist.png",
      "/img/pdpSizeSelector.png",
      "/img/image.png",
    ],
    link: "https://www.cos.com/en-gb",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "HTML5",
      "CSS3",
      "SCSS",
      "Jest",
      "React Testing Library",
      "OpenAI",
      "Vercel AI SDK",
      "CI/CD",
    ],
    description:
      "Built and maintained COS Fashion's large B2C platform (H&M Group) for mobile and desktop, plus an AI search tool for H&M warehouse staff. Built features with React, Next.js and TypeScript, integrating REST and GraphQL APIs and managing state with Redux Toolkit. Built a real-time stock notification feature with WebSockets that pushes alerts to the user's wishlist page when items run low, and an AI-powered search tool with OpenAI and Vercel that lets warehouse staff search stock and colour availability by product category. Cut page load time by about 30%, raised the Lighthouse Performance score from 62 to 88 and reduced JavaScript bundle size by 20–40%. Wrote Jest and React Testing Library tests and took part in code reviews so changes shipped safely through CI/CD.",
  },
  {
    id: 1,
    slug: "edf energy produce electricity",
    title: "Senior Full Stack Developer",
    images: [
      "/img/edfEnergy.jpg",
      "/img/edfEnergy1.jpg",
      "/img/edfEnergy.jpg",
    ],
    tech: [
      "React",
      "JavaScript",
      "styled-components",
      "Google Charts",
      "QR code scanning",
      "Responsive UI",
    ],
    description:
      "Built a nuclear waste tracking system for EDF Energy (Nuclear) to replace a manual, error-prone process used by plant engineers. It has a QR code scanner UI that runs on mobile, tablet and desktop and maps every package step by step, from pick to secure storage. Built the scan and label print features, so one printed label carries all the details of a package, and owned the work from requirements through testing and release. Also upgraded a website from React 15 to React 19, and upgraded and developed a daily consumption and 15-day demand report for 17 generation sites, with a React front end using styled-components and Google Charts.",
  },
  {
    id: 2,
    slug: "Sky UK's broadband product platform",
    title: "Senior Frontend Developer",
    images: [
      "/img/dubedoostab.jpg",
      "/img/dubedoos.jpg",
      "/img/hero (1).png",
      "/img/hero (2).png",
    ],
    link: "https://www.sky.com/broadband",
    tech: ["React", "TypeScript", "JavaScript", "REST APIs", "GraphQL"],
    description:
      "Built components for Sky's customer-facing broadband website (Glass, WiFi and TV pages) with React, TypeScript and JavaScript, consuming REST and GraphQL APIs. Optimised performance and fixed rendering issues on these pages. Also worked as a business analyst alongside development, gathering and analysing requirements with stakeholders.",
  },
  {
    id: 3,
    slug: "Marina Bay Sands Resort",
    title: "Senior Software Developer",
    images: ["/img/momentum.jpg", "/img/hero (4).png"],
    link: "https://www.marinabaysands.com/restaurants/rooftop-dining.html",
    tech: ["React", "Redux", "TypeScript", "Performance optimisation"],
    description:
      "Built customer-facing B2C loyalty and rewards applications for Marina Bay Sands with React, Redux and TypeScript, used by thousands of customers every day. Reduced DOM re-renders by about 25% by optimising components and refactoring the front end.",
  },
  {
    id: 4,
    slug: "GlobalLogic building security and automation",
    title: "Software Engineer",
    images: [
      "/img/multifamily.png",
      "/img/multifamily1.png",
      "/img/multifamily1.png",
    ],
    link: "https://www.verkada.com/uk/solutions/multifamily/#overview",
    tech: [],
    description:
      "Developed web applications and backend services for a security and automation tool for residential and commercial buildings, at GlobalLogic in India.",
  },
];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal !== null) {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  // Reset image index when modal changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeModal]);

  return (
    <section id="projects" className="pt-32 relative">

      <SectionHeading text="My Projects" />

      <div className="mt-20 flex flex-wrap max-w-[110rem] justify-center gap-8  mx-auto lg:px-45" data-aos="fade-up">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative  w-[90%] sm:w-[60%] md:w-[45%]  h-[23rem] shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
            onClick={() => setActiveModal(project.id)}
          >
            <Img
              src={project.images ? project.images[0] : project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              loader={<div>Loading...</div>}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
            <h1 className="absolute bottom-4 left-4 text-white text-lg z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              {project.title}
            </h1>
            <i className="fa-solid fa-arrow-up-right-from-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-primary text-white p-4 text-2xl rounded-full z-20 opacity-0 group-hover:opacity-100 transition duration-300"></i>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/30 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-2xl relative transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-700 hover:opacity-80 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <h1 className="text-2xl font-bold mt-6 text-gray-800 dark:text-white pr-8">{projects[activeModal].title}</h1>
            <Img
              src={projects[activeModal].images ? projects[activeModal].images[currentImageIndex] : projects[activeModal].image}
              alt="Project Preview"
              className="w-full mt-4 rounded-lg shadow-md"
              loading="lazy"
              loader={<div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">Loading...</div>}
            />

            {/* Image Gallery Thumbnails */}
            {projects[activeModal].images && projects[activeModal].images.length > 1 && (
              <div className="flex gap-3 mt-6 pb-2">
                {projects[activeModal].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index
                        ? 'border-primary shadow-lg scale-110'
                        : 'border-gray-200 dark:border-gray-600 hover:border-primary/50'
                      }`}
                  >
                    <Img
                      src={image}
                      alt={`${projects[activeModal].title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      loader={<div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>}
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-6">
              {projects[activeModal].link && projects[activeModal].link !== "https://" && (
                <a
                  href={projects[activeModal].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/80 transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-external-link-alt"></i> Visit Site
                </a>
              )}
              {projects[activeModal].github && (
                <a
                  href={projects[activeModal].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </a>
              )}
              {projects[activeModal].blog && (
                <a
                  href={`/blog/${projects[activeModal].slug}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-book"></i> View Blog
                </a>
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {projects[activeModal].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {projects[activeModal].description}
            </p>
            <button
              className="mt-6 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
