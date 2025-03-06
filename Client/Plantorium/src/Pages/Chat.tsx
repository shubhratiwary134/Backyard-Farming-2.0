import ChatMessages from "../Components/chatComponents/chatMessages";
import ChatQuestionBar from "../Components/chatComponents/ChatQuestionBar";
import ChatSidebar from "../Components/chatComponents/ChatSidebar";

const Chat = () => {
  return (
    <div className="flex justify-between ">
      <ChatSidebar />
      <div className="flex flex-col w-3/4 justify-between">
        <ChatMessages />
        <ChatQuestionBar />
      </div>
    </div>
  );
};

export default Chat;
