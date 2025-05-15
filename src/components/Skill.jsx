/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import "./Skills.css";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    fetch("skill.json")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch(err => console.error("Error loading skills:", err));
  }, []);

  return (
    <section id="skill" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-pink-600"></div>
            <h3 className="text-xl font-medium text-pink-600">EXPERTISE</h3>
            <div className="h-1 w-10 bg-pink-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            My Skills
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-pink-600"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            I've developed expertise in various technologies through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Marquee */}
        <div className="mb-16">
          <Marquee 
            className="py-8" 
            speed={100} 
            gradient={true} 
            gradientColor={[0, 0, 0]}
            gradientWidth={50}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mx-6 skill-card"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              >
                <div className="bg-gray-900 p-5 rounded-lg flex flex-col items-center shadow-lg skill border border-gray-800 hover:border-pink-600 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center ">
                    <img 
                      src={skill.image} 
                      alt={skill.skill} 
                      className="max-h-full max-w-full object-contain " 
                    />
                  </div>
                  <h3 className="text-lg font-medium text-center">{skill.skill}</h3>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Frontend */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-pink-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Frontend</h3>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === "frontend")
                .slice(0, 5)
                .map((skill, index) => (
                  <div key={index} className="skill-progress">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-pink-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Backend</h3>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === "backend")
                .slice(0, 5)
                .map((skill, index) => (
                  <div key={index} className="skill-progress">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-pink-600 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Tools & Others</h3>
            <div className="space-y-4">
              {skills
                .filter(skill => skill.category === "tools")
                .slice(0, 5)
                .map((skill, index) => (
                  <div key={index} className="skill-progress">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;