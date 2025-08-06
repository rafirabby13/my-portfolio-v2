import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "/rafi.jpg";
import "animate.css";
import { motion } from "framer-motion";
import Button from "./Button";
import A4Animation from "./A4Layout";
import './Banner2.css'
const Banner = () => {
  return (
    <div
      id="banner"
      className="grid md:grid-cols-2 items-center rounded-lg shadow-lg gap-6 sm:gap-8 pb-8 sm:pb-12 md:pb-20 "
    >
      <div className="space-y-4 md:space-y-8 text-center sm:text-left ">
        <h1 className="text-3xl md:text-5xl xl:text-8xl font-bold text-[#E80F88] ">
          Rafi Ahmed
        </h1>
        <p   className="text-2xl md:text-4xl lg:text-5xl font-semibold flex items-center justify-center "><A4Animation/></p>

        {/* <motion.p
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
        </motion.p> */}

        <div className="flex justify-center sm:justify-start gap-6 text-3xl md:text-4xl">
          <a href="https://www.facebook.com/rafiahmed.rabby.3/" target="_blank">
            <p className="hover: transition duration-200 cursor-pointer  ">
              <FaFacebook />
            </p>
          </a>
          <a href="https://github.com/rafirabby13" target="_blank">
            <p className="hover: transition duration-200 cursor-pointer">
              <FaGithub />
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/rafi-ahmed-rabby-1669b52b3/"
            target="_blank"
          >
            <p className="hover: transition duration-200 cursor-pointer ">
              <FaLinkedin />
            </p>
          </a>
          <a href="https://www.instagram.com/rafiahmedrabby/" target="_blank">
            <p className="hover: transition duration-200 cursor-pointer ">
              <FaInstagram />
            </p>
          </a>
        </div>

        <div className="flex justify-center sm:justify-start ">
          <Button text={"Download Resume"} size='text-3xl'></Button>
        </div>
      </div>

       <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full  flex justify-center mb-8 lg:mb-0 conic "
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/10 to-purple/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple rounded-2xl rotate-6 transform scale-95 opacity-20 blur-lg"></div>
              <img
                className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-cover rounded-2xl shadow-2xl"
                src={img}
                alt="Rafi Ahmed - Frontend Developer"
              />
            
            </motion.div>
          </div>
        </motion.div>

      {/* <div className="flex justify-center ">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-[250px] sm:h-[300px] md:h-[400px] w-full"
          src={img}
          alt="Profile"
        />
      </div> */}
    </div>
  );
};

export default Banner;
