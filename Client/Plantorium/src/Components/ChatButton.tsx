import { useNavigate } from "react-router";

const ChatButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="w-28 rounded-full absolute bottom-10 bg-red-500 p-5 right-10"
        onClick={() => {
          navigate("/chat");
        }}
      >
        Chat
      </button>
    </div>
  );
};

export default ChatButton;
