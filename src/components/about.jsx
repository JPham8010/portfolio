import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Jennifer Pham
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                A budding software engineer ready to grow her career. 
              </p>
            </div>
            <div>
              <p>
                {" "}
                As an early career software developer, I have lots of opportunities to explore different sub-sections of the tech field.
                I've dipped my toes into Drupal development, Cypress testing, fixing bugs in .NET applications, and now building my own portfolio website.
                Currently, my passion lies in the backend and QA although I'm never opposed to trying new things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;