import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 5000,
      repeat: Infinity,
      repeatDelay: 300,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function Cursorr() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
    />
  );
}