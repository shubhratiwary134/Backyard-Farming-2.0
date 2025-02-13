import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const WhatsIncluded = () => {
  return (
    <div className="w-screen px-20  bg-[#486B4A] font-poppins">
      <div className="my-10 text-5xl font-heading text-white">
        What's Included?
      </div>
      <div className="flex w-full justify-between my-5">
        <div className="w-80 p-9 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#F8E6C8]  text-xl flex justify-between items-center tracking-wide font-poppins">
            Personalized Guidance
            <CiSearch size={30} />
          </div>
          <div className="text-[#BDBDBD] mt-2 font-poppins">
            Get weekly, tailored advice based on the specific plants you're
            growing and your local climate. From planting tips to harvesting
            milestones, our roadmap is crafted to help you succeed at every
            step.
          </div>
        </div>
        <div className="w-80 p-9 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#F8E6C8] text-xl flex justify-between items-center tracking-wide font-poppins">
            Connect with Farmers
            <IoPeople size={24} />
          </div>
          <div className="text-[#BDBDBD]  mt-2 font-poppins">
            Join a community of backyard farmers who share your passion!
            Exchange tips, showcase your progress, and learn from fellow
            gardeners to make your journey more rewarding and fun.
          </div>
        </div>
        <div className="w-80 p-9 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#F8E6C8] text-xl flex justify-between items-center tracking-wide font-poppins">
            {" "}
            Ask Questions
            <FaRegComment size={24} />
          </div>
          <div className="text-[#BDBDBD] mt-2 font-poppins">
            Need quick answers? Our integrated chatbot is here to help! Get
            real-time answers to common gardening questions, from planting
            advice to troubleshooting plant health issues.
          </div>
        </div>
        <div className="w-80 p-9 flex flex-col border-2 border-gray-300 rounded-lg">
          <div className="text-[#F8E6C8] text-xl  flex justify-between items-center tracking-wide font-poppins">
            Get Help with Pests
            <CiGlobe size={30} />
          </div>
          <div className="text-[#BDBDBD]  mt-2 font-poppins">
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
