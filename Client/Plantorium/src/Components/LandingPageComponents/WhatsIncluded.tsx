import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const WhatsIncluded = () => {
  return (
    <div className="w-screen px-20 mt-10 bg-[#486B4A]">
      <div className="my-10 text-5xl font-heading text-white">
        Whats Included !!!
      </div>
      <div className="flex w-full justify-between my-5">
        <div className="w-80 p-5 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#FFF6E5]  text-xl font-heading flex justify-between items-center">
            Personalized Guidance
            <CiSearch size={24} />
          </div>
          <div className="text-gray-300 mt-2 ">
            Get weekly, tailored advice based on the specific plants you’re
            growing and your local climate. From planting tips to harvesting
            milestones, our roadmap is crafted to help you succeed at every step
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#FFF6E5] text-xl font-heading flex justify-between items-center">
            Connect with Farmers
            <IoPeople size={24} />
          </div>
          <div className="text-gray-300 mt-2 ">
            Join a community of backyard farmers who share your passion!
            Exchange tips, showcase your progress, and learn from fellow
            gardeners to make your journey more rewarding and fun.
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#FFF6E5] text-xl flex justify-between items-center ">
            {" "}
            Ask Questions
            <FaRegComment size={24} />
          </div>
          <div className="text-gray-300  mt-2">
            Need quick answers? Our integrated chatbot is here to help! Get
            real-time answers to common gardening questions, from planting
            advice to troubleshooting plant health issues
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#FFF6E5] text-xl flex justify-between items-center">
            Get Help with Pests
            <CiGlobe size={24} />
          </div>
          <div className="text-gray-300 mt-2">
            Protect your plants from common pests with tailored tips and
            treatments. Access expert advice on safe and effective ways to
            manage pests without harming your garden.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
