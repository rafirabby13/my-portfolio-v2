/* eslint-disable react/no-unescaped-entities */
import img from "../assets/icons8-scholar-100.png";
const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc)",
      institution: "Jahangirnagar University",
      year: "2019 - 2024",
    },
    {
      degree: "Master's of Science in Information Technology (M.Sc)",
      institution: "Jahangirnagar University",
      year: "2024 - Present",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row items-center gap-4
                            w-fit mx-auto py-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 flex flex-col items-center gap-8">
            <img src={img} alt="" />
            Education
          </h2>
        </div>
        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {edu.degree}
              </h3>
              <p className="text-gray-600 italic">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
