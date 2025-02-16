import question from "../../Assests/questionmark2.gif";
import chatbot from "../../Assests/chatbot.gif";
import usertext from "../../Assests/usertext.png";
import botreply from "../../Assests/botreply.png";
import tomatina from "../../Assests/tomatoremovebg.png";

const ChatBotFeat = () => {
  return (
    <div className="relative w-screen flex flex-col items-center justify-center  bg-[#f7fff7] py-5">
      {/*line1*/}
      <h1 className="text-6xl font-bold font-poppins text-black flex items-center gap-6 tracking-widest">
        Turn Your Questions
        <img
          src={question}
          alt="question gif"
          className="w-52 h-34 inline-block rounded-full"
        />
        Into Crops
      </h1>
      {/*line2*/}
      <h1 className="text-6xl font-bold font-poppins text-black flex items-center gap-6 tracking-widest ml-24">
        Talk to Your Farming ChatBot!
        <img
          src={chatbot}
          alt="chatbot gif"
          className="w-44 h-44 inline block"
        />
      </h1>
      {/*replies*/}
      <div className="flex justify-between w-full px-20">
        <div className="flex flex-col items-start justify-between mt-16">
          <h1 className="text-3xl font-poppins text-black tracking-widest mt-6 mb-4 w-auto text-center whitespace-nowrap ">
            Get immediate accurate answers
          </h1>

          <div className="flex flex-col items-center w-1/2">
            <img src={usertext} alt="user text" className="w-[600px] " />
            <img
              src={botreply}
              alt="bot reply"
              className="w-[600px] max-w-none"
            />
          </div>
        </div>
        {/*tomatina*/}
        <img
          src={tomatina}
          alt="tomato bg remove"
          className="absolute bottom-40 right-0 w-[40%]"
        />
      </div>
    </div>
  );
};

export default ChatBotFeat;
