import question from "../../Assests/questionmark2.gif";
import chatbot from "../../Assests/chatbot.gif";
import usertext from "../../Assests/usertext_2.png";
import botreply from "../../Assests/botreply_2.png";
import tomatina from "../../Assests/tomatoremovebg.png";
import { motion } from "motion/react";

const ChatBotFeat = () => {
  return (
    <div className="w-screen flex flex-col">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="2xl:text-7xl xl:text-6xl lg:text-5xl text-center font-bold font-anakatoria tracking-wide p-10"
        >
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
        </motion.div>
      </div>
      <div className="w-full 2xl:h-[65vh] xl:h-[60vh] lg:h-[50vh] flex justify-between">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "66%" }}
          className="bg-[#fef7a2] rounded-r-full  flex flex-col items-center  gap-10 font-dancing "
        >
          <h1 className="mt-10  2xl:text-6xl xl:text-5xl lg:text-4xl ">
            Get immediate accurate answers !!!
          </h1>
          <img
            src={usertext}
            alt="user text"
            className=" w-1/2  rounded-full mix-blend-multiply"
          />
          <img
            src={botreply}
            alt="bot reply"
            className="w-3/4 self-start ml-10 mix-blend-multiply"
          />
        </motion.div>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={tomatina}
          alt="tomato bg remove"
          className="w-[40%] object-contain self-end "
        />
      </div>
    </div>
  );
};

export default ChatBotFeat;
