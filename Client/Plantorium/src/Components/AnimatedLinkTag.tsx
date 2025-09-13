import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const AnimatedLink = ({
  href,
  children,
  className = "",
}: AnimatedLinkProps) => {
  return (
    <motion.a
      href={href}
      className={`relative inline-block hover:border-b-2 border-white ${className} `}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedLink;
