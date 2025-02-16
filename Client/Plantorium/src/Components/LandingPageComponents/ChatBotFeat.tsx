import question from "../../Assests/questionmark2.gif";
import chatbot from "../../Assests/chatbot.gif";
import usertext from "../../Assests/usertext_2.png";
import botreply from "../../Assests/botreply_2.png";
import tomatina from "../../Assests/tomatoremovebg.png";

const ChatBotFeat = () => {
  return (
    <div className="w-screen flex flex-col">
      <div>
        <div className="text-7xl text-center font-bold font-anakatoria p-10">
          {" "}
          Turn Your Questions
          <img
            src={question}
            alt="question gif"
            className="w-52 inline-block rounded-full mx-4"
          />
          Into Crops <br />
          Talk to your Farming Chatbot
          <img src={chatbot} alt="chatbot gif" className="w-44 inline-block " />
        </div>
      </div>
      <div className="w-full h-[65vh] flex justify-between">
        <div className="w-[60%] flex flex-col items-center ml-10 gap-10 font-poppins">
          <h1 className="text-4xl">Get immediate accurate answers !!</h1>
          <img src={usertext} alt="user text" className=" w-1/2 " />
          <img
            src={botreply}
            alt="bot reply"
            className="w-2/3 self-start ml-10"
          />
        </div>

        <img
          src={tomatina}
          alt="tomato bg remove"
          className="w-[40%] object-contain self-end"
        />
      </div>
    </div>
  );
};

export default ChatBotFeat;
