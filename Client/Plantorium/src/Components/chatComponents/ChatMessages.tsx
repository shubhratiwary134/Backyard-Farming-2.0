import { useAppSelector } from "../../store/Hook";

const ChatMessages = () => {
  const { currentChat } = useAppSelector((state) => state.chat);
  return (
    <div className="flex flex-col gap-40 overflow-y-auto">
      {currentChat.currentMessages.map((message) => (
        <div
          className={`${message.role === "bot" ? "self-start" : "self-end"}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
