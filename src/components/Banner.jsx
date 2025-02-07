import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../assets/rafi-1-removebg-preview.png";
import "animate.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    // <div
    //   id="banner"
    //   className="flex flex-col-reverse sm:flex-row justify-between items-center md:items-end px-10  xl:mx-32 bg-[#F4FDF4] md:px-10 rounded-lg shadow-lg gap-8 pb-10 md:pb-20
    // "
    // >
    //   <div className="space-y-3 md:space-y-8  ">
    //     <h1 className="text-3xl md:text-5xl xl:6xl font-bold  md:animate__animated animate__delay-2s animate__infinite animate__slower animate__fadeInDown text-[#02995d]">
    //       Rafi Ahmed
    //     </h1>
    //     <motion.p
    //       className="text-2xl md:text-4xl xl:text-5xl font-semibold  "
    //       animate={{ x: [0, 100, 0] }}
    //       transition={{
    //         duration: 5,
    //         delay: 2,
    //         ease: "linear",
    //         times: [0, 0.3, 1],
    //       }}
    //     >
    //       Frontend Developer
    //     </motion.p>
    //     <div className="flex gap-3 md:gap-7 text-2xl md:text-4xl">
    //       <a href="https://www.facebook.com/rafiahmed.rabby.3/" target="_blank">
    //         <p className="hover:text-[#95D5B2] transition shadow-xl duration-200 cursor-pointer text-[#100abd]">
    //           <FaFacebook />
    //         </p>
    //       </a>
    //       <a href="https://github.com/rafirabby13" target="_blank">
    //         <p className="hover:text-[#95D5B2] transition shadow-xl duration-200 cursor-pointer">
    //           <FaGithub />
    //         </p>
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/rafi-ahmed-rabby-1669b52b3/"
    //         target="_blank"
    //       >
    //         <p className="hover:text-[#95D5B2] transition duration-200 cursor-pointer shadow-xl text-[#073bc9]">
    //           <FaLinkedin />
    //         </p>
    //       </a>
    //       <a href="https://www.instagram.com/rafiahmedrabby/" target="_blank">
    //         {" "}
    //         <p className="hover:text-[#95D5B2] transition shadow-xl duration-200 cursor-pointer text-[#ad0717]">
    //           <FaInstagram />
    //         </p>
    //       </a>
    //     </div>

    //     <button
    //       className="text-[#02995d]
    //          border-[#02995d] md:text-2xl font-bold  rounded-lg hover:bg-[#02995d] px-2 py-1 md:px-10 md:py-4 border-l-[#02995d] border-l-[5px] hover:text-white transition duration-200 shadow-inner shadow-[#02995d] animate__fadeInUp animate__animated animate__delay-2s  animate__slower "
    //     >
    //       <a download={true} href="resume.pdf" className="md:px-10 py-4">
    //         Download Resume
    //       </a>
    //     </button>
    //   </div>
    //   <div className="w-1/3">
    //     <motion.img
    //       whileHover={{ scale: 1.1 }}
    //       transition={{ type: "spring", stiffness: 300 }}
    //       className="md:h-[400px] w-full bannerImg rounded-full  "
    //       src={img}
    //       alt="Profile"
    //     />
    //   </div>
    // </div>
    <div
      id="banner"
      className="flex flex-col-reverse sm:flex-row justify-between items-center md:items-end px-6 sm:px-10 lg:px-32 bg-[#F4FDF4] rounded-lg shadow-lg gap-6 sm:gap-8 pb-8 sm:pb-12 md:pb-20"
    >
      <div className="space-y-4 md:space-y-6 text-center sm:text-left">
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold text-[#02995d] animate__animated animate__delay-2s animate__infinite animate__slower animate__fadeInDown">
          Rafi Ahmed
        </h1>

        <motion.p
          className="text-2xl md:text-4xl lg:text-5xl font-semibold"
          animate={{ x: [0, 100, 0] }}
          transition={{
            duration: 5,
            delay: 2,
            ease: "linear",
            times: [0, 0.3, 1],
          }}
        >
          Frontend Developer
        </motion.p>

        <div className="flex justify-center sm:justify-start gap-4 text-2xl md:text-3xl">
          <a href="https://www.facebook.com/rafiahmed.rabby.3/" target="_blank">
            <p className="hover:text-[#95D5B2] transition duration-200 cursor-pointer text-[#100abd]">
              <FaFacebook />
            </p>
          </a>
          <a href="https://github.com/rafirabby13" target="_blank">
            <p className="hover:text-[#95D5B2] transition duration-200 cursor-pointer">
              <FaGithub />
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/rafi-ahmed-rabby-1669b52b3/"
            target="_blank"
          >
            <p className="hover:text-[#95D5B2] transition duration-200 cursor-pointer text-[#073bc9]">
              <FaLinkedin />
            </p>
          </a>
          <a href="https://www.instagram.com/rafiahmedrabby/" target="_blank">
            <p className="hover:text-[#95D5B2] transition duration-200 cursor-pointer text-[#ad0717]">
              <FaInstagram />
            </p>
          </a>
        </div>

        <div className="flex justify-center sm:justify-start">
       
          <a
            download={true}
            href="/public/Resume_Of_Rafi_Ahmed.pdf"
            className="text-[#02995d] 
             border-[#02995d] md:text-xl font-semibold px-1 md:px-5 py-2 rounded-lg hover:bg-[#02995d] border-l-[#02995d] border-l-[5px] hover:text-white transition duration-200 shadow shadow-[#02995d] animate__fadeInUp animate__animated animate__delay-2s  animate__slower "
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="w-2/3 sm:w-1/3 flex justify-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-[250px] sm:h-[300px] md:h-[400px] w-auto rounded-full"
          src={img}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
