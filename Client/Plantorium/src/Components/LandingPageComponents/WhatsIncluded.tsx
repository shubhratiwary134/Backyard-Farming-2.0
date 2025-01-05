import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const WhatsIncluded = () => {
  return (
    <div className="w-full px-10 my-10">
      <div className="my-10 text-5xl font-heading ">Whats Included !!!</div>
      <div className="flex w-full justify-between my-5">
        <div className="w-80 p-5 flex flex-col border-4 border-gray-200 rounded-lg">
          <CiSearch size={24} />
          <div className="text-neutral-900  text-xl">Personalized Guidance</div>
          <div className="text-gray-500 ">
            Get weekly, tailored advice based on the specific plants you’re
            growing and your local climate. From planting tips to harvesting
            milestones, our roadmap is crafted to help you succeed at every step
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-4 border-gray-200 rounded-lg">
          <IoPeople size={24} />
          <div className="text-neutral-900 text-xl">
            Connect with Other Farmers
          </div>
          <div className="text-gray-500">
            Join a community of backyard farmers who share your passion!
            Exchange tips, showcase your progress, and learn from fellow
            gardeners to make your journey more rewarding and fun.
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-4 border-gray-200 rounded-lg">
          <FaRegComment size={24} />
          <div className="text-neutral-900 text-xl">Ask Questions</div>
          <div className="text-gray-500 text-md">
            Need quick answers? Our integrated chatbot is here to help! Get
            real-time answers to common gardening questions, from planting
            advice to troubleshooting plant health issues
          </div>
        </div>
        <div className="w-80 p-5 flex flex-col border-4 border-gray-200 rounded-lg">
          <CiGlobe size={24} />
          <div className="text-neutral-900 text-xl">Get Help with Pests</div>
          <div className="text-gray-500">
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
