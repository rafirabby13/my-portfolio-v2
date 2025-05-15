/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

const About = () => {
  // About information in a timeline format
  const aboutDetails = [
    {
      title: "Who I Am",
      value: "Rafi Ahmed, Web Developer",
      details:
        "I'm a passionate web developer from Bangladesh with a love for creating user-friendly, efficient, and visually appealing applications.",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "My Journey",
      value: "From Curiosity to Expertise",
      details:
        "My programming journey began with a curiosity about how websites work, sparking a passion for problem-solving and building digital solutions from scratch.",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
    },
    {
      title: "My Expertise",
      value: "MERN Stack Developer",
      details:
        "Specializing in the MERN stack, I build feature-rich applications, from career counseling platforms to interactive cricket squad selectors, blending creativity with functionality.",
      icon: (
        <svg
          className="w-6 h-6 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
    },
  ];

  // Fade-in animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-[#E80F88]"></div>
            <h3 className="text-xl font-medium text-[#E80F88]">GET TO KNOW ME</h3>
            <div className="h-1 w-10 bg-[#E80F88]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-[#E80F88]"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            I'm a dedicated web developer passionate about crafting impactful digital solutions. Learn more about my journey and expertise below.
          </p>
        </div>

        {/* Timeline for about details */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-gray-800"></div>

          {/* About detail items */}
          {aboutDetails.map((detail, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${
                index * 200
              } mb-16 relative`}
            >
              <div
                className={`md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-4 md:-translate-x-2.5 w-5 h-5 rounded-full bg-[#E80F88] z-10 border-4 border-black shadow-[0_0_10px_rgba(232,15,136,0.6)]">
                  <div className="absolute -inset-1 rounded-full border-2 border-pink-400 animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div
                    className={`bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#E80F88] transition-all duration-300 shadow-lg relative ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="hidden md:flex md:items-center md:justify-center mr-4 w-12 h-12 rounded-full bg-gray-800">
                        {detail.icon}
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-lg text-pink-400 font-medium">
                          {detail.value}
                        </p>
                        <p className="text-gray-400 mt-3">{detail.details}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;