import React, { useState, useEffect } from "react";
import { Img } from 'react-image';
import SectionHeading from "./SectionHeading";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 0,
      slug: "edf energy produce electricity",
      title: "Senior Frontend Engineer - Shopify Theme",
      images: [
        "/img/edfEnergy.jpg",
        "/img/edfEnergy1.jpg",
        "/img/edfEnergy.jpg"
      ],
      tech: ["React (Vite 19.1)", "TypeScript", "JavaScript", "Redux (Thunk, Saga)", "TanStack Query", "GraphQL", "AG Grid", "Jest", "React Testing Library", "Cypress", "Docker", "Kubernetes (basic)", "Jenkins", "AWS", "Figma", "Content-Stack CMS"],
      description:
        "Worked on EDF Energy’s nuclear waste lifecycle management system, monitoring collection, processing, packaging, and consignment. The platform ensures environmentally safe disposal, regulatory compliance, and operational efficiency",
    },
    {
      id: 1,
      slug: "Sky UK’s broadband product platform",
      title: "Shopify Theme Engineer (Senior Frontend Developer)",
      images: [
        "/img/dubedoostab.jpg",
        "/img/dubedoos.jpg",
        "/img/hero (1).png",
        "/img/hero (2).png"
      ],
      link: "https://www.sky.com/broadband",
      tech: ["ReactJS 18", "TypeScript", "JavaScript", "Redux (Thunk, Saga)", "Jest", "Cypress", "GraphQL", "Content Stack CMS", "Optimizely", "React Testing Library", "Octopus"],
      description:
        "Worked on Sky UK’s broadband product platform to deliver responsive, customer-facing web pages that supported broadband sales and personalization journeys. The platform integrated with CMS systems (ContentStack, Optimizely) to enable marketing teams to run A/B tests and rapidly launch new campaigns. The project focused on improving user experience, increasing conversion rates, and reducing time-to-market for new product features. The platform was implemented using microfrontend architecture to allow independent development, testing, and deployment of multiple modules.",
    },
    {
      id: 2,
      slug: "Marina Bay Sands Resourt",
      title: "Senior Software Developer",
      images: [
        "/img/momentum.jpg",
        "/img/hero (4).png",
      ],
      link: "https://www.marinabaysands.com/restaurants/rooftop-dining.html",
      tech: ["React","ReactJS", "Angular", "TypeScript", "ContentStack CMS", "Jest","GCP"],
      description:
        " Marina Bay Sands offers a comprehensive loyalty program through its Sands LifeStyle membership, allowing members to earn and redeem Resort Dollars across various outlets within the resort. ",
      // blog: {
      //   title: "From Zero to Full-Stack: Building Momentum with Appwrite",
      //   content: "A comprehensive guide to building a full-stack fitness tracking application...",
      //   date: "2024-02-20",
      //   readTime: "8 min read"
      // }
    },
    {
      id: 3,
      title: "Associate UI Consultant",
      images: [
        "/img/multifamily.png",
        "/img/multifamily1.png",
        "/img/multifamily1.png"
      ],
      link:"https://www.verkada.com/uk/solutions/multifamily/#overview",
      tech: ["C#", "ASP.NET MVC", "Angular", "TypeScript", "SQL Server", "Web API"],
      description:
        "Worked on multi-family projects focused on security and operational management for residential and corporate buildings. The system handles tasks such as camera recording, guest entry via entry passes, and facial recognition, accurately logging entry and exit times. This project serves as a comprehensive security and management tool for apartment complexes and corporate facilities."
    }
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
