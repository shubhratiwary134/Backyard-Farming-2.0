import ChatQuestionBar from "../Components/chatComponents/ChatQuestionBar";
import ChatSidebar from "../Components/chatComponents/chatSidebar";

const Chat = () => {
  return (
    <div className="flex justify-between">
      <ChatSidebar />
      <ChatQuestionBar />
    </div>
  );
};

export default Chat;
