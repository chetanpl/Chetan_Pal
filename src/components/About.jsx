import React from "react";
import { Img } from "react-image";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "10+", label: "Years in software engineering" },
  { value: "7+", label: "Years with React & TypeScript" },
  { value: "62 → 88", label: "Lighthouse score lifted at COS" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3 / SCSS", "styled-components"],
  },
  {
    title: "Polish & performance",
    items: ["Responsive UI", "CSS animation", "Lighthouse optimisation", "Bundle size reduction", "Render optimisation"],
  },
  {
    title: "AI & integrations",
    items: ["OpenAI", "Vercel AI SDK", "REST", "GraphQL", "WebSockets"],
  },
  {
    title: "Quality & delivery",
    items: ["Jest", "React Testing Library", "Git / GitHub", "CI/CD", "Code reviews"],
  },
  {
    title: "Design",
    items: ["Figma", "Photoshop", "Illustrator", "Wireframing", "Prototyping"],
  },
];

const About = () => {
  const { theme } = useDarkMode();
  const isDark = theme === "dark";

  return (
    <section id="about" className="pt-20">
      <SectionHeading text="Who Am I ?" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 mt-12 max-w-7xl mx-auto px-4">
        <div
          className="flex-1 h-[30rem] w-[30rem] max-w-full md:w-full md:h-[34rem] px-4 mx-auto"
          data-aos="fade-up"
        >
          <Img
            src="/img/Chetan.jpg"
            alt="Portrait of Chetan Pal"
            className="w-full h-full rounded-lg object-cover"
            loading="lazy"
            loader={<div>Loading...</div>}
          />
        </div>

        <div className="flex-1 space-y-4 h-fit">
          <p
            data-aos="fade-up"
            className={`text-4xl font-semibold ${isDark ? "text-gray-100" : "text-gray-800"}`}
          >
            I'm Chetan Pal
          </p>
          <p
            data-aos="fade-up"
            className={`text-xl font-semibold pl-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Senior Frontend Engineer building fast, polished React products.
          </p>

          <div
            data-aos="fade-up"
            className={`space-y-3 text-lg pl-4 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            <p>
              I have 10+ years of experience building responsive web applications across
              e-commerce, energy, telecom, hospitality and insurance. I work mainly with React,
              TypeScript and Next.js, and I've shipped REST and GraphQL integrations, real-time
              features with WebSockets, and AI-powered features with OpenAI and the Vercel AI SDK.
            </p>
            <p>
              At COS Fashion (H&amp;M Group) I cut page load time by about 30% and raised the
              Lighthouse Performance score from 62 to 88. I own my work from requirements through
              testing to production release, and I care as much about how an interface feels as how
              it performs. I also have working knowledge of Figma, Photoshop and Illustrator, with
              experience in wireframing and prototyping.
            </p>
          </div>

          <hr
            data-aos="fade-up"
            className={`border-t ${isDark ? "border-gray-600" : "border-gray-300"}`}
          />

          <div className="flex flex-wrap gap-4" data-aos="fade-up">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex-1 min-w-[8rem] text-center">
                <h3 className="text-3xl font-bold">{value}</h3>
                <h4 className="pt-2 text-sm font-medium">{label}</h4>
              </div>
            ))}
          </div>

          <hr
            data-aos="fade-up"
            className={`border-t ${isDark ? "border-gray-600" : "border-gray-300"}`}
          />

          <div className="space-y-3" data-aos="fade-up">
            {skillGroups.map(({ title, items }) => (
              <div key={title} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <h4
                  className={`sm:w-44 shrink-0 text-sm font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`px-3 py-1 text-sm rounded-full border ${
                        isDark
                          ? "border-gray-600 text-gray-200"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-end" data-aos="fade-up">
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-[var(--primary)] text-[var(--white-main)] font-semibold rounded-md shadow-md hover:opacity-80"
            >
              Inspect Portfolio <i className="fa-regular fa-arrow-trend-up"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
