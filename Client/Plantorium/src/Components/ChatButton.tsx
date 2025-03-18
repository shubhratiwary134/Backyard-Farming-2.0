import { useNavigate } from "react-router";
import chatbotLogo from "../Assests/logoChat.jpg";
const ChatButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="w-44 rounded-full absolute bottom-10 hover:px-10 hover:scale-110 duration-200 p-5 right-10 shadow-2xl shadow-black"
        onClick={() => {
          navigate("/chat");
        }}
      >
        <img src={chatbotLogo} className="w-full rounded-full" />
      </button>
    </div>
  );
};

export default ChatButton;
