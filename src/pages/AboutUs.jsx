import React from "react";
import MainContent from "../components/MainContent/MainContent";
import HeaderContent from "../components/HeaderContent/HeaderContent";

const AboutUs = () => {
  return (
    <>
      <HeaderContent />
      <MainContent>
        <div
          className="
            min-h-screen 
            p-5 
            bg-gradient-to-r 
            from-yellow-400 
            via-green-400 
            to-yellow-400 
            animate-gradient-x
            bg-[length:200%_200%]
            animate-gradient-invert
          "
        >
          <div className="bg-white bg-opacity-60 rounded-lg shadow-lg p-5 my-5 mt-20">
            <h6 className="text-xl font-bold">Project Outline</h6>
            <p className="mt-2">
              This project aims to create a fitness website that offers users personalized meal and 
              workout plans using AI. The website combines various technologies to generate tailored 
              plans that cater to individual needs, ensuring an effective approach to fitness and nutrition.
            </p>

            <h5 className="mt-4 font-semibold">Developers Social:</h5>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://github.com/Thenuka22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className="w-5 h-5 mr-2"
                  />
                  Thenuka322
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/induwara-thenuka-4283a130a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                    alt="LinkedIn"
                    className="w-12 h-5 mr-2"
                  />
                  Induwara Thenuka
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MainContent>
    </>
  );
}

export default AboutUs;
