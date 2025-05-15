/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import img from "../assets/icons8-scholar-100.png";
import Button from "./Button";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc)",
      institution: "Jahangirnagar University",
      year: "2019 - 2024",
      details: "Focused on modern web technologies, data structures, and algorithm design. Participated in programming competitions and developed multiple full-stack applications.",
      achievements: ["Cricket Team Player", "3.59 GPA"]
    },
    {
      degree: "Master's of Science in Information Technology (M.Sc)",
      institution: "Jahangirnagar University",
      year: "2024 - Present",
      details: "Specializing in advanced web development frameworks and cloud computing architectures.",
      achievements: []
    },
  ];

  // Simple fade-in animation using intersection observer (Tailwind alternative to framer-motion)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="education" className="py-16  text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-[#E80F88]"></div>
            <h3 className="text-xl font-medium text-[#E80F88]">ACADEMIC BACKGROUND</h3>
            <div className="h-1 w-10 bg-[#E80F88]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            Education
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-[#E80F88]"></span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            My academic journey has equipped me with strong theoretical foundations and practical skills in Information Technology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 h-full w-0.5 bg-gray-800"></div>

          {/* Education items */}
          {educationList.map((edu, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${index * 200} mb-16 relative`}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-4 md:-translate-x-2.5 w-5 h-5 rounded-full bg-[#E80F88] z-10 border-4 border-black shadow-[0_0_10px_rgba(232,15,136,0.6)]">
                  <div className="absolute -inset-1 rounded-full border-2 border-pink-400 animate-ping opacity-20"></div>
                </div>

                {/* Content - positioned on alternating sides */}
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div className={`bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#E80F88] transition-all duration-300 shadow-lg relative ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  }`}>
                    {/* Year badge */}
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#E80F88] text-white text-sm font-bold py-1 px-3 rounded-full">
                      {edu.year}
                    </div>

                    {/* Content */}
                    <div className="flex items-start">
                      <div className="hidden md:block mr-4">
                        <img src={img} alt="Education icon" className="w-12 h-12 object-contain" />
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-lg text-pink-400 font-medium">{edu.institution}</p>
                        
                        {edu.details && (
                          <p className="text-gray-400 mt-3">{edu.details}</p>
                        )}
                        
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, i) => (
                                <span key={i} className="bg-gray-800  text-lg font-medium px-2.5 py-1 rounded">
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
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

        {/* Call to action */}
        <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
        <Button text={'View Full Resume'}></Button>
        </div>
      </div>
    </section>
  );
};

export default Education;