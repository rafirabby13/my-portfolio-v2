
import { motion } from "framer-motion";
import AnimText from "./AnimText";


export default function A4Animation() {
  return (
    <motion.div className="flex w-full select-none  ">
     
          <AnimText delay={1} />
       
    </motion.div>
  );
}
