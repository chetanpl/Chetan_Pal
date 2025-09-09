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
    { name: "JavaScript", level: "80%" },
    { name: "jQuery", level: "50%" },
    { name: "React", level: "80%" },
    { name: "Tailwind", level: "70%" },
    { name: "MySql", level: "50%" },
    { name: "Express", level: "60%" },
    { name: "nodeJS", level: "60%" },
    { name: "MySQL", level: "60%" },

  ];

  const education = [
    {
      title: "Master of Computer application",
      description: "3 Years Degree from Sikkim Manipal University, Delhi, India"
    },
    {
      title: "Graduation",
      description: "3 years bachelor degree from delhi university in uk"
    }
  ];

  const experience = [
    {
      title: "Tata Consultancy Services UK | Client: EDF Energy UK | Jun 2023 – Present | Gloucester, UK",
      description: "I’ve been working as a Senior Frontend Developer on a critical project for EDF Energy, focused on the safe disposal of nuclear plant waste—including solid, liquid, and gaseous forms. The system is designed to monitor the entire lifecycle of waste: from collection and processing to packaging and consignment. Its goal is to ensure environmentally safe disposal by the target date, minimizing ecological impact and reducing the risk of regulatory penalties from the UK government. The project significantly improves operational efficiency and compliance"
    },
    {
      title: "Zensar Technologies UK | Client: Sky Telecom UK | Jun 2022 – Jun 2023 | London, UK",
      description: "Sky TelecomWorked on Sky UK’s broadband platform, building responsive, customer-facing web pages to support sales and personalized journeys. Integrated with CMS systems (ContentStack, Optimizely) for A/B testing and rapid campaign launches."
    },
    {
      title: "Optimum Solutions, Singapore | Client: Marina Bay Sands | Jul 2019 – Apr 2022",
      description: "Developed an event-driven loyalty engine powering real-time reward distribution across casino kiosks."
    }
    ,
    {
      title: "Associate Consultant, Global Logic Pvt Ltd, Noida, India | Nov 2017 – Jul 2019",
      description: "Worked on multi-family projects focused on security and operational management for residential and corporate buildings. The system handles tasks such as camera recording, guest entry via entry passes, and facial recognition, accurately logging entry and exit times. This project serves as a comprehensive security and management tool for apartment complexes and corporate facilities.."
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
