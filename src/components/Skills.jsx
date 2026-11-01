import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { theme } = useDarkMode();

  // Debug logging
  console.log('Skills component theme:', theme);
const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "90%" },
  { name: "SCSS", level: "85%" },
  { name: "JavaScript", level: "90%" },
  { name: "TypeScript", level: "85%" },
  { name: "React", level: "90%" },
  { name: "Next.js", level: "85%" },
  { name: "Redux Toolkit", level: "85%" },
  { name: "Tailwind", level: "70%" },
  { name: "jQuery", level: "50%" },
  { name: "Node.js", level: "75%" },
  { name: "Express", level: "70%" },
  { name: "GraphQL", level: "75%" },
  { name: "WebSockets / Socket.IO", level: "70%" },
  { name: "MongoDB", level: "60%" },
  { name: "SQL (SQL Server, PostgreSQL)", level: "70%" },
  { name: "MySQL", level: "60%" },
  { name: "Jest / React Testing Library", level: "80%" },
  { name: "OpenAI / Vercel AI SDK", level: "75%" },
];

  const education = [
    {
      title: "Master of Computer application",
      description: "3 Years Degree from Sikkim Manipal University, Delhi, India"
    },
    {
      title: "Graduation",
      description: "3 years bachelor degree from delhi university in India"
    }
  ];

  const experience = [
  {
    title: "Tata Consultancy Services UK | Client: COS Fashion (H&M Group) | May 2023 – Present | UK",
    description: "Working as a Senior Full Stack Developer (Next.js) on COS Fashion's large B2C platform for mobile and desktop, and on an AI search tool for H&M warehouse staff. I build features with React, Next.js and TypeScript, integrating REST and GraphQL APIs and managing state with Redux Toolkit. I built real-time low-stock alerts with Socket.IO and WebSockets, pushed from the server to logged-in users on their wishlist page, and an AI-powered search tool with OpenAI and Vercel so warehouse staff can search stock and colour availability by product category. I cut page load time by about 30%, raised the Lighthouse Performance score from 62 to 88 and reduced JavaScript bundle size by 20–40%, and I write Jest and React Testing Library tests."
  },
  {
    title: "Tata Consultancy Services UK | Client: EDF Energy UK | May 2023 – Present | Gloucester, UK",
    description: "Working as a Senior Full Stack Developer on a critical project for EDF Energy focused on the safe disposal of nuclear plant waste. I built a waste tracking system to replace a manual, error-prone process used by plant engineers. It follows each package step by step, from collection and processing to packaging, consignment and secure storage, using a QR code scanner on mobile, tablet and desktop plus scan and label print features. The system supports environmentally safe disposal by the target date and helps reduce the risk of regulatory penalties. I owned this work from requirements through testing and release. I also worked on upgrading a website from React 15 to React 19 and a Node.js REST API on AWS Lambda from Node.js 16 to Node.js 22, and developed a daily consumption and 15-day demand report for 17 generation sites."
  },
  {
    title: "Zensar Technologies UK | Client: Sky Telecom UK | Jun 2022 – May 2023 | London, UK",
    description: "Worked on Sky UK's broadband platform, building responsive, customer-facing web pages (Glass, WiFi and TV) with React, TypeScript and JavaScript to support sales and personalised journeys. Integrated ContentStack CMS content, delivered A/B tested features with Optimizely for rapid campaign launches, and worked as a business analyst alongside development, gathering and analysing requirements with stakeholders."
  },
  {
    title: "Optimum Solutions, Singapore | Client: Marina Bay Sands | Jul 2019 – Apr 2022",
    description: "Built customer-facing B2C loyalty and rewards applications with React, Redux and TypeScript, used by thousands of customers every day. Developed an event-driven loyalty engine powering real-time reward distribution across casino kiosks, and reduced DOM re-renders by about 25% by optimising components and refactoring the front end."
  },
  {
    title: "Associate Consultant, GlobalLogic Pvt Ltd, Noida, India | Nov 2017 – Jul 2019",
    description: "Worked on a security and operational management tool for residential and commercial buildings. The system handles camera recording, guest entry through entry passes and face detection, and ID card scanning, and logs entry and exit times accurately. It served as a complete security and management tool for apartment complexes and corporate facilities."
  },
  {
    title: "Software Engineer, Infogain, Noida, India | Jun 2014 – Nov 2017",
    description: "Worked on a health insurance billing system on .NET, writing the bill generation logic from ICD codes, and on an auto insurance Angular web app with a guided photo flow for reporting accident damage and a retake flow that sends a new link to resend only an unclear image. Developed backend services and web applications with C#, ASP.NET and Web API, with SQL for data access."
  }
  ];
  console.log("theme in skills page,", theme);
  console.log("Theme condition check:", theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE');
  return (
    <section id="experties" className="pt-20">
      <SectionHeading text="My Experties" />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="text-xl mb-12" data-aos="fade-up">
          <h1 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Education & Skills</h1>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            For more than 5 year, have been accomplishing enough with modern Web Development, (React, HTML, CSS, JavaScript, React, Tailwind, MySql, Express, nodeJS, MySQL new generation web and app programming language.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold" data-aos="fade-up">
              Education
            </div>

            {education.map((item, idx) => (
              <div key={idx} className={`p-4 shadow-md rounded-md border-b-4 border-[var(--primary)] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
            ))}

            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold mt-4" data-aos="fade-up">
              Experience
            </div>

            {experience.map((item, idx) => (
              <div key={idx} className={`p-4 shadow-md rounded-md border-b-4 border-[var(--primary)] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold mb-4" data-aos="fade-up">
              Skills
            </div>

            {skills.map((skill, idx) => (
              <div key={idx} className={`mb-6 p-4 rounded-md shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-medium mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{skill.name}</h3>
                <div className={`w-full h-2 rounded ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
                  <div
                    className="h-full  bg-[var(--primary)]  rounded relative"
                    style={{ width: skill.level }}
                  >
                    <span className="absolute -top-8 right-0 bg-primary text-[var(--primary)] text-xs w-10 h-8 text-center leading-8 rounded-bl-[10px] rounded-br-[10px]">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
