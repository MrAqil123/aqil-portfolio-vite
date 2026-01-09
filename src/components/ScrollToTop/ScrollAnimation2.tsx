import { motion, useInView } from "framer-motion";
// اضافه کردن کلمه type قبل از Variants برای رفع خطا
import type { Variants } from "framer-motion"; 
import { useRef } from "react";

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollAnimation2({ children, className }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50, x: 100, scale: 0.15, rotateX: 10 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
