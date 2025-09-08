import React from "react";
import { Img } from 'react-image';
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { theme } = useDarkMode();

  return (
    <section id="about" className="pt-20  ">
      <SectionHeading text="Who Am I ?" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 mt-12 max-w-7xl mx-auto px-4 md:h-[28rem]">
        <div
          className="flex-1 h-[30rem]  w-[30rem] md:w-full md:h-full px-4  mx-auto "
          data-aos="fade-up"
        >
          <Img
            src="/img/Chetan.jpg"
            alt="about-img"
            className="w-full h-full rounded-lg object-cover"
            loading="lazy"
            loader={<div>Loading...</div>}
          />
        </div>

        <div className="flex-1 space-y-4 h-fit">
          <p
            data-aos="fade-up"
            className={`text-4xl font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}
          >
            I'm Chetan Pal
          </p>
          <p
            data-aos="fade-up"
            className={`text-xl font-semibold pl-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            An strong Web Developer making Clients ideas, a Reality!
          </p>
          <p
            data-aos="fade-up"
            className={`text-lg text-justify pl-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
          {/* Frontend Theme Engineer with over 8 years of experience building scalable, customer-focused, and automation-driven applications in the telecom, finance, energy, and e-commerce sectors. It's my pleasure to introduce myself in this information technology world, I am dedicated and loyal towards my work, I see my job as the best time of the day as I love to do designing. An UI Developer with Experience in Building and Maintaining Responsive Web and Mobile Applications.  */}
          It's my pleasure to introduce myself in this information technology world, I am dedicated and loyal towards my work, I see my job as the best time of the day as I love to do designing. An UI Developer with Experience in Building and Maintaining Responsive Web and Mobile Applications. Proficient in HTML, CSS, JavaScript and modern library like React.js, Typescript. Passionate about learning and usability. Possess knowledge of Graphic design tools like Adobe Photoshop, Adobe Illustrator, Figma and Zeplin. Knows Prototyping and Wire framing.
          </p>
          <hr data-aos="fade-up" className={`border-t ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`} />

          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
          >
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">8+</h1>
              <h4 className="pt-2 text-sm font-medium">Years of Experience</h4>
            </div>
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">8+</h1>
              <h4 className="pt-2 text-sm font-medium">Happy Customers</h4>
            </div>
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">8+</h1>
              <h4 className="pt-2 text-sm font-medium">Successful Big Projects</h4>
            </div>
          </div>

          {/* <button
            data-aos="fade-up"
            className="mt-6 inline-flex items-center px-6 py-3 bg-[var(--primary)] text-[var(--white-main)] font-semibold rounded-md shadow-md hover:opacity-80"
          > <a href="#projects" className="flex items-center gap-3">
              Inspect Portfolio <i className=" fa-regular fa-arrow-trend-up"></i>
            </a>
          </button> */}
           <div class="flex justify-end" data-aos="fade-up">
    <button class="mt-6 inline-flex items-center px-6 py-3 bg-[var(--primary)] text-[var(--white-main)] font-semibold rounded-md shadow-md hover:opacity-80">
      <a href="#projects" class="flex items-center gap-3">
        Inspect Portfolio <i class="fa-regular fa-arrow-trend-up"></i>
      </a>
    </button>
  </div>
        </div>
      </div>
    </section>
  );
};

export default About;
