import ChatMessages from "../Components/chatComponents/chatMessages";
import ChatQuestionBar from "../Components/chatComponents/ChatQuestionBar";
import ChatSidebar from "../Components/chatComponents/ChatSidebar";

const Chat = () => {
  return (
    <div className="flex justify-between bg-[#f7fff7]">
      <ChatSidebar />
      <div className=" w-3/4  ">
        <ChatMessages />
        <ChatQuestionBar />
      </div>
    </div>
  );
};

export default Chat;
