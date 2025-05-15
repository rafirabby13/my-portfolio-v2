import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";
import Cursorr from "./Cursor";



export default function AnimText({ delay }) {
  const [done, setDone] = useState(false);
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
 
  useEffect(() => {
    const controls = animate(count, {
      type: "tween",
      delay: delay,
      duration: 4,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      }
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
    
      {done && (
        <>
          <br /> <br />
        </>
      )}
      <RedoAnimText delay={delay + 1} />
      <Cursorr />
    </span>
  );
}
