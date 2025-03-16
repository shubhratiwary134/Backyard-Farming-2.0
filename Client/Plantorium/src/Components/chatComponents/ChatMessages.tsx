import { IoReload } from "react-icons/io5";
import { useAppSelector } from "../../store/Hook";

const ChatMessages = () => {
  const { currentMessages } = useAppSelector((state) => state.chat.currentChat);
  const { error } = useAppSelector((state) => state.chat);
  return (
    <div
      className="w-4/5 h-4/5 flex flex-col gap-20 overflow-y-auto p-5 "
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {currentMessages && currentMessages.length > 0 ? (
        currentMessages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.role === "bot"
                ? "self-start text-xl"
                : "self-end bg-green-800 text-white"
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
      {error === null ? (
        ""
      ) : (
        <div className="w-full flex flex-col items-center gap-10 justify-center text-xl font-poppins">
          Error getting the response , please try again
          <IoReload size={32} />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
