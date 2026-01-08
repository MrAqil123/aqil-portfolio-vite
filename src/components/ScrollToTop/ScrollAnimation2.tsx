"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollAnimation2({ children, className }: ScrollAnimationProps) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50, x:100,  scale: 0.15, rotateX: 10},
    visible: { opacity: 1, y: 0,x:0, scale: 1, rotateX: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
