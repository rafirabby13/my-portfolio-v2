import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function RedoAnimText({ delay }) {
  const textIndex = useMotionValue(0);
  const texts = [
  "UI/UX Specialist",
  "React Developer",
  "Frontend Engineer",
  "Web Craftsman", 
  "TypeScript Expert",
  "Next.js Specialist",
  "Performance Optimizer",
  "Responsive Design Pro",
  "API Integration Master",
  "Component Library Builder",
  "Mobile-First Developer",
  "Accessibility Advocate"
];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.span className="inline">{displayText}</motion.span>;
}
