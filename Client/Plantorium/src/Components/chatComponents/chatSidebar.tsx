import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion } from "motion/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/Hook";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const { chats } = useAppSelector((state) => state.chat);
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`h-screen w-80  bg-gray-300 flex flex-col items-center p-10 `}
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
      <button className="fixed top-10 left-40  " onClick={() => navigate("/")}>
        <FaHome size={32} />
      </button>
    </div>
  );
};

export default ChatSidebar;
