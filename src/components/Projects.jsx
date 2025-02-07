/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/icons8-projects-96.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((datat) => {
        setProjects(datat);
      });
  }, []);

  return (
    <div id="projects" className="bg-[#F4FDF4] py-10">
      <div className="container mx-auto ">
        <div
          className="flex flex-col md:flex-row items-center gap-4
                                    w-fit mx-auto py-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 flex flex-col items-center gap-8">
            <img src={img} alt="" />
            Projects
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Fade
              cascade
              delay={i * 200}
              direction="left"
              triggerOnce={true}
              damping={0.1}
              key={i}
            >
              <div
                key={project.id}
                className="bg-white shadow-xl rounded-lg overflow-hidden "
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 transition-transform duration-300 transform hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-3xl font-semibold text-[#2F6A4F]">
                    {project.name}
                  </h3>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-4  py-1    text-[#1B4332] transition duration-200 font-semibold text-xl flex items-center gap-4 border-b-2 border-[#1B4332] hover:bg-[#1B4332] hover:text-white hover:px-4"
                  >
                    View More <FaArrowRight />
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed mt-[150px] md:mt-[0px] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-2xl">
              <h3 className="text-2xl font-semibold text-[#2F6A4F]">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 mt-2">{selectedProject.details}</p>
              <p className="text-gray-600 mt-2">
                <strong>Stack:</strong> {selectedProject.stack}
              </p>
              <div className="mt-4">
                <Link
                  to={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline mr-2 text-[#2F6A4F] border-[#2F6A4F] hover:bg-[#2F6A4F] hover:text-white"
                >
                  Live Demo
                </Link>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 px-4 py-2 bg-[#E8F5E9] text-[#2F6A4F] rounded-lg hover:bg-[#C8E6C9] transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
