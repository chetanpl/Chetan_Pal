import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: "fa-code",
    title: "React & TypeScript Engineering",
    desc: "Responsive, accessible interfaces built with React, Next.js and TypeScript for mobile, tablet and desktop.",
  },
  {
    icon: "fa-tachometer",
    title: "Performance Optimisation",
    desc: "Faster pages through Lighthouse audits, smaller bundles and fewer re-renders.",
  },
  {
    icon: "fa-wand-magic-sparkles",
    title: "AI-Powered Features",
    desc: "Chat, search and voice features built with OpenAI and the Vercel AI SDK.",
  },
  {
    icon: "fa-plug",
    title: "API & Real-Time Integration",
    desc: "REST and GraphQL integrations, plus live updates and alerts with WebSockets.",
  },
  {
    icon: "fa-vial",
    title: "Testing & Code Quality",
    desc: "Jest and React Testing Library tests, code reviews and CI/CD so changes ship safely.",
  },
  {
    icon: "fa-pen-ruler",
    title: "UI Design & Prototyping",
    desc: "Wireframes and prototypes in Figma, with CSS animation and micro-interactions to polish the result.",
  },
];

const Services = () => {
  const { theme } = useDarkMode();
  const isDark = theme === "dark";

  return (
    <section id="services" className="pt-20 px-4">
      <SectionHeading text="What I Provide ?" />

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`min-h-72 w-full max-w-sm rounded-xl shadow-lg border-b-4 border-[var(--primary)] p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:-translate-y-2 ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              data-aos="fade-up"
            >
              <i
                className={`fa-sharp fa-solid ${service.icon} text-[var(--primary)] text-6xl mb-6`}
                aria-hidden="true"
              ></i>
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  isDark ? "text-gray-100" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>
              <p className={isDark ? "text-gray-200" : "text-gray-700"}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
