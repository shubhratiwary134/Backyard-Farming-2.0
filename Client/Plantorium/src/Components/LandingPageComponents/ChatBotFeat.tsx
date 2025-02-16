import question from "../../Assests/questionmark2.gif";
import chatbot from "../../Assests/chatbot.gif";
import usertext from "../../Assests/usertext_2.png";
import botreply from "../../Assests/botreply.png";
import tomatina from "../../Assests/tomatoremovebg.png";

const ChatBotFeat = () => {
  return (
    <div className="flex flex-col p-10">
      <div>
        <div className="text-7xl text-center font-bold font-poppins">
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
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-20">
          <h1 className="text-4xl">Get immediate accurate answers</h1>
          <img src={usertext} alt="user text" className=" " />
          <img src={botreply} alt="bot reply" className="" />
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
