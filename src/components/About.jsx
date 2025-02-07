/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal";
import img from "../assets/icons8-about-100.png";

const About = () => {
  return (
    <div id="about" className="p-3 md:p-10  ">
      {/* <div className=" rounded-lg ">
        <h1 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 ">
          "About Me"
        </h1>
        <h2 className="text-4xl font-semibold text-[#02995d] mb-6">
          Rafi Ahmed
        </h2>
      </div>
      <div className="xl:grid  grid-cols-3 grid-rows-3 space-y-4">
        <Fade
          cascade
          delay={2000}
          direction="left"
          triggerOnce={true}
          damping={0.4}
          className=" shadow-inner shadow-[#02995d] p-4"
        >
          <p className=" md:text-2xl">
            I am Rafi Ahmed, a passionate web developer from Bangladesh with a
            strong commitment to crafting user-friendly, efficient, and visually
            stunning applications. My journey into programming started with a
            deep curiosity about the inner workings of websites, sparking a love
            for solving problems and building digital solutions from scratch.
          </p>
        </Fade>
        <div className="row-span-2 row-start-2 col-start-2">
          <img
            src={img} // Replace with your actual profile image URL
            alt="Your Profile"
            className="md:h-[400px] bannerImg rounded-full md:w-fit mx-auto w-full border-2 p-5"
          />
        </div>
        <Fade
          cascade
          delay={2000}
          direction="right"
          triggerOnce={true}
          damping={0.4}
          className="col-start-3  shadow-inner shadow-[#02995d] p-4"
        >
          <p className=" md:text-2xl">
            As a dedicated MERN stack developer, I continuously strive to
            enhance my skills, working on exciting projects that blend
            creativity with functionality. From developing feature-rich career
            counseling platforms to building interactive cricket squad
            selectors, I thrive on turning ideas into impactful applications.
          </p>
        </Fade>
        <Fade
          cascade
          delay={2000}
          direction="left"
          triggerOnce={true}
          damping={0.4}
          className="row-start-3  shadow-inner shadow-[#02995d] p-4"
        >
          <p className=" md:text-2xl">
            With a background in Information Technology from Jahangirnagar
            University and an ever-growing enthusiasm for freelancing, I aim to
            create technology that makes lives simpler and better. My
            inspiration comes from my family and my desire to uplift my
            background and lead a fulfilling life.
          </p>
        </Fade>
        <Fade
          cascade
          delay={2000}
          direction="right"
          triggerOnce={true}
          damping={0.4}
          className="col-start-3 row-start-3  shadow-inner shadow-[#02995d] p-4"
        >
          <p className=" md:text-2xl">
            I take pride in being detail-oriented and enjoy collaborating with
            others to bring visions to life. Whether it’s career counseling
            platforms, fitness websites, or contributing to flood relief
            efforts, I am committed to using my skills for both professional
            growth and meaningful contributions to society.
          </p>
        </Fade>
      </div> */}
      <div id="about" className="p-3 md:p-10">
        <div
          className="flex flex-col md:flex-row items-center gap-4
                          w-fit mx-auto py-10"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 text-center border-b-4 w-fit mx-auto pb-2 flex flex-col items-center gap-8">
            <img src={img} alt="" />
            About Me
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-green-100 to-white p-6 md:p-10 border-2 border-gray-400 rounded-lg shadow-md">
          <Fade
            cascade
            delay={2000}
            direction="right"
            triggerOnce={true}
            damping={0.4}
            className="col-start-3  shadow-inner shadow-[#02995d] p-4"
          >
            <p className="text-lg md:text-2xl text-center font-medium text-gray-800 italic">
              "I am Rafi Ahmed, a passionate web developer from Bangladesh with
              a strong commitment to crafting user-friendly, efficient, and
              visually stunning applications. My journey into programming
              started with a deep curiosity about the inner workings of
              websites, sparking a love for solving problems and building
              digital solutions from scratch.As a dedicated MERN stack
              developer, I continuously strive to enhance my skills, working on
              exciting projects that blend creativity with functionality. From
              developing feature-rich career counseling platforms to building
              interactive cricket squad selectors, I thrive on turning ideas
              into impactful applications."
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
