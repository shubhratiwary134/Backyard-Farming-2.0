import { motion } from "motion/react";

const AnimatedLink = ({ href, children, className = "" }) => {
  return (
    <motion.a
      href={href}
      className={`relative inline-block ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 top-6 h-[2px] bg-[#3ba944]"
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default AnimatedLink;
