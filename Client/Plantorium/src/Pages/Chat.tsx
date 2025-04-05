import ChatMessages from "../Components/chatComponents/ChatMessages";
import ChatQuestionBar from "../Components/chatComponents/ChatQuestionBar";
import ChatSidebar from "../Components/chatComponents/ChatSidebar";

const Chat = () => {
  return (
    <div className="flex justify-between min-h-screen bg-[#f7fff7]">
      <ChatSidebar />
      <div className=" w-3/4  ">
        <ChatMessages />
        <ChatQuestionBar />
      </div>
    </div>
  );
};

export default Chat;
