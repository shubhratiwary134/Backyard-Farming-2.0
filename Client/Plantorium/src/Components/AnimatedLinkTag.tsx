import { motion } from "motion/react";

const AnimatedLink = ({ href, children, className = "" }) => {
  return (
    <motion.a href={href} className={`relative inline-block ${className}`}>
      {children}
    </motion.a>
  );
};

export default AnimatedLink;
