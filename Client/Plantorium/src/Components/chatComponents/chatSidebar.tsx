import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion } from "motion/react";

const ChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`h-screen w-80  bg-violet-500 flex flex-col items-center p-10 `}
      ></motion.div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-10 left-10  "
      >
        {isOpen ? (
          <GoSidebarExpand size={32} />
        ) : (
          <GoSidebarCollapse size={32} />
        )}
      </button>
    </div>
  );
};

export default ChatSidebar;
