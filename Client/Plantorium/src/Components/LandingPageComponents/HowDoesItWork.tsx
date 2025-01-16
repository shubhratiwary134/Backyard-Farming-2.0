import image1 from "../../Assests/YellowTheme.jpg";
import image2 from "../../Assests/ReportGIF.gif";
import image3 from "../../Assests/TrackProgress.gif";
import { motion } from "motion/react";
const HowDoesItWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full px-10 mt-10"
    >
      <div className=" text-5xl font-heading ">How Does It Work ?</div>
      <div className="text-gray-500 mt-5 font-sans text-xl">
        AI analyzes your unique backyard farm and provides personalized guidance
      </div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96 overflow-hidden flex flex-col border-2 gap-5 border-gray-200 rounded-lg ">
          <img
            src={image1}
            className="w-full h-2/3 hover:scale-105 duration-200"
          />
          <div className="text-3xl mr-5 ml-2 font-heading ">
            Upload Your Plant Photos
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 ">
            Start by uploading pictures of your plants or the crops you want to
            grow. Don’t have photos? No problem! Select from a list of popular
            crops to get started.
          </div>
        </div>
        <div className="w-96 overflow-hidden flex flex-col border-2 gap-5 border-gray-200 rounded-lg">
          <img
            src={image2}
            className="w-full  h-2/3 border-b-2 hover:scale-105 duration-200"
          />
          <div className="text-3xl mr-5 ml-2 font-heading">
            Receive Weekly Roadmap
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2  ">
            Based on your plant choice, we’ll create a tailored weekly roadmap
            with all the steps you need to help your plants thrive.
          </div>
        </div>
        <div className="w-96 overflow-hidden flex flex-col border-2 gap-5 border-gray-200 rounded-lg">
          <img
            src={image3}
            className="w-full  h-2/3 hover:scale-105 duration-200"
          />
          <div className="text-3xl mr-5 ml-2 font-heading ">
            Track Your Progress
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 ">
            Check off completed tasks each week, track your progress, and share
            tips and experiences with other backyard gardeners
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowDoesItWork;
