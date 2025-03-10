import { useAppSelector } from "../../store/Hook";

const ChatMessages = () => {
  const { currentChat } = useAppSelector((state) => state.chat);
  return (
    <div
      className="w-4/5 h-4/5 flex flex-col gap-20 overflow-y-auto p-5 "
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {currentChat.currentMessages && currentChat.currentMessages.length > 0 ? (
        currentChat.currentMessages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.role === "bot"
                ? "self-start"
                : "self-end bg-green-400 text-white"
            } py-5 px-5  rounded-xl`}
          >
            {message.text}
          </div>
        ))
      ) : (
        <div className=" text-gray-600 text-7xl flex justify-center  items-center h-full">
          Start Querying...
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
