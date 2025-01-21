import {
  PiNumberCircleOneLight,
  PiNumberCircleThreeLight,
  PiNumberCircleTwoLight,
} from "react-icons/pi";
import { motion } from "motion/react";
const HowDoesItWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="w-full px-40 py-20"
    >
      <div className=" text-5xl font-heading flex justify-center">
        How Does It Work ?
      </div>
      <div className="text-gray-500 my-5 font-sans text-lg flex justify-center">
        AI analyzes your unique backyard farm and provides personalized guidance
      </div>
      <div className="flex w-full justify-between mt-5">
        <div className="w-96 flex flex-col items-center gap-5  ">
          <PiNumberCircleOneLight size={64} />
          <div className="text-2xl mr-5 ml-2 font-heading text-center ">
            Upload Your Plant Photos
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 text-center ">
            Start by uploading pictures of your plants or the crops you want to
            grow. Don’t have photos? No problem! Select from a list of popular
            crops to get started.
          </div>
        </div>
        <div className="w-96  flex flex-col items-center  gap-5 rounded-lg">
          <PiNumberCircleTwoLight size={64} />
          <div className="text-2xl mr-5 ml-2 font-heading text-heading">
            Receive Weekly Roadmap
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2  text-center">
            Based on your plant choice, we’ll create a tailored weekly roadmap
            with all the steps you need to help your plants thrive.
          </div>
        </div>
        <div className="w-96  flex flex-col gap-5 items-center">
          <PiNumberCircleThreeLight size={64} />
          <div className="text-2xl mr-5 ml-2 font-heading text-center">
            Track Your Progress
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 text-center">
            Check off completed tasks each week, track your progress, and share
            tips and experiences with other backyard gardeners
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowDoesItWork;
