import { useEffect, useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { motion } from "motion/react";
import { FaHome, FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/Hook";
import {
  deleteChat,
  getAllChats,
  getSpecificChat,
} from "../../store/thunks/chatThunk";
import { useUser } from "@clerk/clerk-react";
import { setCurrentChat } from "../../store/slices/chatSlice";
import { MdDelete } from "react-icons/md";
import { Box, Modal, Typography } from "@mui/material";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [deleteChatId, setDeleteChatId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { chats } = useAppSelector((state) => state.chat);
  const userId = user?.id;
  useEffect(() => {
    if (chats.length === 0) {
      if (userId) {
        dispatch(getAllChats(userId));
      }
    }
  }, [dispatch, userId, chats.length]);
  const handleChatClick = (chatId: string) => {
    if (chatId) {
      dispatch(getSpecificChat(chatId));
    }
  };
  const handleDelete = () => {
    if (deleteChatId) {
      dispatch(deleteChat(deleteChatId));
      setDeleteChatId(null);
      dispatch(
        setCurrentChat({
          currentChatId: "",
          currentChatTitle: "",
          currentMessages: [],
        })
      );
    }
  };
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`fixed top-0 left-0 h-screen w-80 gap-5   bg-[#355e3b] flex flex-col pt-40 items-center p-5 `}
      >
        {chats.map((chat) => (
          <div
            className="w-full text-lg text-white hover:bg-[#f7f7f7] hover:text-black px-5  py-2 rounded-xl duration:200 cursor-pointer flex justify-between items-center "
            onClick={() => handleChatClick(chat.chatId)}
            key={chat.chatId}
          >
            {chat.chatTitle}
            <MdDelete
              size={24}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering `onClick` of the div
                setDeleteChatId(chat.chatId);
              }}
            />
          </div>
        ))}
      </motion.div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-10 left-10  "
      >
        {isOpen ? (
          <GoSidebarExpand size={32} color="white" />
        ) : (
          <GoSidebarCollapse size={32} color="black" />
        )}
      </button>
      <button className="fixed top-10 left-40  " onClick={() => navigate("/")}>
        <FaHome size={32} color={`${isOpen ? "white" : "black"}`} />
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
          color={`${isOpen ? "white" : "black"}`}
        />
      </button>
      <Modal
        open={!!deleteChatId}
        onClose={() => setDeleteChatId(null)}
        className="flex justify-center items-center"
      >
        <Box className="bg-gray-300 w-1/2 h-80 rounded-xl text-black border-2 border-black flex flex-col gap-10 p-5 items-center">
          <Typography variant="h3">Delete Chat?</Typography>
          <Typography variant="h5">
            This will delete the chat permanently.
          </Typography>
          <div className="flex gap-10">
            <button
              className="bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-gray-900 text-white px-8 py-2 rounded-lg hover:bg-zinc-800 transition"
              onClick={() => setDeleteChatId(null)}
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ChatSidebar;
