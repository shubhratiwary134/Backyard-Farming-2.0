import { useEffect, useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion } from "motion/react";
import { FaHome, FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/Hook";
import { getAllChats } from "../../store/thunks/chatThunk";
import { useUser } from "@clerk/clerk-react";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { chats } = useAppSelector((state) => state.chat);
  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      dispatch(getAllChats(userId));
    }
  }, []);
  const handleChatClick = (chatId) => {
    dispatch(getSpecificChat(chatId));
  };
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`h-screen w-80  bg-gray-300 flex flex-col gap-5 pt-40 items-center p-10 `}
      >
        {chats.map((chat) => (
          <div
            className=" text-xl"
            onClick={handleChatClick(chat.chatId)}
            key={chat.chatId}
          >
            {chat.chatTitle}
          </div>
        ))}
      </motion.div>
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
      <button className="fixed top-10 left-60">
        <FaPlusSquare size={32} />
      </button>
    </div>
  );
};

export default ChatSidebar;
