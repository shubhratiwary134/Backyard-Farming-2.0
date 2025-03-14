import { useEffect, useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion } from "motion/react";
import { FaHome, FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/Hook";
import { getAllChats, getSpecificChat } from "../../store/thunks/chatThunk";
import { useUser } from "@clerk/clerk-react";
import { setCurrentChat } from "../../store/slices/chatSlice";
import { SlOptionsVertical } from "react-icons/sl";
const ChatSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { chats } = useAppSelector((state) => state.chat);

  useEffect(() => {
    const userId = user?.id;
    if (userId) {
      dispatch(getAllChats(userId));
    }
  }, []);
  const handleChatClick = (chatId: string) => {
    if (chatId) {
      dispatch(getSpecificChat(chatId));
    }
  };
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`min-h-screen h-full w-88  bg-gray-300 flex flex-col pt-40 items-center p-5 `}
      >
        {chats.map((chat) => (
          <div
            className="w-full text-lg hover:bg-green-800 hover:text-white p-5 rounded-xl duration:200 cursor-pointer flex justify-between items-center "
            onClick={() => handleChatClick(chat.chatId)}
            key={chat.chatId}
          >
            {chat.chatTitle}
            <SlOptionsVertical onClick={() => setDropDown(!dropDown)} />
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
        <FaPlusSquare
          size={32}
          onClick={() => {
            dispatch(
              setCurrentChat({
                currentChatId: "",
                currentChatTitle: "",
                currentMessages: [],
              })
            );
          }}
        />
      </button>
    </div>
  );
};

export default ChatSidebar;
